// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  var context = this;
  setTimeout( function() { context.step(); }, context.timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
