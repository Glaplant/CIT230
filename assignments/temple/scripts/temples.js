let templeRequest = new XMLHttpRequest();
let templeURLstring = "https://glaplant.github.io/CIT230/assignments/temple/json/templedata.json";
templeRequest.open('GET' , templeURLstring, true);
templeRequest.send();




    templeRequest.onload = function() {
    let templeData = JSON.parse(templeRequest.responseText);
    console.log(templeData);


    document.getElementById("name1").innerHTML= templeData.temples[0].name;
    document.getElementById("name2").innerHTML= templeData.temples[1].name;
    document.getElementById("name3").innerHTML= templeData.temples[2].name;
    document.getElementById("name4").innerHTML= templeData.temples[3].name;


    }