let username=document.getElementById("username");
let fname=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let password=document.getElementById("password");
let conf_password=document.getElementById("conf_password");
let err1=document.getElementById("err1");
let err2=document.getElementById("err2");
let err3=document.getElementById("err3");
let err4=document.getElementById("err4");
let err5=document.getElementById("err5");
let err6=document.getElementById("err6");
let f1=1;
let f2=1;
let f3=1;
let f4=1;
let f5=1;
let f6=1;

function cheak(){
   // usrname
     if(username.value.length>7){
        f1=0;
        err1.innerHTML=""
     }
     else{
        f1=1;
        err1.innerHTML="plese enter min 8 char";
     }

   //   first name
     if(fname.value.length){
        f2=0;
        err2.innerHTML=""
     }
     else{
        f2=1;
        err2.innerHTML="name is empty";
     }

   //   email
       if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
         f3=1;
         err3.innerHTML="plese enter valid email";
      }
      else{
         f3=0;
         err3.innerHTML="";
      }

      // phone number
     if(phone.value.length>9 && phone.value.length<11){
      f4=0;
      err4.innerHTML=""
     }
     else{
        f4=1;
        err4.innerHTML="plese enter valid phone number";
     }

// password
     if(password.value.length<1){
      err5.innerHTML="password is imapty"
      f5=1;
   }
   else if(password.value.length<8){
          err5.innerHTML="password min 8 char"
       
          f5=1;
   }
   else  if (!/[a-z]/.test(password.value)) {
          err5.innerHTML="Contains at least one lowercase letter";
          f5=1;
       
     }
     else   if (!/[A-Z]/.test(password.value)) {
          err5.innerHTML="Contains at least one uppercase letter";
          f5=1;
       

     }
     else if (!/[0-9]/.test(password.value)){
          err5.innerHTML=" Contains at least one digit";
          f5=1;
      
     }
     else if (!/[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?]/.test(password.value)){
          err5.innerHTML="Contains at least one special character";
          f5=1;
     
     }
   else{
          err5.innerHTML=""
          f5=0;
     
   }

   // conforome password
   if(conf_password.value.length<1){
      err6.innerHTML="conform password is empty"
      f6=1;
     }
     else if(password.value!=conf_password.value){
         err6.innerHTML="conform password not match"
         f6=1;
     }
     else{
         err6.innerHTML="";
         f6=0;
       
     }
   
     if(f1==0&&f2==0&&f3==0&&f4==0&&f5==0&&f6==0){
      return true
     }
     else{

      return false
     }
   
   
   
    
}