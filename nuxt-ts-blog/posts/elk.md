---
title: elk
date: '2020-02-We 18:19:15'
top_img: ./top_img.jpg
tags:
  - '日志采集'
categories:
  - 'docker'
draft: false
---

```yaml
elk:
    image: sebp/elk
    ports:
      - "5601:5601"
      - "9200:9200"
      - "5044:5044"
```
