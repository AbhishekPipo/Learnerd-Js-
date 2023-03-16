function canVote(age){

if(age>=18)
return true;
else
return false;
 };

 function canDrive(age){
    return age>=16;
 };
 function canMarry(){
return age>=21;

 };

 console.log(canDrive(11));
 console.log(canVote(21));
 console.log(canMarry(11));


 function age_req(r_age){
 return function(age);
          return age>=r_age;

 };
let can_Vote = age_req(18);
console.log(can_Vote(27));
let can_Drive= age_req(16);
console.log(can_Drive (27));
let can_Marry= age_req(16);
console.log(can_Marry(27));
