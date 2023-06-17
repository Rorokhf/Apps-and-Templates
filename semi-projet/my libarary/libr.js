let saveBook=JSON.parse(localStorage.getItem('saveBook')) || [];
// console.log(saveBook);
const cardList = document.querySelector(".card-area");

renderBooks();

function renderBooks(){
    cardList.innerHTML='';

    if(saveBook.length >=1){
        saveBook.forEach(element =>{
            cardList.innerHTML += `
            <div class="card-list" data-id=${element.isbn13}>             
            <a href="" >
            <div class="card card-shadow">
            
                <div class="image p-relative res-6">
                <span class="close">
                </span>
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
            <span class="save delet-btn"><i class="fa-solid fa-xmark  fs-17"></i>
            </span>
            </div> 
            `
            })
    }else{
        cardList.textContent ="There is no Books ";
    }
    const deleteBtn=document.querySelectorAll('.delet-btn');
    deleteBtn.forEach(ele =>{
        ele.addEventListener('click',deletBtn);
    })

}

    
function deletBtn(e){
    const parent=e.target.closest('.card-list');
    const id=parent.dataset.id;
    saveBook=saveBook.filter(item => item.isbn13 != id);
    localStorage.setItem('saveBook',JSON.stringify(saveBook));
    parent.remove();
    
}