/*
 * The Paper Trail
 * John Morrow - 2015
 * Core JS
 *
 */

var edgeAnimationLength = 500; //
var edgeAnimationDelay = 2000;
var edgeBarTO = null;
var interactionMode = false;

$(document).ready( function() {

    // pick a video to use
    var keys = Object.keys(urlmap);
    var videonum = Math.floor(Math.random() * keys.length);

    switchto(keys[videonum]);

   $("#enter-btn").on("click", function(e) {
     entersite();
   });
   // when the mouse moves, show the UI
   //$(document).mousemove(function(e) {
   // showUI();
   //})

  $("#clicktargetcontainer").on("click", function() {
    if (interactionMode) {
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
    }
    else {
     showUI();

    }
  });
});


function entersite() {
  console.log("Click registered");
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
  mainvideo.fadeOut(function() {
    $("#location-header").text(namemap[name]);
    // hide play/pause
    // show loading prolly
    mainvideo[0].setAttribute("src", videourl);

  });
  mainvideo[0].onloadeddata = (function () {
    var time = Math.random() * mainvideo[0].duration;
    mainvideo[0].currentTime = time;
    mainvideo[0].oncanplay = function() {
      //if video is not paused (pause button showing)
      mainvideo[0].play();
      mainvideo.delay(500).fadeIn();
    };
  });
}


function hideUI() {
       $(".edge-bar").stop(true).animate({
         height: "hide"
       });
       $(".play-button-container").fadeTo(500, 0.0);
       interactionMode = false;
}


function showUI() {
     clearTimeout(edgeBarTO);
     $(".play-button-container").stop(true).fadeTo(500, 1.0);
     $(".edge-bar").animate({
               height: "show"
     });
     edgeBarTO = setTimeout(hideUI, edgeAnimationDelay);
     interactionMode = true;
}
