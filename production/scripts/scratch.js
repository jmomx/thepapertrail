/***
 * Try one with state approach
 */

mainvideo.mouseenter(function() {
  // When there's a mouse over, you :
  // 1. Show the menu
  // 2. Ignore mouse input
  // 3. Hide the menu after edgeAnimationDelay seconds
  // 4. React to mouse input again
  // TODO: Write code that doesn't need explainations
  if (!coolDown) {
    //coolDown avoids animations adding mouse events to the queue
    $(".play-button-container").fadeTo(500, 1.0)
    $(".edge-bar").animate({
              height: "show"
    }).queue(function() {
      coolDown = true;
    }).delay(edgeAnimationDelay).animate({
      height: "hide"
    }).queue(function() {
      coolDown = false;
    });
    $(".play-button-container").fadeTo(500, 0.0);
  }
});

// $("*").mouseenter(function() {
//   console.log("Mouseenter (id,type):  (" + this.id + ", " + this.tagName +")" )
// })


/***
 * Try two with state approach
 */

 mainvideo.mouseenter(function() {
   // When there's a mouse over, you :
   // 1. Show the menu
   // 2. Ignore mouse input
   // 3. Hide the menu after edgeAnimationDelay seconds
   // 4. React to mouse input again
   // TODO: Write code that doesn't need explainations
   if (!coolDown) {
     //coolDown avoids animations adding mouse events to the queue
     $(".play-button-container").fadeTo(500, 1.0);
     $(".edge-bar").animate({
               height: "show"
     })
     coolDown = true;
     $(".edgebar").delay(edgeAnimationDelay).animate({
       height: "hide"
     }).queue(function() {
       coolDown = false;
     });
     $(".play-button-container").fadeTo(500, 0.0);
   }
 });


 /***
  * Trying adding a second handler to .edge-bar to stop the extraneous animations
  *
  */

 mainvideo.hover( function() {
   $(".play-button-container").stop().fadeTo(500, 1.0);
   $(".edge-bar").animate({
             height: "show"
   })
 }, function() {
   $(".edge-bar").stop().animate({
     height: "hide"
   });
   $(".play-button-container").fadeTo(500, 0.0);
 });
 $(".edge-bar").hover( function() {
   $(".play-button-container").stop(true).fadeTo(500, 1.0);
   $(".edge-bar").animate({
             height: "show"
   })
 }, function() {
   $(".edgebar").stop().animate({
     height: "hide"
   });
   $(".play-button-container").fadeTo(500, 0.0);
 });

 $(document).ready( function() {
    var mainvideo = $("#mainvideo");
    // when the mouse moves, show the UI
    $(document).mousemove(function(e) {
      $(".play-button-container").stop(true).fadeTo(500, 1.0);
      $(".edge-bar").animate({
                height: "show"
      });

    })

    /***
     * trying using setInterval
     *
     */

    // if there ever is a period of inactivity, hide it
   //  setInterval( function(e) {
   //    dist = Math.sqrt(Math.pow(e.pageX-mousex, 2) + Math.pow(e.pageY-mousey, 2));
   //    if (dist < 5.0) {
   //      $(".edge-bar").delay(edgeAnimationDelay).animate({
   //        height: "hide"
   //      });
   //      $(".play-button-container").fadeTo(500, 0.0);
   //    }
   //    mousex = e.pageX;
   //    mousey = e.pageY;
   //  }, 1200);
