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
  describe('Correct number of lines', () => {
     it('should handle aug 2015, a six week month ', () => {
     let goal = execSync('cal 8 2015').toString();
     let actual = execSync('./cal.js 8 2015').toString();
      expect(actual).to.equal(goal);
    });
     it('should handle october 2015, a 5 week month', () => {
      let goal = execSync('cal 10 2015').toString();
      let actual = execSync('./cal.js 10 2015').toString();
      expect(actual).to.equal(goal);
    });
     it('should handle feb 2015, a 4 week month', () => {
      let goal = execSync('cal 2 2015').toString();
      let actual = execSync('./cal.js 2 2015').toString();
      expect(actual).to.equal(goal);
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

    describe('leap year', () => {
      it('checks to see if Feb 2012 is a leap year', () =>{
        expect(checkLeapYear(2012, 2)).to.equal(true);
      });
      it('checks to see if Feb 2014 is a leap year',() => {
        expect(checkLeapYear(2014, 2)).to.equal(false);
      });
    });
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




    //describe('30 day or 31 day' () => {
      //it('checks to see if Nov 2015 has 30 days', (){
        //expect(cal.finalCalDays(2015, 11)).to.equal(30);
    //});
      //it('checks to see if Dec 2015 has 31 days', (){
        //expect(numberOfDays(2015,12)).to.equal(31);
      //});
    //});


