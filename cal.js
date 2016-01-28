#!/usr/bin/env node --harmony_destructuring
'use strict';
const seeMonth = require('./lib/months.js').createMonth;
const [,, ...args] = process.argv;
console.log(args);

if (args.length === 2) {
  //const [month, year] = args;
  console.log(seeMonth(args[0], args[1]));
} else if (args.length === 1) {
  console.log('im working on it,okk');
  //const [year] = args;
  //console.log(`generateYear(${year})`)
} else {
  console.log('dun broke it');
  process.exit(64);
}

//if (year < 1753) {
  //console.log('app does not work prior to 1753');
//} else {
  //console.log('cal');
//}

//const generateMonth = require('./lib/month);

//console.log(generateMonth(2016,1));
//
//var monthView = require('./lib/month.js').generateMonthView;


