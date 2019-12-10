/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=e1137668a5448f4742c53b5e6df862cb&units=metric', true);
weatherConditions.responseType = 'text';
weatherConditions.send();

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('location').innerHTML=cObj.name;
        document.getElementById('temperature').innerHTML=cObj.main.temp;
        document.getElementById('desc').innerHTML="Wind speed: "+cObj.wind.speed+"m/s";
        document.getElementById('weather').innerHTML=cObj.weather[0].description;

    } //end if
}; //end function










// GET THE FORECARST
weatherForecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=84653,us&appid=e1137668a5448f4742c53b5e6df862cb&units=metric', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
    console.log(fObj);
    document.getElementById('r1c1').innerHTML=fObj.list[0];
	
} //end if
}; //end function


