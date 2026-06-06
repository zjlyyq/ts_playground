// Symbol
let a = Symbol('a');
const ca = Symbol('a');  // typeof ca 实际上是unique symbol
const cb: unique symbol = Symbol('a');
let b = Symbol('b');
// console.log(ca === cb); // 此比较似乎是无意的，因为类型“typeof ca”和“typeof cb”没有重叠。
console.log(cb === cb); // true
console.log(a === b); // false