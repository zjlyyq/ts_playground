// 细化

type Unit = 'px' | 'cm' | '%'
let units: Unit[] = ['px', 'cm', '%']

function parseUnit(value: string): Unit | null {
  for (let unit of units) {
    if (value.endsWith(unit)) {
      return unit
    }
  }
  return null
}

type Width = {
  unit: Unit
  value: number
}

function parseWidth(width: number | string | null | undefined): Width | null {
  if (width === null) {
    // 1. TypeScript足够智能,与null做不严格的等值检查，
    // 便能在遇到JavaScript的值null和undefined时返回true。
    return null
  }
  // 2. 未返回时，说明width类型变成了 string | number,
  // 这一步把类型 number | string | null | undefined 【细化】为 number｜string。
  if (typeof width === 'number') {
    return {
      unit: 'px',
      value: width,
    }
  }
  // 3. 未返回时，说明width类型变成了 string
  let unit = parseUnit(width)
  if (unit) {
    return {
      unit,
      value: parseFloat(width),
    }
  }
  return null
}

// 辨别并集类型

type UserTextEvent = {
  type: 'text' // 注销试一下,观察下方第66行的结果的类型推断
  value: string
  target: HTMLInputElement
}

type UserMouseEvent = {
  type: 'mouse' // 注销试一下,观察下方第66行的结果的类型推断
  value: [number, number]
  target: HTMLElement
}

export type UserEvent = UserTextEvent | UserMouseEvent  // export 导出类型 变成模块模式，其他文件不能直接使用，只能通过导入来使用。

function handleUserEvent(event: UserEvent) {
  // 处理事件
  // if (typeof event.value === 'string') { // 注销试一下
  if (event.type === 'text') {
    event.value // string -> 可以顺利细化。
    event.target // HTMLInputElement | HTMLElement -> 不可以顺利细化。-> 因为传入的可能是 UserMouseEvent | UserTextEvent 类型的值。
    return
  } else {
    // 处理鼠标事件
    event.value // [number, number]
    event.target // HTMLInputElement | HTMLElement
    return
  }
}
