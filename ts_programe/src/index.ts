let a = 1;
let b: true = true;  // 只能赋值为 true 类型字面量
const bb = false;  // 推导出 false 类型字面量
// b = false;
let c:unknown = 10;

if (typeof c === 'number') {
    c += 10;
    console.log(c);
}