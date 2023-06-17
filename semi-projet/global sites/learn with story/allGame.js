const cardGame = document.querySelector(".card-game");
// console.log(cardList);

async function getDataGame() {
    const res = await fetch("https://api.sampleapis.com/jokes/goodJokes");
    const data = await res.json();
     const dataGame = data.slice(0,30);
    // console.log(data);

    dataGame.map((element) => {
         console.log(element);

        cardGame.innerHTML += `
        <div class="card-list" data-id=${element}> 
         <a href="">
         <div class="card">
        <div class="icon"> </div>
       <div class="body-card">
       <strong class="css-3d-text">${element.setup} </strong>
                           
       <div class="card__body"></div>
       </div>
    <span class="css-3d-text">${element.punchline} !</span>
                        </div>
                    </a>
         </div>
         `
    });
}
getDataGame();