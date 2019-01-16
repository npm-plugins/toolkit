/**
 * 日期转json
 * @param {Date} date 
 */
const date2json = (date = new Date()) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const weekDay = date.getDay()
  const millisecond = date.getMilliseconds()
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    weekDay,
    millisecond
  }
}

export default date2json