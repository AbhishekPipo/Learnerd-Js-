class Box
{
// constructor (Length)
// {
// this.length= length;
// }
display(){
console.log(this);
console.log("constructor called");
}
} 
let obj = new Box ();//20 length
obj.display();
let father = {
    name: 'jhon'
    };
    let son1={};
    let son = Object.create(father);
    
console.log(father.isPrototypeof(son));
console.log(father.isPrototypeof(son1));