
let inputLocation = document.querySelector(".location h2");
let weatherIcon = document.querySelector(".icon p img");
let userTemp = document.querySelector(".time_temp h1");
let currentTime = document.querySelector(".time_temp span");
let inputCondition = document.querySelector(".weather_condition p"); 
let searchLocation = document.querySelector("form .searchField");
let form = document.querySelector("form");

 let target="Pune";
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    target = searchLocation.value;
    weatherData(target);
})

async function weatherData(target) {
    try{
    let url=`https://api.weatherapi.com/v1/current.json?key=da610dffb70f4e1a83b44227230507&q=${target}&aqi=no`;
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    let currentTemp = data.current.temp_c;
    let currentCondition = data.current.condition.text;
    let locationName = data.location.name;
    let localTime = data.location.localtime;
    let conditionIcon = data.current.condition.icon;
    // console.log(locationName,currentTemp,currentCondition,localTime,conditionIcon);
    inputLocation.innerText=locationName;
    userTemp.innerText=currentTemp;
    currentTime.innerText=localTime;
    inputCondition.innerText=currentCondition;
    weatherIcon.src=conditionIcon;
    }
    catch(error){
        alert("Please Enter Valid Location");
        console.log(error);
    }
}
weatherData(target);
