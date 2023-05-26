const searchInput = document.querySelector(".inputBtn");
const searchBtn = document.querySelector(".btn");
const citiesContainer = document.querySelector(".card");
citiesContainer.id='';
const xhr = new XMLHttpRequest();

searchBtn.addEventListener("click", () => {
  if (searchInput.value.trim() == "" ) {
    swal("oooops!", "There is no data!", "error");
  } else {
    xhr.open( "GET",`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=337cdf8aa20be284755ed14a0d181f53`);
    xhr.send();
    
   
  }
   searchInput.value = "";
});

xhr.onload = () => {
    
  if (xhr.status == 404 || xhr.readyState != 4 ) {
    swal("oooops!", "The city is not found!", "warning");
  } else {
    
    const data = JSON.parse(xhr.responseText); 
    
    citiesContainer.innerHTML += ` <div class="content" id=${data.name}>
    <div class="cityName">${data.name} <span>${data.sys.country}</span></div>
<h3>${Math.round(data.main.temp /10)} <span>&#8451;</span></h3>

    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg" alt="">

<p class="text">${data.weather[0].description}</p>
</div>`;

  }
};
