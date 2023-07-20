let username=document.getElementById("username");
let password=document.getElementById("password");
let err1=document.getElementById("err1");
let err2=document.getElementById("err2");
let f1=1;
let f2=1;
function cheak(){

   if(username.value.length>7){
        f1=0;
        err1.innerHTML="";
   }
   else{
     f1=1;
     err1.innerHTML="please enter min 8 char"
   }

   if(password.value.length>7){
    f2=0;
    err2.innerHTML=""
   }
   else{
    f2=1;
    err2.innerHTML="please enter min 8 char"
  }
  if(f1==0 && f2==0){
    return true
  }
  else{
    return false
  }
}
