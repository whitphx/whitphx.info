---
title: How to install Python for Intel chip on M1 Mac
date: "2022-02-06T17:37:59+09:00"
description:
tags: ["dev"]
---

# TL;DR

To install Python 3.8.7 on M1 mac, for example,
```shell
arch -arch x86_64 env PATH=${PATH/\/opt\/homebrew\/bin:/} pyenv install 3.8.7
```

This is from [M1版とIntel版のHomebrewを併用するときpyenvがうまく動かない問題を解決する - Qiita](https://qiita.com/tomtsutom0122/items/52487730001247fdc2c5)

If you encounter platform compatibility problems during package installation, upgrading pip sometimes resolves it.
```shell
$ pip install -U pip
```

# Prerequisites
* Install `homebrew` both for Arm and x86_64.
* Set up `pyenv`

# When is this necessary?
## When you have to use Python versions that do not have Arm build
For example, Python <=3.8.

## When you have to use packages that do not have Arm build
Some Python packages include binaries compiled for each specific platform.
If you use such packages and they do not have Arm-compatible binaries, you have to use Intel-compatible Python runtime, even if the Python runtime itself has Arm-compatible version.

# Example case
I tried to use [`streamlit-webrtc`](https://github.com/whitphx/streamlit-webrtc/) with Python 3.9 on M1 Mac.

NOTE: For app development using `streamlit-webrtc`, see [this post](../20211231-streamlit-webrtc-video-app-tutorial/).

At first, I installed Python 3.9.3 for Arm via `pyenv`.
```shell
$ arch  # arm64
$ pyenv install 3.9.3
$ pyenv shell 3.9.3
$ python -V  # Python 3.9.3
```

Then, inside a project directory, I set up a virtual env and installed necessary packages, `streamlit` and `streamlit-webrtc`.
```
$ python -m venv .venv
$ . .venv/bin/activate
$ pip install -U pip
$ pip install streamlit
$ pip install streamlit-webrtc
```

Next, I created an example `app.py` file as below (This is a Streamlit app script. See [this post](../20211231-streamlit-webrtc-video-app-tutorial/) for the details),
```python
from streamlit_webrtc import webrtc_streamer

webrtc_streamer(key="sample")
```

and run the Streamlit app with the command below.
```shell
$ streamlit run app.py
```

Then the following error occurred.
```
Traceback (most recent call last):
  File "/path/to/python39-m1test/.venv/bin/streamlit", line 5, in <module>
    from streamlit.cli import main
  File "/path/to/python39-m1test/.venv/lib/python3.9/site-packages/streamlit/__init__.py", line 72, in <module>
    from streamlit.delta_generator import DeltaGenerator as _DeltaGenerator
  File "/path/to/python39-m1test/.venv/lib/python3.9/site-packages/streamlit/delta_generator.py", line 62, in <module>
    from streamlit.elements.image import ImageMixin
  File "/path/to/python39-m1test/.venv/lib/python3.9/site-packages/streamlit/elements/image.py", line 25, in <module>
    from PIL import Image, ImageFile
  File "/path/to/python39-m1test/.venv/lib/python3.9/site-packages/PIL/Image.py", line 89, in <module>
    from . import _imaging as core
ImportError: dlopen(/path/to/python39-m1test/.venv/lib/python3.9/site-packages/PIL/_imaging.cpython-39-darwin.so, 0x0002): symbol not found in flat namespace '_xcb_connect'
```
It seemed that the compiled binary in the PIL package was not working correctly in this platform.

So I removed the virtual evn and the installed Python runtime once,
```shell
$ rm -rf .venv
```
```shell
$ pyenv uninstall 3.9.3
```

and installed the Python runtime for Intel chip with the command described above.
```shell
$ arch -arch x86_64 env PATH=${PATH/\/opt\/homebrew\/bin:/} pyenv install 3.9.3
```

After that, I followed the same steps to set up venv and install the dependencies.

Finally, everything worked correctly.
