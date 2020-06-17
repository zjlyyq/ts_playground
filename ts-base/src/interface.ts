// function printLabel(labeledObj: { label: string }) {
//     console.log(labeledObj.label);
// }

// let testObj = {size: 10, label: "Size 10 Object"};
// printLabel(testObj);


// using an interface to describe the requirement of having the label property of typr string
interface LabeledValue {
    label: string
}

function printLabel(labeledObj: any) {
    console.log(labeledObj.label);
}

let testLabel = {
    size: "10",
    label: "size 10 object"
}

printLabel(testLabel)

// optional properties
interface SquareConfig {
    color?: string;
    width?: number;
    // string index signature
    [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({colour: "black", width: 20});

console.log(mySquare)

// readonly properties
interface Point {
    readonly x: number
    readonly y: number
}

function getPoint(point: Point): Point {
    return point
}

let readOnlyNums: ReadonlyArray<number> = [1,2,3]
let nums: number[] = [1,2,3]
console.log(nums)
let copyNum: number[] = readOnlyNums as number[]
copyNum.push(2)
console.log(copyNum)