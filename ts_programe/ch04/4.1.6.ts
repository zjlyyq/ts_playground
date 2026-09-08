// 可迭代对象
let number = {
  *[Symbol.iterator](): IterableIterator<number> {
    for (let i = 0; i < 10; i++) {
      yield i;
    }
  },
};

// 迭代器
let iterator = number[Symbol.iterator]();

// 消费迭代器中的值
console.log(iterator.next());
// 继续消费迭代器中的值
for (let value of iterator) {
  console.log(value);
}
