class MySet {
  constructor(private set: number[] = []) {}

  has(value: number): boolean {
    return this.set.includes(value);
  }

  add(value: number): this {
    this.set.push(value);
    return this;
  }
}


let set = new MySet();

set.add(1).add(2).add(3);

console.log(set.has(1));
console.log(set.has(2));
console.log(set.has(4));

