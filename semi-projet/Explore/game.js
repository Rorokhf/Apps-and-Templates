const cardGame = document.querySelector(".card-game");
// console.log(cardList);

async function getDataGame() {
    const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D");
    const data = await res.json();
     const dataGame = data.splice(0, 5);
    // console.log(data);

    dataGame.map((element) => {
        console.log(element);
        cardGame.innerHTML += `
        <div class="card-list" data-id=${element}> 
         <a href="">
         <div class="card">
        <div class="icon">
        <img src="${element.image}" class="w-100">
        </div>
       <div class="body-card">
       <strong class="css-3d-text">${element.title} </strong>
                           
       <div class="card__body"></div>
       </div>
    <span class="css-3d-text">Let's Go !</span>
                        </div>
                    </a>
         </div>
         `
    });
}
getDataGame();