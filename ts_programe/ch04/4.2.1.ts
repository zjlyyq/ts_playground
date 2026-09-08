type Filter = {
  <T>(arr: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = (arr, f) => arr.filter(f);

const result11 = filter([1, 2, 3], item => item > 1); // [2, 3]
console.log(result11);


type Filter2<T> = (arr: T[], f: (item: T) => boolean) => T[];

// let filter2: Filter2 = (arr, f) => arr.filter(f); // 泛型类型“Filter2”需要 1 个类型参数。
let filter2: Filter2<string> = (arr, f) => arr.filter(f);
const result2 = filter2(['aaa', 'bb', 'c'], item => item.length > 1); // ['aaa', 'bb']
console.log(result2);
type StringFilter = Filter2<string>;

let stringFilter: StringFilter = (arr, f) => arr.filter(f);
const result3 = stringFilter(['aaa', 'bb', 'c'], item => item.length > 1); // ['aaa', 'bb']
console.log(result3);