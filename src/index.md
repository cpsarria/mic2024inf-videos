---
title: MIC 2024 - CP Sarria Inf.A
logo: img/escut.png
layout: "base.njk"
---

## Partits

{% for partit in collections.partits %}
- [{{ partit.data.title }} ({{ partit.data.fecha }})]({{ partit.data.url }})
{% endfor %}

