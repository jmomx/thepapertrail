/*
 * The Paper Trail
 * John Morrow - 2015
 * Core JS
 *
 */

var edgeAnimationLength = 500; //
var edgeAnimationDelay = 2000;
var edgeBarTO = null;

$(document).ready( function() {

    // pick a video to use
    var keys = Object.keys(urlmap);
    var videonum = Math.floor(Math.random() * keys.length);
    
    switchto(keys[videonum]);

   // when the mouse moves, show the UI
   $(document).mousemove(function(e) {
     clearTimeout(edgeBarTO);
     $(".play-button-container").stop(true).fadeTo(500, 1.0);
     $(".edge-bar").animate({
               height: "show"
     });
     edgeBarTO = setTimeout( function() {
       $(".edge-bar").delay(edgeAnimationDelay).animate({
         height: "hide"
       });
       $(".play-button-container").fadeTo(500, 0.0);
     }, edgeAnimationDelay);
   })



  $("#clicktargetcontainer").click(function() {
    if ($("#playbutton").css("display") == "none") {
      //if you dont see the play button, you pause the video and show it
      $("#mainvideo")[0].pause();
      $("#papertrailaudio")[0].pause()
      $("#pausebutton").hide();
      $("#playbutton").show();
    }
    else {
      $("#mainvideo")[0].play();
      $("#papertrailaudio")[0].play()
      $("#playbutton").hide();
      $("#pausebutton").show();
    }
  });
});


function entersite() {
  $("#welcome-overlay").fadeOut(1500);
  var mainvideo = $("#mainvideo");
  mainvideo[0].play();
  $("#papertrailaudio")[0].play()
  // show the controls going away to let user know they are there
  //
  //  not sure if doing this makes sense right now
  //
  // $(".edge-bar").animate({
  //   height: "toggle"
  // });

}

function switchto(name) {
  videourl = urlmap[name];
  var mainvideo = $("#mainvideo");
  mainvideo.fadeOut();
  mainvideo[0].pause()
  // hide play/pause
  // show loading prolly
  mainvideo[0].setAttribute("src", videourl);
  mainvideo[0].load();
  mainvideo[0].onloadeddata = (function () {
    mainvideo.fadeIn();
  });
  mainvideo[0].play();
}
