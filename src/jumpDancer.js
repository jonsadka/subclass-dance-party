var makeJumpDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.bottom = top-10;
  this.position = false;
};

makeJumpDancer.prototype = Object.create(Dancer.prototype);
makeJumpDancer.prototype.constructor = makeJumpDancer;
makeJumpDancer.prototype.oldStep = Dancer.prototype.step;
makeJumpDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();

    this.position ? this.$node.css({ top:this.top }) : this.$node.css({ top:this.bottom });
    this.position = !this.position;
};
