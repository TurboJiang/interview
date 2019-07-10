function fn() { }
function instance_of(L, R) {
    let O = R.prototype
    // 一层一层的找隐式 往上找 找到所传参数的原型的顶部 
    L = L.__proto__
    // while执行多次
    while (true) {
        // if执行一次
        if (L === null) {
            return false
        }
        if(O === L) {
            return true
        }
        // 一层一层
        L = L.__proto__//再次赋值 L.__proto__.__proto__
    }
}
//  往上找 找到所传数组的原型的顶部
console.log(instance_of([],Array))
// 原型链上判断数据类型的方法(基础类型与复杂数据类型都行)
console.log(Object.prototype.toString.call(fn))
