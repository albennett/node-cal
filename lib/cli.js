'use strict';
const {checkLeapYear, calBody, firstLine, secondLine, fullMonth} = require('./months.js');
const [,, ...args] = process.argv;

const dateObj = new Date();
const currentMonth = dateObj.getUTCMonth() + 1;
const currentYear = dateObj.getUTCFullYear();

if (args.length === 2) {
  const [month, year] = args;
  if (month < 1 || year < 1753 || year > 9999){
     console.log('Must be an actual month number, and only between 1753 and 9999. Try again!')
  }
  else {
    console.log(`${fullMonth(month, year)}`);
  }
} else if (args.length === 1) {
  console.log('im working on it,okk');
} else if(args.length === 0) {
  console.log(`${firstLine(currentMonth, currentYear)}\n${secondLine(currentMonth, currentYear)}\n${calBody(currentMonth, currentYear)}`);
} else {
  console.log('dun broke it');
  process.exit(64);
}


