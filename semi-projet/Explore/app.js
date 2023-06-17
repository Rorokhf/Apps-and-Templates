const slidArrow=document.querySelectorAll('.slid-arrow ');
const slidArrowBtn=document.querySelectorAll('.btn-don');
const bodyCard=document.querySelectorAll('.body-card');

console.log(slidArrow)
console.log(slidArrowBtn)
console.log(bodyCard)

slidArrowBtn.forEach((item) =>{
    item.addEventListener('click',(e)=>{
        e.bodyCard.style.height='fit-content';
        e.slidArrowBtn.classList.toggle('fa-circle-arrow-up');
        e.slidArrow.classList.toggle('hide');
    
    })
})
// card story
const cardList = document.querySelector(".card-area");
// console.log(cardList);
const saveBook = JSON.parse(localStorage.getItem('saveBook')) || [];
// console.log(saveBook)

async function getData() {
    const res = await fetch("https://api.itbook.store/1.0/new");
    const data = await res.json();
    const dataBook = data.books.splice(0,5);
    // dataBook.
    //    console.log(data.total=4);

       dataBook.map((element ) => {
        // console.log(element);
         cardList.innerHTML +=`
         <div class="card-list" data-id=${element.isbn13}>             
         <a href="" >
         <div class="card card-shadow">
         
             <div class="image p-relative res-6">
                 <img src="${element.image}" alt="" class="w-100">
             </div>
             <div class="content p-relative">
         
                 <span class="title-card c-orange">
                 ${element.title}
                 </span>
                 <p class="desc">
                     ${element.subtitle}
                 </p>
         
                 <div class="footer-card flex-between">
                     <span>Number of words: <i>4000</i>
                     </span>
                     <span>Pages: <i>38</i>
                     </span>
                 </div>
         </a>
         <span class="save"><i class="fa-regular fa-heart  fs-17">Save</i>
         </span>
         </div> 
         `
        
    });
  
    const saveItem = document.querySelectorAll('.save');
    // console.log(saveItem);
    
    saveItem.forEach((btn) => {
        btn.addEventListener("click", ()=>{
          handlBtnClick();
          let saveIcon=btn.querySelector('.save i');
          saveIcon.classList.replace('fa-regular','fa-solid');
        });
      });
}
    async function handlBtnClick(e) {
        
        console.log('it works')
        const parent = e.target.closest('.card-list')
        const id = parent.getAttribute('data-id');
        // console.log(parent)
        //  console.log(id)

        const res = await fetch(`https://api.itbook.store/1.0/books/${id}`);
        const data = await res.json();
        // console.log(saveBook.find(ele => ele.isbn13== id))
        
        data.count= 1;
        const obj = saveBook.find(ele => ele.isbn13== id);
       
        if (obj) {
            obj.count +=1;
            swal(
                'Ooops!',
                'You already saved it!',
                'warning'
              )
            
        } else {
            saveBook.push(data);
           
        }

       localStorage.setItem('saveBook', JSON.stringify(saveBook));

    }
   
    getData();
