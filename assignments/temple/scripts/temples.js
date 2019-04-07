let templeRequest = new XMLHttpRequest();
let templeURLstring = "http//github/json/templedata.json";
templeRequest.open('GET' , templeURLstring, true);
templeRequest.send();




    templeRequest1.onload = function() {
    let templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);

    }