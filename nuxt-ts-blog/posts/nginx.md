---
title: nginx
date: '2020-02-Mo 12:57:46'
top_img: ./top_img.jpg
tags:
  - '服务器'
categories:
  - 'docker'
draft: false
---
```yaml
version: '2.0'

services:
  nginx:
    restart: always
    image: nginx
    ports:
      - 80:80
      - 443:443
    volumes:
      - ~/html:/usr/share/nginx/html
```
