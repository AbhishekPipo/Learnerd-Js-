
class Fruits
{
constructor(color)
{
    this.color=color;
// console.log("parent cons");

}
print(){
    console.log(this);
    
    }
} 
class Apple extends Fruits
{
constructor(color,type)
{
    super(color);
// console.log("child constructor");

}

print(){
super.print();

}
}
let obj = new Apple("red","apple");
obj.print();

let ob1 = new Fruits("red");
ob1.print();
ob1.print();

