#!/usr/bin/env node
'use strict';

var zellers = require('./zellers.js');
var monthModule = {};

monthModule.checkLeapYear = (year) => {
	if (year % 4 !== 0) {
		// not a leap year
		return false;
	} else if (year % 100 !== 0) {
		// is a leap year
		return true;
	} else if (year % 400 !== 0) {
		// not a leap year
		return false;
	} else {
		// is a leap year
		return true;
	}
};

//month object
monthModule.calBody = (m, y) => {
  const months = {
    1: ['January', 31],
    2: ['February', 28],
    3: ['March', 31],
    4: ['April', 30],
    5: ['May', 31],
    6: ['June', 30],
    7: ['July', 31],
    8: ['August', 31],
    9: ['September', 30],
    10: ['October', 31],
    11: ['November', 30],
    12: ['December', 31]
  };

  monthModule.firstLine = (month, year) =>{
    const monthName = `${months[month][0]} ${year}`;
    const spaceCount = (20 - monthName.length) / 2;
    return ' '.repeat(spaceCount) + monthName;
  }

  monthModule.secondLine = () =>{
    return 'Su Mo Tu We Th Fr Sa';
  }

  const month = parseInt(m);
  const year = parseInt(y);
  var count = 0;
  let firstDayOfMonth = zellers.getDay(year, month, 1);
  // find number of spaces for third line of starting month
  let spaceCountLineThree = ' '.repeat(firstDayOfMonth * 3);
  // add the correct day numbers for the given month
  var monthCalDays = [];
  var monthLength;
  if (month === 2) {
    //if leap year, add a day
    monthLength = monthModule.checkLeapYear(year) ? months[month][1] + 1 : months[month][1];
  } else {
    monthLength = months[month][1];
  }

  for (var i = 1; i <= monthLength; i++) {
    if (i < 10){
      //add a space in front of all single digit numbers
      monthCalDays.push(` ${i}`)
    } else {
      monthCalDays.push(i)
    }
  }
//joins all the days together
  let finalCalDays = `${spaceCountLineThree}${monthCalDays.join(' ')}`;
  finalCalDays = finalCalDays.split('');
  //every 20 chars, add a line break
  for (const i = 20; i < finalCalDays.length; i += 21) {
    finalCalDays[i] = '\n';
  }
  //loops through days to check how many line breaks.
  for (i = 0; i < finalCalDays.length; i++){
    if(finalCalDays[i] === '\n'){
      count++
    }
  }
  //if month doesn't have six lines, it pushes more depending on amount
  if (count === 4){
    finalCalDays.push('\n');
  } else if (count === 3){
    finalCalDays.push('\n\n');
  }

  let finalBody = `${finalCalDays.join('')}`;
  return `${finalBody}`;
 };

monthModule.fullMonth = (m, y) =>{
  const month = parseInt(m);
  const year = parseInt(y);
  return `${monthModule.firstLine(month, year)}\n${monthModule.secondLine(month, year)}\n${monthModule.calBody(month, year)}`
}


module.exports = monthModule;
