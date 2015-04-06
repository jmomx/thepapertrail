---
---

var citytext = {"cities":[
  {% for city in site.cities %}
      {"name":"{{ city.name }}", "videourl":"{{ city.videourl }}"},
  {% endfor %}
  {"name":"lastitem", "videourl":"lasturl"}
]}

var cityobj = JSON.parse(citytext)
