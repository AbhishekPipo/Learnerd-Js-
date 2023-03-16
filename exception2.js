function a(age){

if(age <16)
{
try
{
    throw new Error("You are under age");
}

catch(error)


 {
    console.log("we got an error");
 }
}else{
    console.log("tou cn vote");
}
}
a(13);