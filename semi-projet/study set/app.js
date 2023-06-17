const flipCard=document.querySelector(".flip-card");
const flipCardInner=document.querySelector('.flip-card-inner');

flipCard.addEventListener('click', () =>{
    flipCardInner.classList.toggle("flip");
})

// //////////////////
const btnAct=document.querySelector(".btn-act");
const menuActivity =document.querySelector('.menu-activity ');

btnAct.addEventListener('click', ()=>{
    menuActivity.classList.toggle('hide');
    // btnAct.classList.replace('fa-chevron-down','fa-chevron-up');
    btnAct.classList.toggle('fa-chevron-up')
})