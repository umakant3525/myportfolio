


/*------aside-----active --back-section-------------------*/
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll("section");
 const totalSection = allSection.length ;
      

      for(let i=0; i<totalNavList; i++)
      {
         removeBackSection();
         const a = navList[i].querySelector("a"); // console.log(navList[i]); //  console.log(a);
         
          a.addEventListener("click",function()
          {
            for(let j=0;j<totalNavList;j++)
            {
               if(navList[j].querySelector("a").classList.contains("active"))
               {
                 addBackSection(j); 
               }
               navList[j].querySelector("a").classList.remove("active"); //repetation
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200)
            {
               asideSectionTogglerBtn();
            }
          })
      }

function removeBackSection()
{
   for(let k=0; k < totalSection; k++) 
   {
      allSection[k].classList.remove("back-section");
   }
}
function addBackSection(num)
{
   allSection[num].classList.add("back-section");
}

function showSection(element)
{
   for(let k=0; k < totalSection; k++) 
   {
      allSection[k].classList.remove("active");
   }
   const target = element.getAttribute("href").split("#")[1];
   document.querySelector("#" + target).classList.add("active");
}


//------------------hire me- by pass to contact active-----------
function updateNav(element)
{
   for(let i=0; i<totalNavList;i++)
   {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target ==  navList[i].querySelector("a").getAttribute("href").split("#")[1])
      {
         navList[i].querySelector("a").classList.add("active");
      }
   }
}
document.querySelector(".hire-me").addEventListener("click",function(){
   const sectionIndex = this.getAttribute("data-section-index");
   //console.log(sectionIndex);
   showSection(this);
   updateNav(this);
   removeBackSection(sectionIndex);
   addBackSection(sectionIndex);
})




/*------- hamb burger---------------*/

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click",()=>{
   asideSectionTogglerBtn();
})   

function asideSectionTogglerBtn()
{
   aside.classList.toggle("open");
   navTogglerBtn.classList.toggle("open");
   for(let i=0;i<totalSection;i++)
   {
      allSection[i].classList.toggle("open");
   }
}









