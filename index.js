document.querySelector(".dropdown-icon").addEventListener("click", function () {
    const detailList = document.querySelector(".firstinfo");
    detailList.classList.toggle("show");
    
});
document.querySelector(".dropdown-icon2").addEventListener("click", function () {
    const detailList = document.querySelector(".secondinfo");
    detailList.classList.toggle("show");
    
});
document.querySelector(".dropdown-icon3").addEventListener("click", function () {
    const detailList = document.querySelector(".thirdinfo");
    detailList.classList.toggle("show");
    
});
 function adList() {
    const navList = document.querySelector(".unordl");
    const navList2 = document.querySelector(".nav2");
    navList.classList.add("threedot"); 
    navList2.classList.add("threedot");
    document.querySelector(".tdm").innerHTML=`<i class="bi bi-x-circle-fill toggle-icon2" onclick="rmvList()"></i>`;
    gsap.fromTo(navList, { y:-100,opacity:0 }, {  y: 2,  duration: 1.1, opacity:1});
    gsap.fromTo(navList2, { y:-100,opacity:0 }, {  y: 2,  duration: 1.1, opacity:1});
    gsap.fromTo(".tdm i", { y:-100,opacity:0 }, {  y: 2,  duration: 1, opacity:1});
};

function rmvList() {
    const navListz = document.querySelector(".unordl");
    const navList2z = document.querySelector(".nav2");
    navListz.classList.remove("threedot"); 
    navList2z.classList.remove("threedot");
    document.querySelector(".tdm").innerHTML=`<i class="bi bi-list-nested toggle-icon" onclick="adList()"></i>`;
   
    
}
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
let frameCount ;
if(window.innerWidth>=930){
  frameCount=492;
}
else{
    frameCount=422;
}


const currentFrame=(index)=>`./images2/0${(index+1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}
gsap.registerPlugin( ScrollTrigger);
gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "600%",
  },
  onUpdate: render,
});
/////-----------testing purpose-->
/*gsap.fromTo(
  ".ball-text2",                   //--
  {
    opacity: 0,
  },
  {
    opacity: 0,
    scrollTrigger: {
      scrub: true,

      start: "58%",
      end: "70%",
    },
    onComplete: () => {
      gsap.to(".ball-text2", { opacity: 0 });
    },
  }
);                                      //--test 2
gsap.fromTo(
    ".ball-text",
    {
      opacity: 0,
    },
    {
      opacity: 0,
      scrollTrigger: {
        scrub: 0.1,
  
        start: "40%",
        end: "55%",
      },
      onComplete: () => {
        gsap.to(".ball-text", { opacity: 0 });
      },
    }
  ); */
//------------------------------>
images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}
//------------------------------------------------------------
gsap.to("#scrollText", {
    fontSize: "12px",
    scrollTrigger: {
      trigger: "#scrollText",
      start: "top 80%", 
      end: "bottom 10%", 
      scrub: 0.5,
      
      toggleActions: "restart pause reverse pause" 
    }
  });
//-----------------------------------------------not used-->>-----------
let leftShift;
  if(window.innerWidth>=930){
   leftShift ="44%";
  }
  else{
    leftShift ="34%";
  }
//----------------------------------------------------
  gsap.fromTo(".abt-us", {
   y:-100,
  //x:"2%",
   opacity:0,
}, 

  {
    scrollTrigger:{
        trigger:".abt-us",
       // toggleActions:"play pause reverse pause",
        start:"top 80%",
       
        
    },
    y: 10, 
   //x:leftShift,
    duration: 1,
    opacity:1
});
//--------------------------------------------------------------scroll smooth----------
