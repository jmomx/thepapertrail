/*
 * The Paper Trail
 * John Morrow - 2015
 * Core JS
 *
 */


$(document).ready( function() {
  var mainvideo = $("#mainvideo");
  mainvideo.hover(function() {
    $(".play-button-container").fadeTo(500, 1.0)
    $(".edge-bar").stop(true).animate({
              height: "show"
    })}, function() {
    $(".play-button-container").fadeTo(1500, 0.0);
    $(".edge-bar").delay(5000).animate({
      height: "hide"
    });
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
