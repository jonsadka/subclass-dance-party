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

    if (dancerMakerFunctionName === 'fanDancer') {
      for (var i = 0; i < 4; i++) {
        var dancer = new dancerMakerFunction(
          $(".audience.bottom").height() * Math.random() + 320,
          $(".audience.bottom").width() * Math.random(),
          Math.random() * 1000
        );
        $('body').append(dancer.$node);

        if (i <= 1) {
          dancer.$node.append('<div class="spectator1"></div>');
        } else {
          dancer.$node.append('<div class="spectator2"></div>');
        }
      }
    } else if (dancerMakerFunctionName === 'flashDancer'){
      var dancer = new dancerMakerFunction(
        $(".audience.middle").height() * Math.random() + 200,
        $(".audience.middle").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
      dancer.$node.append('<img class="flash" src="svg/flash.svg" alt="flash">');
    } else if (dancerMakerFunctionName === 'horseDancer') {
      var dancer = new dancerMakerFunction(
        $(".racetrack").height() * Math.random() + 400,
        $(".racetrack").width() * Math.random(),
        Math.random() * 100
      );
      $('body').append(dancer.$node);
      dancer.$node.append('<div class="racehorseContainer horse1"></div>');
    }
  });

  $(".stopStartButton").on("click", function(e){
    if ($('.stopStart').html() === 'Start') { $('.stopStart').html('Stop'); }
    else { $('.stopStart').html('Start'); }
  });
});

