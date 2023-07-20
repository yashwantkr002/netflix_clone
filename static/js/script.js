let flage=0
let flage2=0
function change(){
   const change=document.getElementById("ul");
   if(flage==0){
      change.style.display="block";
      change.classList.add("h_black");
      flage=1;
   }
   else{
    change.style.display="none";
      change.classList.remove("h_black");
      flage=0;
   }  
  };
  function option(){
    const user_icon=document.getElementById("user-icon")
    if(flage2==0){
        user_icon.style.display="block";
        flage2=1;
    }
    else{
        user_icon.style.display="none";
        flage2=0;
    }

  }

