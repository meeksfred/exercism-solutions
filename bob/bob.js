'use strict';

let Bob = function(){

}

Bob.prototype.hey = function(input){
  let inputLength = input.length;

  if ( /^\s*$/.test(input))
		return "Fine. Be that way!";

  if (input.toUpperCase() === input && /[A-Z]/.test(input))
  return 'Whoa, chill out!';

  if(input.includes('?') && input.charAt(inputLength - 1) === '?'){
    return 'Sure.';
  }

  return 'Whatever.'
}

module.exports = Bob;
