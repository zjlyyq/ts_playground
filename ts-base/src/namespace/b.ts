/// <reference path="./a.ts" />
namespace Shape {
    export function square(x:number) {
        return x * x
    }
}
// import circle = Shape.circle
console.log(Shape.circle(10))
console.log(Shape.square(3))