var makeHorizontalDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
};

makeHorizontalDancer.prototype = Object.create(Dancer.prototype);
makeHorizontalDancer.prototype.constructor = makeHorizontalDancer;
makeHorizontalDancer.prototype.oldStep = Dancer.prototype.step;
makeHorizontalDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();

    if ( this.left < -10) {
      this.left = $("body").width();
    }

    if ($('.stopStart').html() === 'Start'){
      this.$node.css({ left: this.left -= 10 });
    }

    if ($('.stopStart').html() === 'Stop'){
      this.left = $("body").width() * .95;
      this.$node.css({ left: this.left });
    }
};
