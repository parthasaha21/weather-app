const apiKey = "fc82e5592fd055a6a7fc0aea3f078e32";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const scarch = document.querySelector(".scarch-div input");
const btn = document.querySelector(".scarch-div button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const responce = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await responce.json();

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
    document.querySelector(".wind").innerHTML =data.wind.speed +"km/h";

     if(data.weather[0].main === "Clouds"){
        weatherIcon.src ="image/clouds.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src ="image/rain.png";
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src ="image/snow.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src ="image/drizzle.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src ="image/clear.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src ="image/mist.png";
    }

    document.querySelector(".weather-part").style.display = "block";
};

btn.addEventListener("click", ()=>{
    checkWeather(scarch.value);
})
