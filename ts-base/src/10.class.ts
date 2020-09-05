abstract class Animal {
    sleep:() => void
}

class Dog{
    constructor(name: string){
        this.name = name
    }
    name: string
    run() {}
    sleep() {
        console.log('dog sleep')
    }
    private pri() {}
    protected pro() {
        console.log('受保护属性，只能在类“Dog”及其子类中访问')
    }
    static food: string = 'bonus'
}

let dog = new Dog('xiao hei')
console.log(dog.name)
// dog.pri()  // 属性“pri”为私有属性，只能在类“Dog”中访问。
// dog.pro()    // 属性“pro”受保护，只能在类“Dog”及其子类中访问。

// 类的继承
class Husky extends Dog{
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        // this.pri()
        this.pro()
    }

    sleep() {
        console.log('cat Sleep')
    }
    // color: string
}   

let husky = new Husky('husky', 'white')
console.log(Husky.food)

let animals = [dog, husky]

animals.forEach(a => {
    a.sleep()
})

class WorkFlow {
    step1() {
        return this;
    }

    step2() {
        return this;
    }
}

new WorkFlow().step1().step2()

