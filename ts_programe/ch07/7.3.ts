// 自定义错误类型
export class InvalidDateFormatError extends RangeError {}
export class DateIsInTheFutureError extends RangeError {}

export function parse2(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError{
  // if (birthday === null) return null
  let date = new Date(birthday)
  if (!isValid(date)) {
    return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
  }
  if (date.getTime() > Date.now()) {
    return new DateIsInTheFutureError('Are you a timelord?')
  }
  return date
}

{
  let result = parse2('2023/1/12')
  if (result instanceof InvalidDateFormatError) {
    console.error(result.message)
  } else if (result instanceof DateIsInTheFutureError) {
    console.info(result.message)
  } else {
    console.info('Date is', result.toISOString())
  }
}
