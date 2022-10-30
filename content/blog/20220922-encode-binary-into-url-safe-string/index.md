---
title: Best way to encode binary data into URL-safe string
date: "2022-09-22T15:20:57+09:00"
description:
tags: ["dev"]
---

## TL;DR

Use **base64url**.
* RFC: https://datatracker.ietf.org/doc/html/rfc4648#section-5
* Wikipedia: https://en.wikipedia.org/wiki/Base64#Variants_summary_table

base64url is a base64 variant, replacing `+` and `/` in the original version with `-` and `_` and removing the padding (`=`).

## Why?

The URL-safe characters are `[A-Za-z0-9-._~]` which includes 66 characters.

[This StackOverflow answer](https://stackoverflow.com/a/695469/13103190) refers to the section 2.3 of [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt) that says the URL-safe characters ("Unreserved Characters") are
>  unreserved  = ALPHA / DIGIT / "-" / "." / "_" / "~"

> ALPHA (%41-%5A and %61-%7A), DIGIT (%30-%39)

is

> ALPHA (A-Z and a-z), DIGIT (0-9)


[What is the smallest URL friendly encoding? (StackOverflow)](https://stackoverflow.com/questions/10111585/what-is-the-smallest-url-friendly-encoding)


## Motivation
