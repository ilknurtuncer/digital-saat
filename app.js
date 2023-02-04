const clock=document.querySelector(".clock")
//clock.innerText = new DataTransfer().toLocaleTimeString("en-GB")  //YEREL saat alır. en-GB  => 24 saatlik dilimi alır

setInterval(()=>{
    clock.innerText = new DataTransfer().toLocaleTimeString("en-GB")
},1000)