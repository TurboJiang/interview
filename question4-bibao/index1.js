// 私有变量(get、set)+块级作用域(匿名函数)
(function(){
    //私有变量name在函数结束之后就被回收，在外面是没有方法接收的
    var name = "";
    Person= function(value){
      name = value;
    }
    Person.prototype.setName = function(value){
      name = value;
    }
    Person.prototype.getName = function(){
      return name;
    }
  })();
   
  var p1 = new Person("liu");
// 使用this.getName方法来获取对象的name属性 不能使用this.name方法获取
  console.log(p1.getName());
  p1.setName("jiang");
  console.log(p1.getName());      
