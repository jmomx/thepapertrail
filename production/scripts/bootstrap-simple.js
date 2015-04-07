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

$(document).ready( function() {
  var mainvideo = $("#mainvideo");
  $("body").mousemove(function() {
    $(".play-button-container").stop(true).fadeTo(500, 1.0);
    $(".edge-bar").animate({
              height: "show"
    });
    $(".edge-bar").delay(edgeAnimationDelay).animate({
      height: "hide"
    });
    $(".play-button-container").fadeTo(500, 0.0);
  });



  mainvideo.click(function() {
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
  var video = $("#mainvideo");
  video[0].play();
  $("#papertrailaudio")[0].play()
  // show the controls going away to let user know they are there
  $(".edge-bar").animate({
    height: "toggle"
  });
}
