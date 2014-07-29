$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (dancerMakerFunctionName === 'makeJumpDancer') {
      for (var i = 0; i < 4; i++) {
        var dancer = new dancerMakerFunction(
          $(".audience.bottom").height() * Math.random() + $(".topbar").height() + $(".audience.top").height() + $(".audience.middle").height(),
          $(".audience.bottom").width() * Math.random(),
          Math.random() * 1000
        );
        $('body').append(dancer.$node);
      }
    } else if (dancerMakerFunctionName === 'makeBlinkyDancer'){
      var dancer = new dancerMakerFunction(
        $(".audience.middle").height() * Math.random() + $(".topbar").height() + $(".audience.top").height(),
        $(".audience.middle").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      dancer.$node.append('<img class="flash" src="svg/flash.svg" alt="flash">');
    } else if (dancerMakerFunctionName === 'makeHorizontalDancer') {
      var dancer = new dancerMakerFunction(
        $(".racetrack").height() * Math.random() + $(".audience.top").height() + $(".audience.middle").height() + $(".audience.bottom").height() + $(".topbar").height(),
        $(".racetrack").width() * Math.random(),
        Math.random() * 100
      );
      $('body').append(dancer.$node);
      dancer.$node.append('<div class="racehorseContainer"></div>');
    }

  });

  $(".stopStartButton").on("click", function(e){
    if ($('.stopStart').html() === 'Start') { $('.stopStart').html('Stop'); }
    else { $('.stopStart').html('Start'); }
  });
});

