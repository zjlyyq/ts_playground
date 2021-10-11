{
    var x = {
        a: 1,
        b: 3
    };
}
/**
 * 函数和命名空间的合并
 * 命名空间导出的属性相当于函数的属性
 */
function Lib(str) {
    console.log(str);
}
(function (Lib) {
    Lib.version = '1.0';
})(Lib || (Lib = {}));
Lib('wdnmd');
console.log(Lib.version);
/**
 * 类和命名空间的合并
 * 命名空间导出的属性相当于类的静态属性
 */
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
(function (C) {
    C.state = 1;
})(C || (C = {}));
console.log('state = ', C.state);
/**
 * 枚举和命名空间的合并
 * 命名空间导出的属性相当于枚举的成员
 */
var Color;
(function (Color) {
    Color.pickColor = function () {
        console.log('red');
    };
})(Color || (Color = {}));
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
Color.pickColor();
