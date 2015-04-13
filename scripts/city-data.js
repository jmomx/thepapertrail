var cityarray = {"cities":[
  
      {"name":"bologna", "videourl":"http://player.vimeo.com/external/124641420.hd.mp4?s=db39db17d2804e38f4945b8e9c039853&profile_id=113",
        "videourl":"http://player.vimeo.com/external/124641420.hd.mp4?s=db39db17d2804e38f4945b8e9c039853&profile_id=113"},
  
      {"name":"buffalo", "videourl":"http://player.vimeo.com/external/124722114.hd.mp4?s=df5e61be9912c638812af75b910c4449&profile_id=113",
        "videourl":"http://player.vimeo.com/external/124722114.hd.mp4?s=df5e61be9912c638812af75b910c4449&profile_id=113"},
  
      {"name":"california", "videourl":"",
        "videourl":""},
  
      {"name":"chicago", "videourl":"",
        "videourl":""},
  
      {"name":"colorado", "videourl":"",
        "videourl":""},
  
      {"name":"czechrepublic", "videourl":"",
        "videourl":""},
  
      {"name":"idaho", "videourl":"",
        "videourl":""},
  
      {"name":"ireland", "videourl":"",
        "videourl":""},
  
      {"name":"japan", "videourl":"",
        "videourl":""},
  
      {"name":"newcastleupontyne", "videourl":"",
        "videourl":""},
  
      {"name":"northernlights", "videourl":"",
        "videourl":""},
  
      {"name":"pennsylvania", "videourl":"",
        "videourl":""},
  
      {"name":"seattle", "videourl":"",
        "videourl":""},
  
      {"name":"thecanaryislands", "videourl":"",
        "videourl":""},
  
  {"name":"lastitem", "videourl":"lasturl"}
]};

var cityarray = cityarray.cities;

var urlmap = {}

for (var i = 0; i < cityarray.length; i++) {
  urlmap[cityarray[i].name] = cityarray[i].videourl;
}


//var cityobj = JSON.parse(citytext);
