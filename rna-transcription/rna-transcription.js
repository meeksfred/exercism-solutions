'use strict';

let DnaTranscriber = function(){

}

DnaTranscriber.prototype.toRna = function(strand){

  let splitStrand = strand.split('');

  for(var i=0; i<splitStrand.length; i++){
    if(splitStrand[i] === 'X') throw new Error('Invalid input');

    if(splitStrand[i] === 'G'){
      splitStrand[i] = 'C';
      continue;
    }

    if(splitStrand[i] === 'C'){
      splitStrand[i] = 'G';
      continue;
    }

    if(splitStrand[i] === 'T'){
      splitStrand[i] = 'A';
      continue;
    }

    if(splitStrand[i] === 'A'){
      splitStrand[i] = 'U';
      continue;
    }
  }

  return splitStrand.join('');
}

module.exports = DnaTranscriber;
