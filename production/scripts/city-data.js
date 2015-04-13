---
---

var cityarray = {"cities":[
  {% for city in site.cities %}
      {"name":"{{ city.name }}", "videourl":"{{ city.videourl }}",
        "videourl":"{{ city.videourl }}"},
  {% endfor %}
  {"name":"lastitem", "videourl":"lasturl"}
]};

var cityarray = cityarray.cities;

var urlmap = {}

for (var i = 0; i < cityarray.length; i++) {
  urlmap[cityarray[i].name] = cityarray[i].videourl;
}


//var cityobj = JSON.parse(citytext);
