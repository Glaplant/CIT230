let templeRequest = new XMLHttpRequest();
let templeURLstring = "http://glaplant.github.io/CIT230//assignments/temple/json/templedata.json";
templeRequest.open('GET' , templeURLstring, true);
templeRequest.send();




    templeRequest.onload = function() {
    let templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);


    document.getElementById('name2').innerHTML=templeData.temples[0].name;

    }