setInterval( function(){
  var horseTops = [];
  var horseLefts = [];
  var allHorses = document.getElementsByClassName('racehorseContainer');
  for (i=0; i<allHorses.length; i++){
    horseLefts.push( Number(allHorses[i].parentNode.style.left.replace(/px/,"")) );
    horseTops.push( Number(allHorses[i].parentNode.style.top.replace(/px/,"")) );
  }

  var x = [];
  for (i = 0; i < allHorses.length; i++) {
    for (j = 0; j < allHorses.length; j++) {
      distance = Math.sqrt( Math.pow( (horseLefts[i]-horseLefts[j]) ,2) + Math.pow( (horseTops[i]-horseTops[j]) ,2) );
      x.push(distance);
      // if not looking at same horse, distance is greater than x distance, and horse is below the top of the container
      if (i !== j && horseTops[i] < horseTops[j] && distance<80 && horseTops[i]>$('.racetrack').position().top  ) {
        console.log("Conditions!!! - " + allHorses[i]);

        var newHeight =  allHorses[i].parentNode.style.top.replace(horseTops[i],horseTops[i]-25);
        allHorses[i].parentNode.style.top = newHeight;

        var newHeight =  allHorses[j].parentNode.style.top.replace(horseTops[j],horseTops[j]+25);
        allHorses[j].parentNode.style.top = newHeight;

        console.log(allHorses[i].parentNode, newHeight);

      }
    }
  }

  $('.racehorseContainer').mouseover(function(){
    console.log('yes');
  });
}, 100);
