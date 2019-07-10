#JavaScript面试第四题
*闭包* 
- 含义
1. 有权限读取其他函数内部变量的函数
2. 可定义块级作用域（函数内函数、匿名函数）index1.js
3. 私有变量setName()和getName()方法放入对象的原型链中 index1.js

- 缺点
1. 阻止JavaScript的默认垃圾回收，阻止作用域的回收，会导致内存泄漏

