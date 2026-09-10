function isString(a: unknown): boolean {
  return typeof a === 'string'
}

function parseIntput(input: string | number) {
  let formattedInput: string
  if (isString(input)) {
    // 类型细化能力有限，只能细化当前作用域中变量的类型 这里input的类型还是 string ｜ number。
    formattedInput = input.toUpperCase()  // 类型“string | number”上不存在属性“toUpperCase”。类型“number”上不存在属性“toUpperCase”。
  }
}
