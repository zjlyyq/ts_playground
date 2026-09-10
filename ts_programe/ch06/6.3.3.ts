import { Weekday, Day } from './6.2'

// 映射类型比Record更类型安全。
let nextDay: {[K in Weekday]: Day} = {
  Mon: 'Tue',
  Tue: 'Wed',  // 注销测试。类型 "{ Mon: "Tue"; Wed: "Thu"; Thu: "Fri"; Fri: "Sat"; }" 中缺少属性 "Tue"，但类型 "{ Mon: Day; Tue: Day; Wed: Day; Thu: Day; Fri: Day; }" 中需要该属性。
  Wed: 'Thu',
  Thu: 'Fri',
  Fri: 'Sat',
}