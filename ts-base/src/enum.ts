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

// 登录角色类型
enum UserType {
    Shopmanager = "00", //店长
    ShopAssistant = "01", //店员
    CustomerRole = "02"  //自定义角色
}

let res = {
    userType: "01",
    phoneNo: "17714350934"
}

switch(res.userType){
    case UserType.CustomerRole:
        console.log('自定义角色登录');
        break;
    case UserType.Shopmanager:
        console.log('店长登录');
        break;
    default:
        console.log('店员登录');
        break;
}

// 常量枚举
