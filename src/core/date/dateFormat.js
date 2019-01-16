/**
 * 日期格式化
 * @param {string} formatter 
 * @param {Date} date 
 */
const dateFormat = (formatter = 'YYYY-MM-DD',  date = new Date()) => {
  const weekArray = ['日', '一', '二', '三', '四', '五', '六']
  const weekText = '周'
  const {
    year,
    month,
    day,
    hour,
    minute,
    second,
    weekDay,
    millisecond
  } = dateJson(date)
  formatter = formatter
    .replace('YYYY', year)
    .replace('MM', String(month)[1] ? month : `0${month}`)
    .replace('DD', String(day)[1] ? day : `0${day}`)
    .replace('hh', String(hour)[1] ? hour : `0${hour}`)
    .replace('mm', String(minute)[1] ? minute : `0${minute}`)
    .replace('ss', String(second)[1] ? second : `0${second}`)
    .replace('SSS', millisecond)
    .replace('ww', weekDay)
    .replace('WW', weekText + weekArray[weekDay])
  return formatter
}

export default dateFormat