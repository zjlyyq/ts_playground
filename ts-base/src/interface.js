"use strict";
// function printLabel(labeledObj: { label: string }) {
//     console.log(labeledObj.label);
// }
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var testLabel = {
    size: "10",
    label: "size 10 object"
};
printLabel(testLabel);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ colour: "black", width: 20 });
console.log(mySquare);
function getPoint(point) {
    return point;
}
var readOnlyNums = [1, 2, 3];
var nums = [1, 2, 3];
console.log(nums);
var copyNum = readOnlyNums;
copyNum.push(2);
console.log(copyNum);
