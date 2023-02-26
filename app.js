// const images=['box.png','img1.jfif','img2.jpg','img3.jfif','img4.png','img5.jpg','img6.webp','img7.jfif','img8.jfif'];

// const image=document.querySelector('.image');


// setInterval(function(){
//     let random=Math.floor(Math.random()*9);
//     image.src=images[random];
   
//   },1500);
const home_bar=document.getElementById("home-bar");
const hidden_bar=document.getElementById("hidden-bar");
const hidden=document.getElementById("hidden");
const container = document.querySelector('.container');
const  side_section=document.getElementById("side-section");


home_bar.addEventListener('click',()=>{
    side_section==true;
    if(side_section){
        hidden.style.display='block';
    }
    else{
        hidden.style.display='none';
    }
})
hidden_bar.addEventListener('click',()=>{
    hidden==true;
    if(hidden){
        hidden.style.display='none';
    }
    else{
        side_section.style.display='block';
    }
})

// hidden_bar.addEventListener('click',()=>{
//     hidden.classList.toggle("move-left");
// });


// home_bar.addEventListener('click', () => {
//   // Disable all user interactions
  
//   document.body.style.pointerEvents = 'none';
//   // Add an overlay to prevent scrolling
//   const overlay = document.createElement('div');
//   overlay.style.position = 'fixed';
//   overlay.style.top = 0;
//   overlay.style.left = '20%';
//   overlay.style.width = '100%';
//   overlay.style.height = '100%';
//   overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
// //   overlay.style.zIndex = 9999;
//   document.body.appendChild(overlay);
 
    
  
// });

// Remove the overlay and enable user interactions

