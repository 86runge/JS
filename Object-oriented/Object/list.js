//函数定义：命名函数（声明式），匿名函数（引用式） 
//声明式，定义代码先于函数执行代码被解析 
function t1() {
    dwn("t1");
}
t1();

function t1() {
    dwn("new t1");
}
t1();
//引用式，在函数运行中进行动态解析 
var t1 = function() {
    dwn("new new t1");
}
t1();
var t1 = function() {
    dwn("new new new t1");
}
t1();
//以上输出：new t1,new t1,new new t1,new new new t1 
var t2 = new function() {
    var temp = 100; //私有成员 
    this.temp = 200; //公有成员，这两个概念会在第三点以后展开说明 
    return temp + this.temp;
}

dwn(typeof(t2)); //object 
dwn(t2.constructor()); //300 
// 除此之外，还有使用系统内置函数对象来构建一个函数，例： 
var t3 = new Function('var temp = 100; this.temp = 200; return temp + this.temp;'); //这个位置加不加new结果都一样，WHY 
dwn(typeof(t3)); //function 
dwn(t3()); //300

//以下三种构造对象的方法 
//new Object，实例化一个Object 
var s = new Object();
s.x = 1, s.y = 2;
//对象直接量 
var t = { x: 1, y: 2 };
//定义类型 
function Point(x, y) { //类似于C#中的类 
    this.x = x;
    this.y = y;
}
var p = new Point(1, 2); //实例化类 