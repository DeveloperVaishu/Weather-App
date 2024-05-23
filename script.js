let weatherImg=document.getElementById("weatherImg");
let searchBox=document.querySelector(".searchBox input");
let searchBtn=document.querySelector(".searchBox button");
let weatherBox=document.querySelector(".weatherBox");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="bc8e5f90f882c96f4402187476d4f774";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (response.status == 404)
    {
        document.querySelector(".error").style.display="block";
        weatherBox.style.display="none";
    }
 
     else{
        var data = await response.json();

        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerHTML=data.main.humidity + "%";
        document.getElementById("wind").innerHTML=data.wind.speed + "km/h";

        if(data.weather[0].main =="Clouds")
        {
            weatherImg.src="images/clouds.png";
        }
        else if(data.weather[0].main =="Clear")
        {
            weatherImg.src ="images/clear.png";
        }
        else if(data.weather[0].main =="Rain")
        {
            weatherImg.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherImg.src ="images/drizzle.png";

        }
        else if(data.weather[0].main =="Mist")
        {
            weatherImg.src ="images/mist.png";
        }

        else if(data.weather[0].main =="Snow")
        {
            weatherImg.src =="images/snow.png";
        }

        document.querySelector(".error").style.display="none";
        weatherBox.style.display="block";
     }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})