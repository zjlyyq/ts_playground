let promise = new Promise<number>(resolve => resolve(100));

promise.then(res => res + 1); // 如果 Promise<number> 不写类型，会报错。“res”的类型为“number”。
