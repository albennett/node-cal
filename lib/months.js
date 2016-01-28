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

const makeMonth = (m, y) => {
	const month = parseInt(m);
	const year = parseInt(y);
	// grabs the input order for month object and the first in array & year
	const monthName = `${months[month][0]} ${year}`;
	// a full line is 20 char, subtract with month name & year, divided by two to center it.
	const spaceCount = (20 - monthName.length) / 2;

	const firstLine = ' '.repeat(spaceCount) + monthName;
	const secondLine = 'Su Mo Tu We Th Fr Sa';
	let firstDayOfMonth = zellers.getDay(year, month, 1);
	// find number of spaces for third line of starting month
	let spaceCountLineThree = ' '.repeat(firstDayOfMonth * 3);

	// concat the correct day numbers for the given month
	var monthCalDays = [];
	var monthLength;
	if (month === 2) {
	// 	if (monthModule.checkLeapYear(year) === true){
	// 		monthLength = months[month][1] + 1;
	// 	} else {
	// 		monthLength = months[month][1];
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

	let finalCalDays = `${spaceCountLineThree}${monthCalDays.join(' ')}`;
	finalCalDays = finalCalDays.split('');
	for (var i = 20; i < finalCalDays.length; i += 21) {
		finalCalDays[i] = '\n';
	};
	finalCalDays.push('\n');

	let cal = `${firstLine}\n${secondLine}\n${finalCalDays.join('')}`;
	return cal;
};


monthModule.createMonth = (month, year) => {
	 if (month < 1) {
	 	return console.log('Must pick an actual month number')
	 } else if (year < 1753 || year > 9999){
	 	return console.log('Can only pick years between 1753 and 9999. Is that so hard?')
	 } else {
	 	 return makeMonth(month, year);
	 }
};

module.exports = monthModule;
