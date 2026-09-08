function addTwoNum(a: number, b: number): number {
  return a + b;
}

// call
addTwoNum.call(null, 1, 2); // 3
// apply
addTwoNum.apply(null, [2, 3]); // 6
// bind
const addOne = addTwoNum.bind(null);
console.log(addOne(2, '3')); // 6 通过强制tsc标志：strictBindCallApply 为 false 放行了
