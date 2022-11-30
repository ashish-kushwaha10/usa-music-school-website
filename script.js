
  
  
  
  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");




  window.addEventListener("load",function(){
 
   showPopup();
  //  setTimeout(function(){
  //    loginPopup.classList.add("show");
  //  },1000)

  })

  function showPopup(){
        const timeLimit = 20 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         } 
         console.log(i)
        },2000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })



 