/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', 'http://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);


    } //end if
}; //end function










// GET THE FORECARST
//weatherForecast.open('', '', true);
weatherForecast.responseType = 'text'; 
//weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
	
} //end if
}; //end function


