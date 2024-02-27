---
title: "Limit concurrent execution of compute-intensive code in a Streamlit app"
date: "2024-02-27T17:44:09+09:00"
description:
tags: ["dev"]
lang: en
---

When you are developing a Streamlit app that includes a compute- or resource-intensive task, for example, machine-learning inference using a GPU,
you may want to make sure that such a part of the code runs only in a single thread (session) at a time, even with concurrent multiple user accesses.

In such a case, using a **lock** is a solution.
Streamlit creates a separate thread for each user session, so you can use a lock shared among the threads to control the execution of the compute-intensive code.

(For Gradio-users: _queue_ is a well-known solution for this problem in the case of Gradio.)

Here is an example of how to use a lock in a Streamlit app.
`st.cache_resource` is used to create a global lock that is shared among the threads,
and the lock is used to ensure `compute_intensive_task()` is executed by only one thread at a time.

```python
import streamlit as st
import threading


def compute_intensive_task():
    " Your compute-intensive code here "


@st.cache_resource
def get_global_lock():
    return threading.Lock()


global_lock = get_global_lock()

with st.spinner("Running a compute-intensive task"):
    with global_lock:
        st.write("Task started")
        compute_intensive_task()

st.write("Task completed")
```

With this lock-based control, the concurrency of the locked task is limited to 1, while the queue and worker pattern can be used to control the concurrency to any number.
