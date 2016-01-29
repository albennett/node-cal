'use strict';

const yearModule = {};
const {makeMonth, createMonth} = require('./lib/months.js');

yearModule.grabAllMonths = (y) => {
  year = parseInt(y);
  const yearString = '';
  const yearArray = [];
  for (var i = 1; i < 13; i++){
   yearString = yearString.concat(makeMonth(i, year));
  }
  yearArray.push(yearString);
  yearArray._zip
};


//var jan =[jan-first, jan-second, jan-body] var feb = [feb-first, feb-second, feb-body]
// [jan-first, feb-first, march-first, apr-first][jan-second, feb-second, march-second, apr-second] [jan-body, feb-body, mar-body, apr-body]
// yearArray._zip([jan, feb])
//put all months in one string};
//[jan-first, feb-first]
//[feb-first, feb-second]
//[feb-body, feb-body]

////take away year
//

