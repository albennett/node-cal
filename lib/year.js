'use strict';

const yearModule = {};
const {calBody} = require('./months.js');
//const requiremonths = require('./months');
const _ = require('lodash');

// yearModule.grabAllMonths = (y) => {
//   year = parseInt(y);
//   const yearString = '';
//   const yearArray = [];
//   for (var i = 1; i < 13; i++){
//     yearString = yearString.concat(fullMonth(i, year));
//     yearArray.push(yearString);
//   }
//   yearArray._chunk(yearArray, 3);
//   yearArray._zip
// };


yearModule.grabAllMonths = (year) =>{
  var output = '';
  const buildRows = (month) =>{
    let row = [];
    let month1 = calBody(year, month).split("\n").splice(1);
    let month2 = calBody(year, month + 1).split("\n").splice(1);
    let month3 = calBody(year, month + 2).split("\n").splice(1);
    row = _.zip(month1, month2, month3);
    row = _.map(row, grab => grab.join(""));
    row = row.join("\n") + "\n";
    row += "\n";
    return row;
  }
  // const firstLine = (month) =>{
  //   const theMonthTitle = `${requiremonths.months[month][0]}`
  //   const theMonthTitleSpaces = (20 - theMonthTitle.length) / 2;
  //   const firstline = " ".repeat(theMonthTitleSpaces) + theMonthTitle;
  //   return `${firstline}`;
  // }

  // const alignMonths = (line) => {

  //   while (line.length < 22) {
  //     line += " ";
  //     if (line.length < 22) {
  //     line = " " + line;
  //     }
  //   }

  //   return line;
  // }

  // const centerMonths = (month1, month2, month3) => {
  //   let string = alignMonths(month1) + centerLine(month2) + centerLine(month3) + " \n";
  //   string = string.split("");
  //   string[0] = "";
  //   return string.join("");
  // };

  var topYearLine =  `                            ${year}\n`;
  output =  topYearLine +
            // centerMonths('January', 'February', 'March') +
            buildRows(1) +
            // centerMonths('April', 'May', 'June') +
            buildRows(4) +
            // centerMonths('July', 'August', 'September') +
            buildRows(7) +
            // centerMonths('October', 'November', 'December') +
            buildRows(10);

  output = output.split("\n");
  while (output.length > 36) {
    output.pop();
  }
return output.join("\n");
}

module.exports = yearModule;

//var jan =[jan-first, jan-second, jan-body, feb-first, feb-second, feb-body] var feb = [feb-first, feb-second, feb-body]
// [jan-first, feb-first, march-first, apr-first][jan-second, feb-second, march-second, apr-second] [jan-body, feb-body, mar-body, apr-body]
// yearArray._zip([jan, feb])
//put all months in one string};
//[jan-first, feb-first]
//[feb-first, feb-second]
//[feb-body, feb-body]

////take away year
//

