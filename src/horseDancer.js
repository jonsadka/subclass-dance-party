var horseDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left + 800;
  this.animationCounter = 0;
};

horseDancer.prototype = Object.create(Dancer.prototype);
horseDancer.prototype.constructor = horseDancer;
horseDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

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

  this.animationCounter++;
  if (this.animationCounter < 100) {
    $('.horse1').addClass('horse2').removeClass('horse1');
  } else if (this.animationCounter >= 100) {
    $('.horse2').addClass('horse1').removeClass('horse2');
  }

  if (this.animationCounter > 200) {
    this.animationCounter = 0;
  }
};
