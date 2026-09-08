/**
function fancyDate(this: Date) {
  return `${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`; //tsc标志：noImplicitThis 如果是true, this不写注解会报错。 "this" 隐式具有类型 "any"，因为它没有类型注释。
}
*/

// 调用签名
type FancyDate = (this: Date) => string;

// 使用了调用签名以后，可以不用写类型注解，ts会自动推导出this的类型为Date返回类型为string
let fd: FancyDate = function () {
  return `${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`;
};

type Log = (message: string, userId?: string) => void;

let myLog: Log = function (message, userId = 'default user') {
  console.log(message, userId);
};
