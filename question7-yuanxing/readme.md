#判断数据类型
let a = 'hello',
    b = 123,
    c = true,
    d = undefined,
    e = null,
    // ———
    f = {},
    g = [],
    h = function () { };
- typeof 判断基础数据类型  typeof a ——>string
- instanceof 判断复杂数据类型 g instanceof Array ——>true/false
- Object.prototype.toString.call(g)原型链上判断数据类型的方法(基础类型与复杂数据类型都行)——>[object Array]

#原型
- 显式原型prototype
1. 只有函数有

- 隐式原型 __proto__
1. 所有的都有隐式原型

- 关联
*实例对象的隐式原型与其对应的构造函数的显式原型一样*

#instanceof的原理(利用显隐式关联) index.js
- L = L.__proto__ 
- while (true) {
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
