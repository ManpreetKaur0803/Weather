const apiKey = "80e6eef29df3986877a18383b5ad04e5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cloudy = document.querySelector(".cloudy");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    if(data.weather[0].main == "Clouds"){
        cloudy.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        cloudy.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        cloudy.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Clear"){
        cloudy.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Snow"){
        cloudy.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        cloudy.src = "images/drizzle.png";
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});