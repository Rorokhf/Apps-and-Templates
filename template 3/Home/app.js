const menuIcon=document.querySelector('.menu-icon');
const links=document.querySelector('.links');

// console.log(menuIcon , links);

menuIcon.addEventListener('click', () => {
links.classList.toggle('d-block');
menuIcon.classList.toggle('fa-x');

})
// text animat landing bg
const texts=document.querySelector(".content h1").children;
// console.log(texts);

textsLen=texts.length;
// console.log(textsLen);

let index=0;
const textInTime=3000,
      textOutTime=2800;  
function animateText(){
    for(let i=0 ; i<textsLen ;i++)
    {
        texts[i].classList.remove('text-in','text-out');
    }
    texts[index].classList.add('text-in');

    setTimeout(function(){
        texts[index].classList.add('text-out');
    }.textOutTime);

   
    
    setTimeout(function(){
         if(index == textsLen -1){
        index=0;
    }else{
        index ++
    }
    animateText();
    },textInTime);
}

window.onload=animateText;

// slide bg

const bgLanding=document.querySelector('.landing');

const getURL=window.getComputedStyle(bgLanding);
const bgImage= getURL.backgroundImage;
const urlImage=bgImage.slice(5,-2);
console.log(urlImage)

let imagesArray=['01.jpg','02.jpg','03.jpg'];
console.log(imagesArray)
setInterval(()=>{
let randNum=Math.floor(Math.random() * imagesArray.length);
console.log(randNum)
// change bg  img url
bgLanding.style.backgroundImage='url("images/' + imagesArray[randNum] + '")' 
},10000);