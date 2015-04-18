var cityarray = {"cities":[
  
      {"name":"bologna", "videourl":"http://player.vimeo.com/external/124641420.sd.mp4?s=0ae924405783d663c8144d13781841bd&profile_id=112",
        "prettyname":"Bologna"},
  
      {"name":"buffalo", "videourl":"http://player.vimeo.com/external/124722114.sd.mp4?s=1cade08593c88e909772c01da931c44c&profile_id=112",
        "prettyname":"Buffalo"},
  
      {"name":"chicagolakefront", "videourl":"http://player.vimeo.com/external/124834839.sd.mp4?s=87ff79d199816c08ad14f3f7df149e10&profile_id=112",
        "prettyname":"Chicago - Lakefront"},
  
      {"name":"chicagoprarie", "videourl":"http://player.vimeo.com/external/124795070.sd.mp4?s=be8269d44e62829adac654d79a93aeeb&profile_id=112",
        "prettyname":"Chicago - Prarie"},
  
      {"name":"grenada", "videourl":"http://player.vimeo.com/external/124791823.sd.mp4?s=9ab65380ac66654e412ff23857a63512&profile_id=112",
        "prettyname":"Grenada"},
  
      {"name":"india", "videourl":"http://player.vimeo.com/external/125223105.sd.mp4?s=e6f27c87e7cf35f8ee92cc3c458cf308&profile_id=112",
        "prettyname":"India"},
  
      {"name":"kansascity", "videourl":"http://player.vimeo.com/external/124847532.sd.mp4?s=99903a086107a2b8fe0a3239182bec38&profile_id=112",
        "prettyname":"Kansas City"},
  
      {"name":"london", "videourl":"http://player.vimeo.com/external/124890315.sd.mp4?s=3c6b80a597bcce0c7b33e5c30642d0e5&profile_id=112",
        "prettyname":"London"},
  
      {"name":"metz", "videourl":"http://player.vimeo.com/external/124894943.sd.mp4?s=01d9d4140d107507f4af1e0ebda28aa3&profile_id=112",
        "prettyname":"Metz"},
  
      {"name":"seattle", "videourl":"http://player.vimeo.com/external/124865521.sd.mp4?s=e32efd753185ec08928e4e28bc97e470&profile_id=112",
        "prettyname":"Seattle"},
  
      {"name":"tokyo", "videourl":"http://player.vimeo.com/external/124895739.sd.mp4?s=13bed66f89a280f4add1d94f21e63711&profile_id=112",
        "prettyname":"Tokyo"},
  
  {"name":"lastitem", "videourl":"http://player.vimeo.com/external/124890315.sd.mp4?s=3c6b80a597bcce0c7b33e5c30642d0e5&profile_id=112", "prettyname":"London"}
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
