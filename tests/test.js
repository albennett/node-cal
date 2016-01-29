'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');
const { createMonth } = require('../lib/months.js');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      // const month = require('../lib/months.js');
     let goal = execSync('cal').toString();
     let actual = execSync('./cal.js').toString();
      expect(actual).to.equal(goal);
    });
     it('should handle jan 1999', () => {
     let goal = execSync('cal 1 1999').toString();
     let actual = execSync('./cal.js 1 1999').toString();
      expect(actual).to.equal(goal);
    });
     it('should handle april 1800', () => {
     let goal = execSync('cal 4 1800').toString();
     let actual = execSync('./cal.js 4 1800').toString();
      expect(actual).to.equal(goal);
    });
     //it('should handle all the months in a year', () => {
       //let goal = execSync('cal 2012').toString();
      //expect(year.grabYear(2012)).to.equal(goal);
     //});

  });

  describe("Zeller's congruence", () => {
    var zellers = require('../lib/zellers.js');
     //const zellers = require('../lib/zellers.js');

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
      it('return 2 for February', () =>{
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });
       it('return 3 for March', () =>{
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });
    });

    describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      it('returns 2015 for Feb 2016', () => {
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });
      it('returns 2017 for Mar 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });

    describe('.getDay', () => {
      it('returns 5 (Friday) for Jan 1, 2016', () => {
        expect(zellers.getDay(2016, 1, 1)).to.equal(5);
      });
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
      it('returns 3 (Wed) for March 1, 2000', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });
      it('returns 1 (Mon) for March 1, 2100', () => {
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      });
      it('returns 0 (Sunday) for March 2, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });
      it('returns 4 (Thurs) for March 1, 2300', () => {
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
    });
  });
});

  describe('months.js', () => {
    const {makeMonth, checkLeapYear, firstLine, secondLine, numberOfLines} = require('../lib/months.js');

    it('should create top line for month and year', () => {
      expect(firstLine(1, 2016)).to.equal("    January 2016");
      });
    it('should create second line', () => {
      expect(secondLine()).to.equal('Su Mo Tu We Th Fr Sa');
      });

    it("should print the days relative to 20 spaces", ()=>{
      expect(makeMonth(3, 2016)).to.equal("       1  2  3  4  5 \n 6  7  8  9 10 11 12 \n13 14 15 16 17 18 19 \n20 21 22 23 24 25 26 \n27 28 29 30");
    });

     //it('should print a full calendar', () => {
       //expect(makeMonth(3, 2016)).to.equal("    March 2016\nSu Mo Tu We Th Fr Sa\n       1  2  3  4  5 \n 6  7  8  9 10 11 12 \n13 14 15 16 17 18 19 \n20 21 22 23 24 25 26 \n27 28 29 30");
     //});

    describe('leap year', () => {
      it('checks to see if Feb 2012 is a leap year', () =>{
        expect(checkLeapYear(2012, 2)).to.equal(true);
      });
      it('checks to see if Feb 2014 is a leap year',() => {
        expect(checkLeapYear(2014, 2)).to.equal(false);
      });
    });

    //describe('30 day or 31 day' () => {
      //it('checks to see if Nov 2015 has 30 days', (){
        //expect(cal.finalCalDays(2015, 11)).to.equal(30);
    //});
      //it('checks to see if Dec 2015 has 31 days', (){
        //expect(numberOfDays(2015,12)).to.equal(31);
      //});
    //});

    //describe('number of weeks in month'() => {
      //it('checks number of weeks in Feb 2015', (){
        //expect(numberOfWeeks(2015, 2)).to.equal(4);
      //});
     //it('checks number of weeks in Oct 2015', (){
        //expect(numberOfWeeks(2015, 10)).to.equal(5);
      //});
     //it('checks number of weeks in August 2015', (){
        //expect(numberOfWeeks(2015, 8)).to.equal(6);
      //});

    });

