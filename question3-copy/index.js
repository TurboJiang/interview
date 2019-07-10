// 实现一个深拷贝函数
// 借助一个 WeakMap 结构 weakmap，存储已复制的对象
// WeakMap对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
function deepClone(obj, hash = new WeakMap()) {
    // 如果是正则类型不是对象 直接返回正则类型
    // instanceof判断复杂数据类型，基础是不可以的哩
    if (obj instanceof RegExp) return new RegExp(obj)
    // 如果是时间类型不是对象 直接返回时间类型
    if (obj instanceof Date) return new Date(obj)
    // 如果不是复杂数据类型的直接返回,直接返回
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    // 如果hash中有obj 直接get返回(这样在复制引用自身的属性时,直接返回 weakmap 中已有的对象)
    if (hash.has(obj)) {
        // get返回指定元素
        return hash.get(obj)
    }
    // 如果obj是数组,obj.constructor是一个{Function：Array}
    // 如果obj是对象,obj.constructor是一个{Function：Object}
    let t = new obj.constructor()
    // 根据指定的key和value在 WeakMap对象中添加新元素
    hash.set(obj, t)
    // 拷贝对象上可遍历的属性
    for (let key in obj) {
        // 递归
        if (obj.hasOwnProperty(key)) {//判断是否是自己的属性
            t[key] = deepClone(obj[key], hash)
        }
    }
    return t
}