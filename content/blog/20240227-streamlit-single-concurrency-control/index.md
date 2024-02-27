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

Note that, with this lock-based approach, the concurrency of the locked task is limited to 1 per lock, while the queue and worker pattern can be used to control the concurrency to any number.

Practically, it would be a good idea to add a button to manually trigger the compute-intensive task in such cases. Without it, the task would be executed every time a new user accesses the app or the app is reloaded, which is not efficient.

```python
import streamlit as st
import threading


def compute_intensive_task():
    " Your compute-intensive code here "


@st.cache_resource
def get_global_lock():
    return threading.Lock()


global_lock = get_global_lock()

if st.button("Run a compute-intensive task"):
    with st.spinner("Running a compute-intensive task"):
        with global_lock:
            st.write("Task started")
            compute_intensive_task()

    st.write("Task completed")
```

If you want something like "concurrency group", you can create multiple locks and use them in the same way as below. To do so, `get_global_lock()` is changed to accept a `key` argument so it returns different locks for different keys, as the `st.cache_resource` decorator controls the cache with the func arguments (and the func's source code).

```python
import streamlit as st
import threading


@st.cache_resource
def get_global_lock(key):
    return threading.Lock()


global_lock_A = get_global_lock("A")

with st.spinner("Running a compute-intensive task A"):
    with global_lock_A:
        st.write("Task A started")
        compute_intensive_task_A()

global_lock_B = get_global_lock("B")

with st.spinner("Running a compute-intensive task B"):
    with global_lock_B:
        st.write("Task B started")
        compute_intensive_task_B()

st.write("Task completed")
```
