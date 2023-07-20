let username=document.getElementById("username");
let phone=document.getElementById("phone");
let err1=document.getElementById("err1")
let err2=document.getElementById("err2")
let f1=1;
let f2=1;
function check(){

    
    if(username.value.length>7){
        f1=0;
        
    }
    else{
        f1=1
        err1.innerHTML="plese enter min 8 char";
    }
   


    if(phone.value.length>9 && phone.value.length<11){
        f2=0;
    }
    else{
        f2=1;
        err2.innerHTML="plese enter valid mobile number"
    }
   if(f1==0 || f2==0){
       return true
   }
  else{
    return false
   }
}