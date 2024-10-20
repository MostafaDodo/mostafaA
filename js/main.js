// search
let searchInput=document.getElementById("search")
// today 
let todayDName = document.getElementById("todayDName")
let todayDNumber = document.getElementById("todayDNumber")
let todayDMonth = document.getElementById("todayDMonth")
let todayLocation = document.getElementById("todayLocation")
let todayTemp = document.getElementById("todayTemp")
let contdt = document.getElementById("contdt")
let todayImg = document.getElementById("todayImg")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")
let compass = document.getElementById("compass")
// nextData
let nextday = document.getElementsByClassName(" nextday")
let nextmaptemp = document.getElementsByClassName("nextmaptemp")
let nextmintemp = document.getElementsByClassName("nextmintemp")
let nextcondtext = document.getElementsByClassName("nextcondtext")
let Timg  = document.getElementsByClassName("Timg ")
// Api
async function getData() {
    let Data = await fetch("https://api.weatherapi.com/v1/forecast.json?key=df8ac1a4c6474f66a1711131241810&q=07112&days=3");
    let gData = await Data.json();
  return gData
    
}
// display Today Data
function displayTdata(data) {
     let todayDate = new Date()
    todayDName.innerHTML = todayDate.toLocaleDateString("en-US",{weekday:"long"}) 
    todayDNumber.innerHTML = todayDate.getDate();
    todayLocation.innerHTML= data.location.name
    todayTemp.innerHTML=data.current.temp_c
    todayImg.setAttribute("src",data.current.condition.icon)
    contdt.innerHTML=data.current.condition.text
    humidity.innerHTML=data.current.humidity + "%"
    wind.innerHTML=data.current.wind_kph + "km/h"
    compass.innerHTML=data.current.wind_dir
}
// display nextData
function displayNdata(data) {
    let forecastData = data.forecast.forecastday
    for (let i = 0; i < 2; i++) {
        let Ndate = new Date(forecastData[i+1].date)
        nextday[i].innerHTML = Ndate.toLocaleDateString("en-US",{weekday:"long"})
        nextmaptemp[i].innerHTML= forecastData[i + 1].day.maxtemp_c
        nextmintemp[i].innerHTML= forecastData[i + 1].day.mintemp_c
        Timg[i].setAttribute("src",forecastData[i+1].day.condition.icon)
        nextcondtext[i].innerHTML = forecastData[i+1].day.condition.text
    }
    }


// start
async function startApp() {
    let weatherData = await getData()
   displayTdata(weatherData)
   displayNdata(weatherData)
}
startApp()
