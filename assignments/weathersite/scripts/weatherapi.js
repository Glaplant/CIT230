let weatherRequest = new XMLHttpRequest();
let apiURLstring = 
'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9';
weatherRequest.open('GET' , apiURLstring, true);
weatherRequest.send();




    weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);

    
    document.getElementById("current-temp").innerHTML= weatherData.main.temp;
}