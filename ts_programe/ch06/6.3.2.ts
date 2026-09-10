import { Weekday, Day } from './6.2'

// 类型“{ Mon: "Tue"; }”缺少类型“Record<Weekday, Day>”中的以下属性: Tue, Wed, Thu, Fri
// let nextDay: Record<Weekday, Day> = {
//   Mon: 'Tue',
// }


let nextDay: Record<Weekday, Day> = {
  Mon: 'Tue',
  Tue: 'Wed',
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Sat',
}

// TODO. Record还可以约束对象的键为string和number的子类型。

