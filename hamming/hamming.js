'use strict';

let Hamming = function(){

}

Hamming.prototype.compute = function(strand1, strand2){
  let splitOne = strand1.split('');
  let splitTwo = strand2.split('');
  let diffCounter = 0;

  if(splitOne.length !== splitTwo.length) throw new Error('DNA strands must be of equal length.');

  for(let i=0; i<splitOne.length; i++){
    if(splitOne[i] !== splitTwo[i]){
      diffCounter++;
    }
  }

  return diffCounter;
}

module.exports = Hamming;
