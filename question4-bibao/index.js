// 闭包
function foo() {
    var a = 2
    // 可访问foo()函数的变量
    function fn() {
        console.log(a)
    }
    // 不返回没用的哩
    return fn()
}
foo()
