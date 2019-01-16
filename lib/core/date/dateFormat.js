import "core-js/modules/es6.regexp.replace";

/**
 * 日期格式化
 * @param {string} formatter 
 * @param {Date} date 
 */
var dateFormat = function dateFormat() {
  var formatter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM-DD';
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var weekArray = ['日', '一', '二', '三', '四', '五', '六'];
  var weekText = '周';

  var _dateJson = dateJson(date),
      year = _dateJson.year,
      month = _dateJson.month,
      day = _dateJson.day,
      hour = _dateJson.hour,
      minute = _dateJson.minute,
      second = _dateJson.second,
      weekDay = _dateJson.weekDay,
      millisecond = _dateJson.millisecond;

  formatter = formatter.replace('YYYY', year).replace('MM', String(month)[1] ? month : `0${month}`).replace('DD', String(day)[1] ? day : `0${day}`).replace('hh', String(hour)[1] ? hour : `0${hour}`).replace('mm', String(minute)[1] ? minute : `0${minute}`).replace('ss', String(second)[1] ? second : `0${second}`).replace('SSS', millisecond).replace('ww', weekDay).replace('WW', weekText + weekArray[weekDay]);
  return formatter;
};

export default dateFormat;