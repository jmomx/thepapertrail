---
---



var cityarray = {"cities":[
  {% for city in site.cities %}
      {"name":"{{ city.name }}", "videourl":"{{ city.videourl }}",
        "prettyname":"{{ city.prettyname }}"},
  {% endfor %}
  {"name":"lastitem", "videourl":"https://player.vimeo.com/external/142699110.sd.mp4?s=0564ce1135a2e759fa5629a6c72c771f&profile_id=112", "prettyname":"Metz"}
]};

var cityarray = cityarray.cities;


var namemap = {}

for (var i = 0; i < cityarray.length; i++) {
  namemap[cityarray[i].name] = cityarray[i].prettyname;
}

var urlmap = {}

for (var i = 0; i < cityarray.length; i++) {
  urlmap[cityarray[i].name] = cityarray[i].videourl;
}

//var cityobj = JSON.parse(citytext);
