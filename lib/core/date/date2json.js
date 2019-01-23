/**
 * 日期转json
 * @param {Date} date 
 */
var date2json = function date2json() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var weekDay = date.getDay();
  var millisecond = date.getMilliseconds();
  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    weekDay: weekDay,
    millisecond: millisecond
  };
};

export default date2json;