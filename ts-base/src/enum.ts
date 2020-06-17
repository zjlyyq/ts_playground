enum Roles {
    Guster = 1,
    User = 2,
    Administrator
}
let myAge: number = Roles.Guster

enum People {
    Name = "ZJL",
    Address = "HZ"
}
let myName:People.Name = People.Name
console.log(typeof People.Name)
console.log(typeof myName)


// 常量枚举
