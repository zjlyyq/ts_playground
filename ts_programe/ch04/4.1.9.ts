// 简写调用签名。
type Log1 = (msg: string, userId?: string) => void;
// 完整调用签名。
type Log2 = {
  (msg: string, userId?: string): void;
};

// Reservation 接口定义
interface Reservation {
  id: string; // 订单号
  from: Date; // 出发日期
  to?: Date; // 返程日期
  destination: string; // 目的地
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

type Reserve = {
  // 重载1：单程（只有 from，没有 to）
  (from: Date, destination: string): Reservation;
  // 重载2：往返（既有 from 又有 to）
  (from: Date, to: Date, destination: string): Reservation;
};

let reserve_bad: Reserve = (from, to, destination) => {
  return {
    id: '123',
    from,
    to,
    destination,
    status: 'pending',
    createdAt: new Date(),
  };
};

// 对应的函数实现（需要合并参数）
let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
): Reservation => {
  let to: Date | undefined;
  let dest: string;
  if (toOrDestination instanceof Date) {
    to = toOrDestination;
    if (typeof destination !== 'string') {
      throw new Error('Round-trip reservation requires a destination string');
    }
    dest = destination;
  } else {
    // 单程旅行
    dest = toOrDestination;
    to = undefined;
  }
  return {
    id: '123',
    from,
    to,
    destination: dest,
    status: 'pending',
    createdAt: new Date(),
  };
};

const r1 = reserve(new Date(), new Date(), 'New York');
console.log(r1);

// DOM API 重载
type CreateElement = {
  (tag: 'a'): HTMLAnchorElement;
  (tag: 'canvas'): HTMLCanvasElement;
  (tag: 'table'): HTMLTableElement;
  (tag: string): HTMLElement;
};

let createElement: CreateElement = ((tag: string) => {
  if (tag === 'a') {
    return document.createElement(tag) as HTMLAnchorElement;
  } else if (tag === 'canvas') {
    return document.createElement(tag) as HTMLCanvasElement;
  } else if (tag === 'table') {
    return document.createElement(tag) as HTMLTableElement;
  }
  return document.createElement(tag) as HTMLElement;
}) as CreateElement;


// 以上都是函数表达式，下面是函数声明的重载。

// 1. 具体重载（放前面，优先级高）
function createDomElement(tag: 'a'): HTMLAnchorElement;
function createDomElement(tag: 'canvas'): HTMLCanvasElement;
function createDomElement(tag: 'table'): HTMLTableElement;
// 2. ✅ 新增兜底重载（放中间，让 'div' 有地方去）
function createDomElement(tag: string): HTMLElement;
// 3. 实现签名（放最后，包含所有逻辑）
function createDomElement(tag: string): HTMLElement {
  return document.createElement(tag) as HTMLElement;
}

createDomElement('a');
createDomElement('canvas');
createDomElement('table');
createDomElement('div');
