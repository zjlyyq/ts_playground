interface Human {
    name: string;
    eat(): void;
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string
    eat() {}
    age: number = 0
    sleep() {}
}

interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {} 

enum Master {
    Boy, Girl
}

console.log(`Master.Boy = ${Master.Boy}, Master.Girl = ${ Master.Girl }`);

// 交叉类型
interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

class Dogg implements DogInterface {
    run() {}
    eat() {}
}
class Cat  implements CatInterface {
    jump() {}
    eat() {}
}

// 交叉尅性
let pet1: Dogg & Cat;
pet.jump();

// 联合类型
let pet2: Dogg | Cat = new Dogg();
pet2.eat();

function getPet(master: Master) {

    let pet = master === Master.Boy ? new Dogg() : new Cat();
    // pet.run()
    // pet.jump()
    // pet.eat()
    return pet
}

interface Num {
    count: 0 | 1 | 2
}
// 联合类型
function testNever(num: 0 | 1 | 2): boolean {
    switch(num) {
        case 0:
            return true;
        case 1:
            return false;
        case 2:
            return true;
        default:
            return ((e: never) => {throw new Error(e)})(num);
    }
}

testNever(1)