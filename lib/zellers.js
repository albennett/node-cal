module.exports = {
 
  modifiedMonth : modify,
  modifiedYear : modify_year,
  getDay : get_day
};

 function modify (month) {

    if (month < 3) {
      return month + 12;
    } else {
      return month;    //return theMonth = ['march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'].indexOf(month.toLowerCase()) + 3;
    }
  }

  function modify_year(year, month) {
    if (month < 3) {
      return year - 1;
    }  else { 
      return year;
    }
  }

  function get_day(year, month, day){
    var m = modify(month);
    var y = modify_year(year, month);
    return (day + parseInt(((m + 1) * 26) / 10) + y + parseInt(y / 4) + 6 * parseInt(y / 100) + parseInt(y / 400) - 1) % 7;
  }
