const apiKey = "ca3f014019136cc29be9f0c95d7f5459";  // OpenWeatherMap API Key
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";  // Base URL for API requests

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch (apiURL + city + `&appid=${apiKey}`);
    if(response.status == 404){
        alert("City not found");
        return;
    }
const data = await response.json();


//Updating weather details on the webpage

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

//Weather icon handling
const weatherIcon = document.querySelector(".weather-icon");
const weatherMain = data.weather[0].main;

if (weatherMain === "Clouds") {
    weatherIcon.src = "Cloudy-icon.png";
} else if (weatherMain === "Clear") {
    weatherIcon.src = "Sunny-icon.png";
} else if (weatherMain === "Rain") {
    weatherIcon.src = "Rainy-icon.png";
} else if (weatherMain === "Drizzle") {
    weatherIcon.src = "Drizzling-icon.png";
} else if (weatherMain === "Mist") {
    weatherIcon.src = "Mist-icon.png";
}
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

