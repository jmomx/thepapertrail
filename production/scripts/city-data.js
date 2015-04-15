---
---

var cityarray = {"cities":[
  {% for city in site.cities %}
      {"name":"{{ city.name }}", "videourl":"{{ city.videourl }}",
        "videourl":"{{ city.videourl }}"},
  {% endfor %}
  {"name":"lastitem", "videourl":"http://player.vimeo.com/external/124890315.sd.mp4?s=3c6b80a597bcce0c7b33e5c30642d0e5&profile_id=112"}
]};

var cityarray = cityarray.cities;

var urlmap = {}

for (var i = 0; i < cityarray.length; i++) {
  urlmap[cityarray[i].name] = cityarray[i].videourl;
}


//var cityobj = JSON.parse(citytext);
