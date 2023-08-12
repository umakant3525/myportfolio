/*--------toggle style switcher-------*/
toggleStyleSwitcher = document.querySelector(".style-switcher-toggler");
toggleStyleSwitcher.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

/*---hide style switcher on scroll---*/
window.addEventListener("scroll",()=>{
   if(  document.querySelector(".style-switcher").classList.contains("open"))
   {
      document.querySelector(".style-switcher").classList.remove("open");
   }
})



/*--------toggle colors------- here when we click on color the function get activated and class works */ 
 const alternateStyle = document.querySelectorAll(".alternate-style") ;
function setActiveStyle(color)
{
   alternateStyle.forEach((style) => {
      if(color == style.getAttribute("title"))
      {
         style.removeAttribute("disabled");
      }
      else
      {
         style.setAttribute("disabled","true");
      }     
   })
}

//*---day night theme toggler------------*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
   dayNight.querySelector("i").classList.toggle("fa-sun");
   dayNight.querySelector("i").classList.toggle("fa-moon");
   document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
   if(document.body.classList.contains("dark"))
   {
      dayNight.querySelector("i").classList.add("fa-sun");
   }
   else{
      dayNight.querySelector("i").classList.add("fa-moon");
   }
})

/*------------typing animation------*/

var typed = new Typed(".typing",{
   strings:[" ","Web Designer","Web Developer","Engineering Student",],
   typeSpeed:100,
   BackSpeed: 60,
   loop: true
});




















