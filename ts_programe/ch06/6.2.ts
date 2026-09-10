// 全面性检查
export type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
export type Day = Weekday | 'Sat' | 'Sun'

// 需要 noImplicitReturns 为 true 才会报错
function getNextDay(day: Day): Day {
  switch(day) {
    case 'Mon': return 'Tue'
  }
  return 'Sat';  // 注销试一下
}

let nextDay = {
  Mon: 'Tue',
}

nextDay.Mon // 'Tue'