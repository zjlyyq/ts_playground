function times(f: (index: number) => void, n: number) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}

// ✅ 调用时，行内函数不需要标注类型
times(n => console.log(n), 4);

function f(n) { // ❌ 报错：Parameter 'n' implicitly has an 'any' type.
    console.log(n);
}
times(f, 4);