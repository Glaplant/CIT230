let templeRequest = new XMLHttpRequest();
let templeURLstring = "https://glaplant.github.io/CIT230/assignments/temple/json/templedata.json";
templeRequest.open('GET' , templeURLstring, true);
templeRequest.send();




    templeRequest.onload = function () {
    let templeData = JSON.parse(templeRequest.responseText);
    

                       /*--Temple Name Headers----*/
    document.getElementById("name1").innerHTML= templeData.temples[1].name;
    document.getElementById("name2").innerHTML= templeData.temples[0].name;
    document.getElementById("name3").innerHTML= templeData.temples[2].name;
    document.getElementById("name4").innerHTML= templeData.temples[3].name;


                         /*--Temple Phone----*/

    document.getElementById("telephone1").innerHTML= templeData.temples[1].telephone;
    document.getElementById("telephone2").innerHTML= templeData.temples[0].telephone;
    document.getElementById("telephone3").innerHTML= templeData.temples[2].telephone;
    document.getElementById("telephone4").innerHTML= templeData.temples[3].telephone; 
  

   var historyNum;
   var servicesNum;
   var ordinancesNum;
   var closuresNum;
   var scheduleNum;

    for(t=0; t < templeData.temples.length; t++){
    
    switch (t){

         case 0 :
         for(h=0;h < templeData.temples[t].history.length; h++){
            document.getElementsByClassName("history1").innerHTML = templeData.temples[t].history[h];
        }

      for(s=0;s < templeData.temples[t].services.length; s++){
            document.getElementsByClassName("services1").innerHTML=templeData.temples[t].services[s];
        }

     for(o=0;o < templeData.temples[t].ordinances.length; o++){
            document.getElementsByClassName("ordinances1").innerHTML=templeData.temples[t].ordinances[o];
        }

      for(c=0;c < templeData.temples[t].closures.length; c++){
            document.getElementsByClassName("closures1").innerHTML= templeData.temples[t].closures[c];

        }

     for(e=0; e < templeData.temples[t].schedule.length; e++){
            document.getElementsByClassName("schedule1").innerHTML= "Endowment Session" + templeData.temples[t].schedule[e];
        }
    
        case 1 :

            for(h=0;h < templeData.temples[t].history.length; h++){
                  document.getElementsByClassName("history2").innerHTML = templeData.temples[t].history[h];
              }

            for(s=0;s < templeData.temples[t].services.length; s++){
                  document.getElementsByClassName("services2").innerHTML=templeData.temples[t].services[s];
              }

           for(o=0;o < templeData.temples[t].ordinances.length; o++){
                  document.getElementsByClassName("ordinances2").innerHTML=templeData.temples[t].ordinances[o];
              }

            for(c=0;c < templeData.temples[t].closures.length; c++){
                  document.getElementsByClassName("closures2").innerHTML= templeData.temples[t].closures[c];

              }

           for(e=0; e < templeData.temples[t].schedule.length; e++){
                  document.getElementsByClassName("schedule2").innerHTML= "Endowment Session" + templeData.temples[t].schedule[e];
              }
            
    
    
        case 2 :

        for(h=0;h < templeData.temples[t].history.length; h++){
            document.getElementsByClassName("history3").innerHTML = templeData.temples[t].history[h];
        }

      for(s=0;s < templeData.temples[t].services.length; s++){
            document.getElementsByClassName("services3").innerHTML=templeData.temples[t].services[s];
        }

     for(o=0;o < templeData.temples[t].ordinances.length; o++){
            document.getElementsByClassName("ordinances3").innerHTML=templeData.temples[t].ordinances[o];
        }

      for(c=0;c < templeData.temples[t].closures.length; c++){
            document.getElementsByClassName("closures3").innerHTML= templeData.temples[t].closures[c];

        }

     for(e=0; e < templeData.temples[t].schedule.length; e++){
            document.getElementsByClassName("schedule3").innerHTML= "Endowment Session" + templeData.temples[t].schedule[e];
        }
    
        case 3 :
         
        for(h=0;h < templeData.temples[t].history.length; h++){
            document.getElementsByClassName("history4").innerHTML = templeData.temples[t].history[h];
        }

      for(s=0;s < templeData.temples[t].services.length; s++){
            document.getElementsByClassName("services4").innerHTML=templeData.temples[t].services[s];
        }

     for(o=0;o < templeData.temples[t].ordinances.length; o++){
            document.getElementsByClassName("ordinances4").innerHTML=templeData.temples[t].ordinances[o];
        }

      for(c=0;c < templeData.temples[t].closures.length; c++){
            document.getElementsByClassName("closures4").innerHTML= templeData.temples[t].closures[c];

        }

     for(e=0; e < templeData.temples[t].schedule.length; e++){
            document.getElementsByClassName("schedule4").innerHTML= "Endowment Session" + templeData.temples[t].schedule[e];
        }
            
        }
    }
}



