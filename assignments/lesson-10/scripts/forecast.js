let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'http://samples.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9';
weatherRequest.open('GET' , apiURLstring, true);
weatherRequest.send();




    weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    let icon = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    let src = weatherData.weather.description;
   
   /*----Day 1--*/
    document.getElementById('day1').innerHTML=weatherData.weather.;
    document.getElementById('day1f').innerHTML=weatherData.main[0].temp;
    document.getElementById('icon1').innerHTML=weatherData.weather.;
    
    /*---Day 2----*/
    document.getElementById('day2').innerHTML=weatherData.weather.;
    document.getElementById('day2f').innerHTML=weatherData.main[8].temp;
    document.getElementById('icon2').innerHTML=weatherData.weather.;

    /*---Day 3 ----*/
    document.getElementById('day3').innerHTML=weatherData.weather.;
    document.getElementById('day3f').innerHTML=weatherData.main[16].temp;
    document.getElementById('icon3').innerHTML=weatherData.weather.;

    /*---Day 4 ---*/
    document.getElementById('day4').innerHTML=weatherData.weather.;
    document.getElementById('day4f').innerHTML=weatherData.main[24].temp;
    document.getElementById('icon4').innerHTML=weatherData.weather.;

    /*---Day 5 ---*/
    document.getElementById('day5').innerHTML=weatherData.weather.;
    document.getElementById('day5f').innerHTML=weatherData.main[32].temp;
    document.getElementById('icon5').innerHTML=weatherData.weather.;
    