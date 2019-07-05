#javascript面试第二题
*this作用域与修改this作用域*
- this
    1.对于全局的方法调用，this指向的是全局对象window,即调用方法所在的对象
        function globalTest() {
            this.name = "global this";
            console.log(this.name);
        }
        globalTest(); //global this
    2.如果函数作为对象的方法调用，this指向的是这个上级对象，即调用方法的对象
        function showName() {
            console.log(this.name);
        }
        var obj = {};
        obj.name = "ooo";
        obj.show = showName;
        obj.show(); //ooo
    3.构造函数中的this指向新创建的对象本身
        function showName() {
            this.name = "showName function";
        }
        var obj = new showName();
        console.log(obj.name); //showName function
    4.call & apply & bind
        - call(this要指向的对象，参数1，参数2，参数3...)
        - apply(this要指向的对象，[参数1，参数2，参数3...])
        - bind()——>返回的值是函数类型 要以函数的形式调用
            let c = b.bind(a)
            c()