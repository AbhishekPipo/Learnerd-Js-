function print(){
console.log("hello");

}
print.call();
print.apply();


let animal=
{

name:'dog',
eat(a,b){
    console.log(this.name + "  is eating "+a+" "+b);
}
};


let human={
name:'ravi'
}


animal.eat(5,'bones');
animal.eat.apply(human,[10,'chips']);//borrowed
//borrowed


animal.eat.call(human,10,'chips');//borrowed

let human_eat = animal.eat.bind(human);
human_eat(5,'apples');



let ob=
{
    prnt: function(){
          console.log(this);
        }
};
ob.prnt();

