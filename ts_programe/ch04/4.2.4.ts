type MyEvent<T> = {
  target: T;
  type: string;
};
let myEvent: MyEvent<HTMLButtonElement | null> = {
  target: document.body.querySelector("#myButton")!,
   type: "click",
}

// 使用以MyEvent构建其他类型。
type TimedEvent<T> = {
  event: MyEvent<T>
  from: Date
  to: Date
}

// 泛型别名也可以在函数的签名中使用
function triggerEvent<T>(event: MyEvent<T>): void {
  // ...
}

triggerEvent({
  target: document.body.querySelector("#myButton"),
  type: "click",
})