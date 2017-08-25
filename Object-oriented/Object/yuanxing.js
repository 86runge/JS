function ClassA() {}
ClassA.prototype = new Object();

function ClassB() {}
ClassB.prototype = new ClassA();

function ClassC() {}
ClassC.prototype = new ClassB();
var obj = new ClassC();
dwn(obj instanceof ClassC); //true 
dwn(obj instanceof ClassB); //true 
dwn(obj instanceof ClassA); //true 
dwn(obj instanceof Object); //true 
// 带默认值的Point对象：
function Point2(x, y) {
    if (x) this.x = x;
    if (y) this.y = y;
}
//设定Point2对象的x,y默认值为0 
Point2.prototype.x = 0;
Point2.prototype.y = 0;
//p1是一个默认(0,0)的对象 
var p1 = new Point2(); //可以写成var p1=new Point2也不会出错，WHY 
//p2赋值 
var p2 = new Point2(1, 2);
dwn(p1.x + "," + p1.y); //0,0 
dwn(p2.x + "," + p2.y); //1,2 
// delete对象的属性后， 原型属性将回到初始化的状态：
function ClassD() {
    this.a = 100;
    this.b = 200;
    this.c = 300
}
ClassD.prototype = new ClassD(); //将ClassD原有的属性设为原型，包括其值 
ClassD.prototype.reset = function() { //将非原型属性删除 
    for (var each in this) {
        delete this[each];
    }
}
var d = new ClassD();
dwn(d.a); //100 
d.a *= 2;
d.b *= 2;
d.c *= 2;
dwn(d.a); //200 
dwn(d.b); //400 
dwn(d.c); //600 
d.reset(); //删掉非原型属性，所有回来原型 
dwn(d.a); //100 
dwn(d.b); //200 
dwn(d.c); //300