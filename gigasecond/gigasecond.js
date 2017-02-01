'use strict';

let GIGAMS = Math.pow(10, 12);
// let GIGASC = Math.pow(10, 9);

let Gigasecond = function(day){
  this.day = day;
};

Gigasecond.prototype.date = function() {

  return new Date(this.day.getTime() + GIGAMS);
};

module.exports = Gigasecond;
