/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=malmoe,se&appid=e1137668a5448f4742c53b5e6df862cb&units=metric', true);
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
weatherForecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=21458,se&appid=e1137668a5448f4742c53b5e6df862cb&units=metric', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
    console.log(fObj);

//----------------DAY 1 ---------------------------------------

    var date_raw =fObj.list[0].dt_txt
    date_raw = date_raw.substring(2,16);
    document.getElementById('r1c1').innerHTML=date_raw;
    
    var iconcode = fObj.list[0].weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" +iconcode+ ".png";
    document.getElementById('r1c2').src = icon_path;
    document.getElementById('r1c3').innerHTML = fObj.list[0].main.temp_min+"&deg;";
    document.getElementById('r1c4').innerHTML = fObj.list[0].main.temp_max+"&deg;";

//----------------DAY 2 ---------------------------------------

var date_raw =fObj.list[8].dt_txt
    date_raw = date_raw.substring(2,16);
    document.getElementById('r2c1').innerHTML=date_raw;
    
    var iconcode = fObj.list[8].weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" +iconcode+ ".png";
    document.getElementById('r2c2').src = icon_path;
    document.getElementById('r2c3').innerHTML = fObj.list[0].main.temp_min+"&deg;";
    document.getElementById('r2c4').innerHTML = fObj.list[0].main.temp_max+"&deg;";

    //----------------DAY 3 ---------------------------------------

var date_raw =fObj.list[16].dt_txt
date_raw = date_raw.substring(2,16);
document.getElementById('r3c1').innerHTML=date_raw;

var iconcode = fObj.list[16].weather[0].icon;
var icon_path = "http://openweathermap.org/img/w/" +iconcode+ ".png";
document.getElementById('r3c2').src = icon_path;
document.getElementById('r3c3').innerHTML = fObj.list[0].main.temp_min+"&deg;";
document.getElementById('r3c4').innerHTML = fObj.list[0].main.temp_max+"&deg;";
} //end if
}; //end function


