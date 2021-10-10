{
    // 1.基础类型推断 - 从右往左的推断，根据值去推断
    let a = 1

    // 2. 最佳类型推断 - 从右往左的推断，根据值去推断
    let b = [1, '0']  // b 的最佳通用类型 (string | number)[]
    let c = (x = 1) => x + 1

    // 3. 上下类型推断 (现版本已经没有)
    window.onkeydown = (event: KeyboardEvent) => {
        console.log(event)
        event.preventDefault()
    }
}

