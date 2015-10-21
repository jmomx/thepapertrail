var cityarray = {"cities":[
  
      {"name":"lubeck", "videourl":"https://player.vimeo.com/external/143101562.sd.mp4?s=ae76e55714762f6704f95fb30f7abaca&profile_id=112",
        "prettyname":"Lubeck"},
  
      {"name":"metz", "videourl":"https://player.vimeo.com/external/142699110.sd.mp4?s=0564ce1135a2e759fa5629a6c72c771f&profile_id=112",
        "prettyname":"Metz"},
  
      {"name":"tokyo", "videourl":"http://player.vimeo.com/external/143105129.sd.mp4?s=8c8fba04578856d47cccc7ec69998c28&profile_id=112",
        "prettyname":"Tokyo"},
  
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
