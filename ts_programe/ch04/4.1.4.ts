function fancyDate(this: Date) {
  return `${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`; //tsc标志：noImplicitThis 如果是true, this不写注解会报错。 "this" 隐式具有类型 "any"，因为它没有类型注释。
}

// fancyDate(); // 类型为“void”的 "this" 上下文不能分配给类型为“Date”的方法的 "this"。
console.log(fancyDate.call(new Date())); // '12/25/2023'
console.log(fancyDate.apply(new Date())); // '12/25/2023'
