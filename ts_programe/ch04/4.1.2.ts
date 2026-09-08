// 剩余参数
function sumVariadic(): number {
  return Array.from(arguments).reduce((acc, cur) => acc + cur, 0); // 无法推断出acc 和 cur 的类型
}

console.log(sumVariadic(1, 2, 3)); // 应有 0 个参数，但获得 3 个。

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumVariadicSafe(1, 2, 3, 4, 5)); // 15
