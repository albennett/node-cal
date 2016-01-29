#!/usr/bin/env node
'use strict';

var zellers = require('./zellers.js');
var monthModule = {};

// console.log(process.argv);

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

monthModule.secondLine = () =>{
    return 'Su Mo Tu We Th Fr Sa';
  }

monthModule.firstLine = (month, year) =>{
    const monthName = `${months[month][0]} ${year}`;
    const spaceCount = (20 - monthName.length) / 2;
    return ' '.repeat(spaceCount) + monthName;
  }

monthModule.numberOfLines = (finalDays) =>{
		const finalCalDays = finalDays.split('');
		for (var i = 20; i < finalCalDays.length; i += 21) {
			finalCalDays[i] = '\n';
		};

		if (finalCalDays.lastIndexOf('\n')=== 62) {
			return finalCalDays.push('\n\n');
		} else if (finalCalDays.lastIndexOf('\n') === 83){
			return finalCalDays.push('\n');
		} else {
			return finalCalDays
		}
}

monthModule.makeCalBody = (m, y) => {
	const month = parseInt(m);
	const year = parseInt(y);
	// grabs the input order for month object and the first in array & year
		// a full line is 20 char, subtract with month name & year, divided by two to center it.
 	let firstDayOfMonth = zellers.getDay(year, month, 1);
	// find number of spaces for third line of starting month
	let spaceCountLineThree = ' '.repeat(firstDayOfMonth * 3);
	// concat the correct day numbers for the given month
	var monthCalDays = [];
	var monthLength;
	if (month === 2) {
		monthLength = monthModule.checkLeapYear(year) ? months[month][1] + 1 : months[month][1];
	} else {
		monthLength = months[month][1];
	}

	for (var i = 1; i <= monthLength; i++) {
		if (i < 10){
			monthCalDays.push(` ${i}`)
		} else {
			monthCalDays.push(i)
		}
	}

	const finalCalDays = `${spaceCountLineThree}${monthCalDays.join(' ')}`;
	let finalBody = `${monthModule.numberOfLines(finalCalDays).join('')}`;
	return `${finalBody}`;
};



module.exports = monthModule;
