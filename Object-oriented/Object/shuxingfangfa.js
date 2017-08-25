//动态公有类型，静态公有类型（原型属性） 
function myClass() {
    var p = 100; //private property 
    this.x = 10; //dynamic public property 
}
myClass.prototype.y = 20; //static public property or prototype property，动态为myClass的原型添 加了属性， 将作用于所有实例化了的对象， 注意这里用到了prototype， 这是一个非常有用的东东
//要想成为高级javascript阶段，prototype和闭包必须得理解和适当应用 
myClass.z = 30; //static property 

var a = new myClass();
dwn(a.p) //undefined 
dwn(a.x) //10 
dwn(a.y) //20 
a.x = 20;
a.y = 40;
dwn(a.x); //20 
dwn(a.y); //40 
delete(a.x); //删除对象a的属性x 
delete(a.y); //删除对象a的属性y 
dwn(a.x); //undefined 
dwn(a.y); //20 静态公有属性y被删除后还原为原型属性y 
dwn(a.z); //undefined 类属性无法通过对象访问 
dwn(myClass.z);