// 受限的多态
// 树节点
type TreeNode = {
  value: string;
}
// 叶子节点
type LeafNode = TreeNode & {
  isLeaf: true;
}
// 内部节点
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
}

function mapMode<T extends TreeNode>(node: T, f: (node: T) => T): T {
  return f(node);
}
let node1: TreeNode = {
  value: "a",
}
let node2: LeafNode = {
  value: "b",
  isLeaf: true,
}
let node3: InnerNode = {
  value: "c",
  children: [node2],
}
let res = mapMode(node2, (node) => ({
  ...node,
  value: node.value.toUpperCase(),
}))


// 使用受限的多态模拟变长参数

function mycall(f: (...args: unknown[]) => unknown, ...args: unknown[]) {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array(length).fill(value);
}

/**
 * 下面来替换unknown, 我们想表达的约束是？
 * 1. f函数接受一系列T类型的参数返回R类型,我们事先不知道f函数的参数个数。
 * 2. Call函数接受 f 函数，以及f函数接受的 T类型的参数，同样我们也不知道参数个数。
 * 3. Call函数返回 R类型。
 */
function mycall2<T extends unknown[],  R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}
const rr2 = mycall2(fill, 3, 'a');
console.log(rr2);
