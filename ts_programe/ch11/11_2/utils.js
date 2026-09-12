/**
 * 将字符串转换为PascalCase
 * @description 该函数将字符串中的每个单词转换为PascalCase格式，即每个单词的首字母大写，其他字母小写。
 * @example 'hello-world' => 'HelloWorld'
 * @param {string} str 待转换的字符串
 * @returns 转换后的字符串
 */
export function toPascalCase(str) {
  return str.replace(
    /\w+/g,
    ([a, ...b]) => a.toUpperCase() + b.join('').toLowerCase()
  )
}

// console.log(toPascalCase('hello-world'))