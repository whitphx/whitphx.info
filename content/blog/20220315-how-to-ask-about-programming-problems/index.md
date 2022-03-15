---
title: How to ask about programming problems
date: "2022-03-15T20:20:08+09:00"
description: There are some points you need to know when you ask about programming problems on forums.
tags: []
---

# Objective
This article explains some things you should know when asking programming problems such as "X is not working" or "What's this error?".
* This article mainly explains superficial and formal techniques that make the questions readable and likely to get responses.
* This article is NOT focusing on soft skills or moral advice like "be polite."

# The most important idea
The principal is to pay as much effort as possible to save the respondents' time and effort to understand and solve the problem.

The problem-solving process includes, for example,
* reproducing the bug in their own environment by running the actual code
* reading the logs
* googling the error messages

# Things to do and not to do
So, you should be aware of the following things to support solving the problem.

* Do research and try possible solutions by yourself beforehand as much as possible, and post the progress and results.
  * Information such as "I tried X but it didn't work" or "I think Y may be the related topic, but couldn't find a clear answer" is a good starting point for problem solving.
  * Incidentally, such your effort motivates respondents. People want to support those who pay efforts.
* Do provide all the information for the respondents to reproduce the problem.
  * It includes, but is not limited to, source code, assets, and/or environment information.
  * Think whether it's possible to run the code and encounter the same problem from zero only with the information you post?
  * If the amount is huge, consider to
    * upload them to GitHub and post the link.
    * create a shorter code snippet that reproduces the same problem and post it.
* Do share the background or the high-level requirements.
  * Why do you want to solve this problem? What do you want build after solving the problem? What kind of software/product are you developing?
  * Such information is sometimes so important rather than the error description itself. Do not omit it just by your decision.
* Do format the source code and the logs.
  * For example, if Markdown can be used in the forum, put ` ``` ` surrounding the code or logs[^1].
  * Markdown can be used in many web forums. Learn Markdown syntax. You have to use at least code blocks. See https://www.markdownguide.org/extended-syntax/#fenced-code-blocks.
  * Non-formatted code and logs are very hard to read.
* Don't post the source code or the logs as screenshots.
  * They cannot be copied to the clipboard. It takes much effort to run the code or google the logs. It's so annoying.
* Do paste the images or the screenshots if you have visual results related to the problem.

[^1]: Precisely, the code block with ` ``` ` is an extended Markdown syntax, such as [GitHub-flavored Markdown (GFM)](https://github.github.com/gfm/). Anyway, many web forums are supporting it.
