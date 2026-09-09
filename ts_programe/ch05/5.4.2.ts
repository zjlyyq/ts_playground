interface Animal {
  eat(food: string): void;
  sleep(hours: number): void;
  name: string;  // “protected”修饰符不可出现在类型成员上。 “static”修饰符不可出现在类型成员上。
}

interface Feline {
  meows(): void;
}

class Cat implements Animal, Feline {
  name: string;
  constructor(name: string, purrs: boolean) {
    this.name = name;
  }

  eat(food: string): void {
    console.log(`${this.name} is eating ${food}`);
  }

  sleep(hours: number): void {
    console.log(`${this.name} is sleeping for ${hours} hours`);
  }
  
  meows(): void {
    console.log(`${this.name} is meowing`);
  }
}
