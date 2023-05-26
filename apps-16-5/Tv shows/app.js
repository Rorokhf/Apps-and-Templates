const contentItems = document.querySelector(".content-items");
const asideBar = document.querySelector("aside");
const closeBtn = document.querySelector(".closeBtn p");
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");


const xhr = new XMLHttpRequest();
xhr.open("GET", " https://api.tvmaze.com/shows");
xhr.send();

xhr.onload = () => {
    contentItems.innerHTML='';
  let data = JSON.parse(xhr.responseText);
  data = data.slice(0, 40);
  console.log(data[0]);
  if(data.length == 0){
    contentItems.innerHTML=
    `<h2> Nothing Found !</h2>`
  }
  data.forEach((item) => {
    if (item.show != undefined) 
    item = item.show;

if (item.image == null)
  item.image = {
    medium:
      "./img.png",
  };
    //     contentItems.innerHTML +=`
    //     <div class="card">
    //     <img src="${item.image.medium}" alt="${item.image.name}" >
    //     <div class="text">
    //         <h3 class="title">${item.name}</h3>
    //         <p class="auther">${item.genres[0]}</p>
    //     </div>
    // </div>
    //     `
    // another steps to catch elements
    const newEle = document.createElement("div");
    newEle.className = "card";
    newEle.setAttribute("data-id", item.id);
    newEle.innerHTML = `
<img src="${item.image.medium}" alt="${item.image.name}" >
    <div class="text">
        <h3 class="title">${item.name}</h3>
        <p class="auther">${item.genres[0] || ''}</p>
    </div>
    `;
    // console.log(newEle)
    newEle.addEventListener("click", () => {
      const targetItem = newEle.getAttribute("data-id");
      const singleShow = new XMLHttpRequest();
      singleShow.open("GET", `https://api.tvmaze.com/shows/${targetItem}`);
      singleShow.send();
      singleShow.onload = () => {
        const showsAllData = JSON.parse(singleShow.responseText);
        if (showsAllData.image == null)
  showsAllData.image = {
    original:
      "./nonImg.jpg",
  };
        asideBar.querySelector(".show-content").innerHTML = `
            <img class="show-img" src='${showsAllData.image.original}'alt="" >
            <h2 class="show-title">${showsAllData.name}</h2>
            <div class="show-type"></div>
            <hr>
            <h5 class="text">Summary :</h5>
            ${'<P class="show-desc">' + showsAllData.summary + "</p>"}
            <a href='${
              showsAllData.url
            }' target="_blank" class="show-sit">More About the movie</a>
            `
            const showType= document.querySelector('.show-type');
            showsAllData.genres.forEach((ele) =>{
        showType.innerHTML+=` <p>${ele}</p> `
       
        })
      }
      
     
      asideBar.classList.add("activ");
    });
    contentItems.append(newEle);
  });
};
closeBtn.addEventListener("click", () => {
  asideBar.classList.remove("activ");
});

searchInput.addEventListener('keydown',(e) =>{
if(e.key == 'Enter'){
    searchBtn.click();
}
} );
searchBtn.addEventListener("click", function () {
    if(searchInput.value.trim() === ''){
        xhr.open("GET", " https://api.tvmaze.com/shows");
xhr.send();
    }
    else{
      xhr.open("GET", `https://api.tvmaze.com/search/shows?q=${searchInput.value}`);

    }
    xhr.send();
    searchInput.value=''; 
});
