let townRequest = new XMLHttpRequest();
let prestonURLstring = https://byui-cit230.github.io/weather/data/towndata.json;
townRequest.open('GET' , prestonURLstring, true);
townRequest.send();




    townRequest.onload = function() {
    let townData = JSON.parse(townRequest.responseText);

    
    document.getElementById("preston").innerHTML=towns.names.Preston ;
    document.getElementById("motto").innerHTML= ;
    document.getElementById("yearfounded").innerHTML= ;
    document.getElementById("population").innerHTML= ;
    document.getElementById("rain").innerHTML= ;
    document.getElementById("events").innerHTML= ;
}