const links =document.querySelectorAll(".alternate-style"),
totallinks=links.length;

function setActiveStyle(color) {
    
    for (let i = 0; i < links.length; i++) {
        if (color===links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        }else{
            links[i].setAttribute("disabled","true");
        }
    }
 
}

//body skin
const bodySkin =document.querySelectorAll(".body-skin"),
totalBodySkin=bodySkin.length;
for (let j = 0; j < bodySkin.length; j++) {
  bodySkin[j].addEventListener("change",function(){
     if (this.value==="dark") {
         document.body.className="dark";
     }else{
        document.body.className="";
 
     }
  })  
    
}
document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{
   document.querySelector(".style-switcher").classList.toggle("open");
})