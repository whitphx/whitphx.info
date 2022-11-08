---
title: "Streamlit meets WebAssembly - stlite"
date: "2022-11-04T18:17:00+09:00"
description: "Streamlit apps can run completely on web browsers without the server-side Python runtime"
tags: ["dev", "Streamlit", "Python", "stlite", "WebAssembly"]
---

## TL;DR
* I created a **WebAssembly** (**Wasm**) port of **Streamlit**, "_stlite_".
* You can try it out and share your apps on "[**stlite sharing**](https://edit.share.stlite.net/)", the online code editor + app sharing platform for _stlite_.
* The Wasm-based runtime provides many benefits such as offline capability, data privacy, and scalability.
* In addition to [stlite sharing](https://edit.share.stlite.net/), you can also host your Streamlit/stlite apps [on your web site](https://github.com/whitphx/stlite#use-stlite-on-your-web-page) or create [offline desktop applications](https://github.com/whitphx/stlite/tree/main/packages/desktop-cli#readme). So you can create multi-platform apps only with Python coding.

## Streamlit: a great Python web app framework

[![Streamlit logo](https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.svg)](https://streamlit.io/)

[Streamlit](https://streamlit.io/) is a web app framework with which we can create interactive web apps only with Python coding. It is especially famous and popular for data apps development as it well supports many data widgets cooperating the DS/ML Python ecosystem, while it also covers a wide range of general purpose web development.

<video controls="" loop=""><source src="https://s3-us-west-2.amazonaws.com/assets.streamlit.io/videos/hero-video.mp4"></video>

When you run a Streamlit app, the Streamlit framework starts a web server and it serves a frontend app that is a single page application (SPA) whose contents are dynamically constructed according to your app script written in Python. Then the frontend app continuously communicates with the web server and triggers the Python code executions on the server upon some events to get some results that dynamically update the frontend view.
Due to this unique server-client architecture, we can construct interactive web apps only by writing the logics in the server-side Python code.

![](./images/stlite_archtecture/stlite_archtecture.001.png)

## stlite: client-side Streamlit powered by Pyodide

There had been an epoch-making invent in the Python world - [Pyodide](https://pyodide.org/). It is a CPython runtime compiled for WebAssembly (Wasm) that runs on web browsers (and NodeJS).

[![Pyodide logo](https://pyodide.org/en/stable/_static/pyodide-logo.png)](https://pyodide.org/)

So I customized Streamlit to run on Pyodide runtime and released it as "[stlite](https://github.com/whitphx/stlite)"!

[![stlite logo](https://raw.githubusercontent.com/whitphx/stlite/main/docs/images/logo.svg)](https://github.com/whitphx/stlite)

On _stlite_, the entry point is a JavaScript file that mounts the Streamlit frontend SPA into the HTML page, loads the Pyodide environment, and launches the Streamlit Python server in the Pyodide environment **on the web browser**.

With this architecture, thanks to Pyodide, the Python runtime no longer exists on the server side since it runs on the web browser.
The web server is only for serving the static files such as HTML, JS, and CSS.

![](./images/stlite_archtecture/stlite_archtecture.002.png)

## Pros and Cons

As it runs completely on the browsers, _stlite_ has some benefits that the original Streamlit does not have.

* **Offline capability**:
  As even the Streamlit "server" runs on the browser, all the components resides on the client side, so once all the resources are loaded from the web server, the app can run offline.

* **Data privacy**:
  Since the entire app runs on your browser, even when you do "upload" some files from the file uploader on the page, these files are NEVER sent to any remote servers and only processed within your machine. \
  This feature is sometimes beneficial especially in the applications of data science, machine learning, or statistics where Streamlit is widely used, as these often have strict privacy rules.

* **Scalability**:
  The main workload such as machine learning computation written in Python moves from the server to each browser, so the system becomes scalable.

* **Multi-platform (web, desktop, mobile)**:
  As it runs on web browsers, it can also be an installable app ([PWA](https://web.dev/progressive-web-apps/)), and can be bundled into a desktop app with Electron. Building mobile apps is also on the read map. \
  As a result, you can create interactive apps only in Python with Streamlit and bundle them for each platform.

* **Online editing experience**:
  I developed the online editor & real-time preview service for Streamlit apps based on _stlite_ - **stlite sharing** that we will see below soon.\
  Precisely, this is not purely because of WebAssembly, but the Wasm-based architecture made it easier to create such a service which could not have existed before.

On the other hand, _stlite_ and Pyodide has some disadvantages as a tradeoff.

* **Some packages are not available**:
  Some C extension packages such as TensorFlow cannot be installed because C extensions must be compiled for the Pyodide runtime specifically, while many popular C extensions are already [available](https://github.com/pyodide/pyodide/tree/main/packages) such as NumPy or Pandas.
  For more details, read the Pyodide articles such as [this one](https://pyodide.org/en/stable/usage/faq.html#micropip-can-t-find-a-pure-python-wheel).

* **Large initial payload**:
  A large amount of resources will be downloaded when the user opens the app because Pyodide loads the whole Python runtime and the standard libraries, and _slite_ also downloads the necessary wheel files including the `streamlit` package.

* **Network restriction**:
  For the security reasons, accessing remote resources from the _stlite_ applications are restricted by the browser, e.g. CORS.

* **The source code is open**:
  Note that all the source code and hosted data are sent to the client side, so they are visible to the users. You must not put any secrets on the source code of the _stlite_ apps.

(This section is highly inspired by [the blog post about Shinylive](https://shiny.rstudio.com/py/docs/shinylive.html).)

## Online code editor + app sharing platform: stlite sharing

[**stlite sharing**](https://edit.share.stlite.net/) is an online code editor + app sharing platform for _stlite_. It is the easiest and fastest way to try out _stlite_.

[![stlite sharing OGP](https://edit.share.stlite.net/ogp.png)](https://edit.share.stlite.net/)

The following screenshot is the online editing & app preview mode of **stlite sharing**. You can try it out at https://edit.share.stlite.net/ .

![stlite sharing screenshot](./images/stlite_sharing_screenshot.png)

When you create/edit/delete the files on the left pane, those changes are applied to the virtual file system on top of which _stlite_ runs, then the Streamlit server detects the file changes and recommends you to hot-reload the application, as shown in the screenshot below.
(The file change detection and hot-reloading is a part of the Streamlit core features. If you are not familiar with it, read [the official document](https://docs.streamlit.io/library/get-started/main-concepts#development-flow).)

![stlite sharing screenshot on the file change](./images/stlite_sharing_screenshot_file_changes.png)

The file changes are saved to the file system when the "Save" button is clicked.
You can also add or delete the files on the file tabs.

### Shareable URLs

On _stlite sharing_, you can get the shareable URL of the current app displayed at top right. There is also the "Open App" link next to it, through which you can open the URL.

![stlite sharing screenshot on the file change](./images/stlite_sharing_screenshot_sharable_link.png)

By navigating to the URL or clicking the link, the app opens in the sharing mode as below, where only the Streamlit app opens and there are not the editor, the sharing link, and any other widgets.

![stlite sharing screenshot on the app sharing mode](./images/stlite_sharing_screenshot_app.png)

Its URL is `https://share.stlite.net/` with a long hash like `#!ChBz...`.

The host `https://share.stlite.net/` is for the app sharing mode of _stlite sharing_ while the editor mode we have seen above is at `https://edit.share.stlite.net/`.

In the long hash part of the URL like `#!ChBz...`,
all the source code and data edited on the editor are encoded and embedded, so you can share the app only by copying this URL.

Another good point of this approach is, since all the code and data are embedded into the URL hash, these data are [never uploaded and saved to the remote server](https://en.wikipedia.org/wiki/URI_fragment#Basics).

The encoded URL hash is also loadable on the editor mode, so if you open the editor mode URL, https://**edit**.share.stlite.net/ with the hash, the app data will be restored on the editor.

Note that some SNS and URL shortening services cut off the long URLs, so you should take care of it when sharing the URL on such platforms. For the details, read [this part of the Shinylive article](https://shiny.rstudio.com/py/docs/shinylive.html#sharing-shinylive-applications).

This URL mechanism is inspired by [Shinylive](https://shiny.rstudio.com/py/docs/shinylive.html).

### Adding files

By clicking the "+" button at the file tabs area, you can create a new file.

You can also upload files from your local env (the files are never "uploaded" to any remote servers. They are just sent to the virtual file system on your browser.) Though this uploader, **you can also add binary files**.

![](./images/stlite_sharing_add_and_upload.png)

### Files in directories and Multipage apps support

You can edit the file name on the tab, and importantly, by inserting the file path delimiter, `/`, you can create files in directories.

![](./images/stlite_sharing_files_new_page.png)

With this feature, _stlite sharing_ supports the Streamlit's **Multipage apps**.
In short, by creating a Python file in the `pages/` directory (`pages/*.py`), you can add a new page in the app.
For the details, read the [official document about Multipage apps](https://docs.streamlit.io/library/get-started/multipage-apps).

### Installing packages

When you need to install some packages, use the special "requirements" tab.

![The requirements tab](./images/stlite_sharing_requirements_tab.png)

The package names written in the editor on this tab will be passed to the package installer [`micropip.install()`](https://pyodide.org/en/stable/usage/api/micropip-api.html#micropip.install) internally (on the Pyodide runtime, [`micropip`](https://pyodide.org/en/stable/usage/api/micropip-api.html) is used as a package manager) when clicking the "Save" button.
Write one package name per line.

This is a special tab in that the file content is not saved into the file system. It is used only for specifying the package names passed to `micropip.install()`.

Please note again that some C extension packages cannot be installed. The following screenshot is the sample of such a case, where installing a C extension failed.
![Installation failure](./images/stlite_sharing_failed_installing.png)

### Samples
You can find some samples on the side menu, so check out these! I hope some inspire you.

For example, the "Streamlit Hello" demo runs the official Streamlit demo on _stlite_ while it is available through the `streamlit hello` command with the original Streamlit.

![streamlit hello demo](./images/stlite_sharing_streamlit_hello_sample.png)

With a recent release of Pyodide [0.21](https://blog.pyodide.org/posts/0.21-release/), many C-extensions became available including OpenCV.
_stlite sharing_ includes the samples using OpenCV and scikit-image with real-time video streaming. Even these samples run on web browsers and nothing are sent to any remote servers!

![OpenCV demo](./images/stlite_sharing_opencv_sample.png)

https://twitter.com/whitphx/status/1583352801195065346

### Loading apps from GitHub or Gist

Instead of the encoded URL hash explained above,
you can host your Python script somewhere and pass its URL to _stlite sharing_ via the URL hash as below.

```
https://share.stlite.net/#https://...py
```

If the URL is of GitHub or Gist, you can pass the preview page URL instead of the raw file URL.
For example, https://share.stlite.net/#https://github.com/napoles-uach/test/blob/main/app.py works.

When you need to install some packages, use the following format instead.
```
https://share.stlite.net/#url=<Script URL>?req=<Package1>&req=<Package2>
```
The example of this format installing `opencv-python` and `matplotlib` follows: https://share.stlite.net/#url=https://github.com/whitphx/stlite-sample/blob/main/opencv-image-processing.py&req=opencv-python&req=matplotlib \
There is also the Gist version: https://share.stlite.net/#url=https://gist.github.com/whitphx/f23b7b2bbda19cd421121bd72ebf2101&req=opencv-python&req=matplotlib

## Host your Streamlit app on your web site

_stlite_ also supports self-hosting the apps.

All you have to do is write and host a single HTML file.

It would be something like below, where you can embed the Python source code into the JS code as a string literal.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>stlite app</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@stlite/mountable@0.14.0/build/stlite.css"
    />
  </head>
  <body>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/npm/@stlite/mountable@0.14.0/build/stlite.js"></script>
    <script>
      stlite.mount(
        `
import streamlit as st

name = st.text_input('Your name')
st.write("Hello,", name or "world")
`,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

If you need to install some packages, specify the entrypoint file name, and/or use multiple files, use the following more flexible API.

```js
stlite.mount(
  {
    requirements: ["matplotlib"], // Packages to install
    entrypoint: "streamlit_app.py", // The target file of the `streamlit run` command
    files: {
      "streamlit_app.py": `
import streamlit as st
import matplotlib.pyplot as plt
import numpy as np

size = st.slider("Sample size", 100, 1000)

arr = np.random.normal(1, 1, size=size)
fig, ax = plt.subplots()
ax.hist(arr, bins=20)

st.pyplot(fig)
`,
    },
  },
  document.getElementById("root")
);
```

After writing the HTML file, host it wherever you like, such as GitHub Pages.
In your local env, you can test it with `python -m http.server 8000`.

This YouTube video may guide you to set it up on GitHub Pages (although the _stlite_ API used in the video is out-dated now.)

https://youtu.be/VQdktxgbmmg

**Please read the [README](https://github.com/whitphx/stlite#use-stlite-on-your-web-page) for the details about self-hosting apps!**.

## Bundle your Streamlit app as a desktop app

The _stlite_ apps run on web browsers, so it is also possible to bundle them into desktop apps with Electron.

![desktop app sample](./images/desktop_app.png)

https://twitter.com/DataChaz/status/1577750208364134421

To create your own desktop app with _stlite_,
**follow this instruction! ->** https://github.com/whitphx/stlite/tree/main/packages/desktop-cli#readme

There is a sample app repository and its distributable files too.
* [A sample app repository](https://github.com/whitphx/stlite-desktop-example)
* [Distributable files](https://github.com/whitphx/stlite-desktop-example/releases/tag/v0.2.0) (the macOS app file is not signed, so the security alert may be shown)

## Tell us your story!

When you create some apps with _stlite_, please share it!

If it's on **stlite sharing**, all you have to do is copy and paste the URL 👍

These are good places to share your apps, samples, or case studies!
* [**stlite** GitHub Discussions](https://github.com/whitphx/stlite/discussions/categories/show-and-tell)
* [Streamlit community forum](https://discuss.streamlit.io/)
