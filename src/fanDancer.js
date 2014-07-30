var fanDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.bottom = top-10;
  this.position = false;
};

fanDancer.prototype = Object.create(Dancer.prototype);
fanDancer.prototype.constructor = fanDancer;
fanDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.position ? this.$node.css({ top:this.top }) : this.$node.css({ top:this.bottom });
  this.position = !this.position;
};
