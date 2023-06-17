const bars = document.querySelector(".bars");
const sidebar = document.querySelector(".sidebar");
const notification = document.querySelector(".notification");
const notifications = document.querySelector(".notifications");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("hide-mobile");
  bars.classList.toggle("fa-x");
});

notification.addEventListener("click", () => {
  notifications.classList.toggle("d-block");
});

//////////////////////////////////
const searchInput = document.querySelector(".searchInput");
const storyCardTemplate = document.querySelector("[data-story-template]");
const storyCardContainer = document.querySelector(
  "[data-story-cards-container]"
);
const searchCards=document.querySelector('.search-cards')
console.log(searchInput);

let cards = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  searchCards.classList.toggle("hide");
  console.log(value);
  cards.forEach((card) => {
     console.log(card)
  });

  fetch(`https://api.itbook.store/1.0/search/${value}`)
    .then((res) => res.json())
    .then((data) => {
      cards = data.books.map((card) => {
        console.log(card);
        storyCardContainer.innerHTML += `
      <div class="carditem flex-between">
      <img src="${card.image}" class="w-50">
        <div class="content">
        <div class="header c-orange" data-header>${card.title}</div>
        <div class="body c-black" data-body>${card.subtitle}</div>
        </div>
         </div>
      `;
        return { title: card.title, subtitle: card.subtitle ,image: card.image};
      });
    });
});

////////////////////////change name ////////////////////////////////////////
const Username=document.querySelector('.page h3');

var getName=JSON.parse(localStorage.getItem('userInfo'));

Username.textContent=`${getName.userName}`;
/////////////////////////logout //////////////////////////////////////////////////
const logoutBtn=document.querySelector(".logOut");

logoutBtn.addEventListener("click",()=>{
  localStorage.removeItem('userInfo');
  window.location.href='/Validations/login.html';
})