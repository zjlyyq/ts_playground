function ask() {
  return prompt('When is your birthday?')
}
// 自定义错误类型
export class InvalidDateFormatError extends RangeError {}
export class DateIsInTheFutureError extends RangeError {}

/**
 * 将字符串格式化为日期对象。
 * @param birthday 用户输入的生日字符串
 * @returns 格式化后的日期对象
 * @throws {InvalidDateFormatError} 如果日期格式无效
 * @throws {DateIsInTheFutureError} 如果日期在将来
 */
export function parse2(birthday: string): Date {
  // if (birthday === null) return null
  let date = new Date(birthday)
  if (!isValid(date)) {
    throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('Are you a timelord?')
  }
  return date
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  )
}

try {
  // let date1 = parse2(ask() as string)
  const input = '2022/09/01'
  let date = parse2(input)
  console.info('Date is', date.toISOString())
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message)
  } else if (e instanceof DateIsInTheFutureError) {
    console.info(e.message)
  } else {
    throw e
  }
}
