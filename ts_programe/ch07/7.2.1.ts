import { parse2, InvalidDateFormatError, DateIsInTheFutureError } from './7.2'

const input = '2033/09/02'

try {
  const date = parse2(input)
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message)
  } else if (e instanceof DateIsInTheFutureError) {
    console.info(e.message)
  } else {
    throw e
  }
}
