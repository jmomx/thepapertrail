/*
 * The Paper Trail
 * John Morrow - 2015
 * Core JS
 *
 */

var coolDown = false;
var edgeAnimationLength = 500; //
var edgeAnimationDelay = 2000;
var coolDownDelay = edgeAnimationDelay + edgeAnimationLength + 50;
var mousex = 0;
var mousey = 0;
var edgeBarTO = null;

$(document).ready( function() {
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



  $("#mainvideo").click(function() {
    if ($("#playbutton").css("display") == "none") {
      //if you dont see the play button, you pause the video and show it
      this.pause();
      $("#papertrailaudio")[0].pause()
      $("#pausebutton").hide();
      $("#playbutton").show();
    }
    else {
      this.play();
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
  $(".edge-bar").animate({
    height: "toggle"
  });
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
