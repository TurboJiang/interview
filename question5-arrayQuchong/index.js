// 数组去重的方法
let arr = [1, 2, 3, 2, 4, 3]
// 1.set方法
function uniq1(a) {
    return [...new Set(a)]
}
console.log(uniq1(arr))

// 2.下标 indexOf
function uniq2(b) {
    let result = []
    for (let i = 0; i < b.length; i++) {
        if (result.indexOf(b[i]) === -1) {
            result.push(b[i])
        }
    }
    return result
}
console.log(uniq2(arr))

// 3.includes
function uniq3(c) {
    let result = []
    for (let i = 0; i < c.length; i++) {
        if (!result.includes(c[i])) {
            result.push(c[i])
        }
    }
    return result
}
console.log(uniq3(arr))

// 4.map() 保存键值对
function uniq4(d) {
    let map = new Map()
    let result = new Array()
    for (let i = 0; i < d.lenght; i++) {
        if (map.has(d[i])) {
            // set为Map对象添加或更新一个指定了键（key）和值（value）的（新）键值对
            map.set(d[i], true)
        } else {
            map.set(d[i], false)
            result.push(d[i])
        }
    }
    return result
}
console.log(uniq4(arr))

// 5.reduce()
function uniq5(e) {
    return e.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], [])
}
console.log(uniq5(arr))