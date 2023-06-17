const bars=document.querySelector('.bars');
const sidebar=document.querySelector('.links');
const btn=document.querySelector('.btn');
const nav=document.querySelector('nav');
const goUP=document.querySelector('.go-up');


bars.addEventListener('click',() =>{
    sidebar.classList.toggle('hide-mobile');
    btn.classList.toggle('hide-mobile');
    bars.classList.toggle('fa-x');
    nav.classList.toggle('bg-orange');
    bars.classList.toggle('c-orange')
})



window.addEventListener('scroll', () =>{
   
    
    
    if(window.scrollY > 300){
       
        goUP.style.display="block";

    }
    else{
        goUP.style.display='none';
    }
});

goUP.addEventListener('click',() =>{
    window.scrollTo({
        top:0,
        behavior: 'smooth',
    });
});


const sr=ScrollReveal({
    distance:'45px',
    duration:2700,
    reset:true
})
sr.reveal('nav .logo',{delay:350, origin:'left'})
sr.reveal('nav .links ,.btn',{delay:350, origin:'right'})

sr.reveal('.home .text',{delay:350, origin:'left'})

sr.reveal('.home img,.home-cont',{delay:350, origin:'right'})

sr.reveal('.about,.blog,.footer',{delay:350, origin:'bottom'})
// ////////////////////////////////////////////

