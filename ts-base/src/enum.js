"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["Guster"] = 1] = "Guster";
    Roles[Roles["User"] = 2] = "User";
    Roles[Roles["Administrator"] = 3] = "Administrator";
})(Roles || (Roles = {}));
var myAge = Roles.Guster;
var People;
(function (People) {
    People["Name"] = "ZJL";
    People["Address"] = "HZ";
})(People || (People = {}));
var myName = People.Name;
console.log(typeof People.Name);
console.log(typeof myName);
// 常量枚举
