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

     var templeNum = [t];
    
    switch (templeNum){

         case 0 :
            
              for(h=0;h < templeData.temples[t].history.length; h++){
                   historyNum =[h];
                   document.getElementByClassName("history1").innerHTML = templeData.temples[t].history[historyNum];
            }

              for(s=0;s < templeData.temples[t].services.length; s++){
                    servicesNum= [s];
                    document.getElementByClassName("services1").innerHTML=templeData.temples[t].services[servicesNum];
              }

              for(o=0;o < templeData.temples[t].ordinances.length; o++){
                   ordinancesNum = [o];
                   document.getElementByClassName("ordinances1").innerHTML=templeData.temples[t].ordinances[ordinancesNum];
                }

              for(c=0;c < templeData.temples[t].closures.length; c++){
                    closuresNum = [c];
                    document.getElementByClassName("closures1").innerHTML= templeData.temples[t].closures[closuresNum];

              }

              for(e=0; e < templeData.temples[t].schedule.length; e++){

                scheduleNum = [e];
                document.getElementByClassName("schedule1").innerHTML= "Endowment Session" + templeData.temples[t].schedule[scheduleNum];
              }
    
        case 1 :

            for(h=0;h < templeData.temples[t].history.length; h++){
                  historyNum =[h];
                  document.getElementByClassName("history2").innerHTML = templeData.temples[t].history[historyNum];
              }

            for(s=0;s < templeData.temples[t].services.length; s++){
                  servicesNum= [s];
                  document.getElementByClassName("services2").innerHTML=templeArrays.temples[t].services[servicesNum];
              }

           for(o=0;o < templeData.temples[t].ordinances.length; o++){
                  ordinancesNum = [o];
                  document.getElementByClassName("ordinances2").innerHTML=templeArrays.temples[t].ordinances[ordinancesNum];
              }

            for(c=0;c < templeData.temples[t].closures.length; c++){
                  closuresNum = [c];
                  document.getElementByClassName("closures2").innerHTML= templeArrays.temples[t].closures[closuresNum];

              }

           for(e=0; e < templeData.temples[t].schedule.length; e++){
                  scheduleNum = [e];
                  document.getElementByClassName("schedule2").innerHTML= "Endowment Session" + templeData.temples[t].schedule[scheduleNum];
              }
            
    
    
        case 2 :

            
              for(h=0;h < templeData.temples[templeNum].history.length; h++){
                  historyNum =[h];
                  document.getElementByClassName("history3").innerHTML = templeData.temples[templeNum].history[historyNum];
                  }

              for(s=0;s < templeData.temples[templeNum].services.length; s++){
                  servicesNum= [s];
                  document.getElementByClassName("services3").innerHTML=templeArrays.temples[templeNum].services[servicesNum];
                  }

              for(o=0;o < templeData.temples[templeNum].ordinances.length; o++){
                  ordinancesNum = [o];
                  document.getElementByClassName("ordinances3").innerHTML=templeArrays.temples[templeNum].ordinances[ordinancesNum];
                  }

              for(c=0;c < templeData.temples[t].closures.length; c++){
                  closuresNum = [c];
                  document.getElementByClassName("closures3").innerHTML= templeArrays.temples[t].closures[closuresNum];
                   }
              for(e=0; e < templeDatas.temples[t].schedule.length; e++){
                   scheduleNum = [e];
                   document.getElementByClassName("schedule3").innerHTML= "Endowment Session" + templeArrays.temples[t].schedule[scheduleNum];
                  }
    
        case 3 :
         
              for(h=0;h < templeData.temples[t].history.length; h++){
                  historyNum =[h];
                  document.getElementByClassName("history4").innerHTML = templeData.temples[t].history[historyNum];
                 }
              for(s=0;s < templeData.temples[t].services.length; s++){
                servicesNum= [s];
                document.getElementByClassName("services4").innerHTML=templeData.temples[t].services[servicesNum];
                 }
             for(o=0;o < templeData.temples[t].ordinances.length; o++){
                ordinancesNum = [o];
                document.getElementByClassName("ordinances4").innerHTML=templeData.temples[t].ordinances[ordinancesNum];
                }
            for(c=0;c < templeData.temples[t].closures.length; c++){
                closuresNum = [c];
                document.getElementByClassName("closures4").innerHTML= templeData.temples[t].closures[closuresNum];
                }
            for(e=0; e < templeData.temples[t].schedule.length; e++){
                scheduleNum = [e];
                document.getElementByClassName("schedule4").innerHTML= "Endowment Session" + templeData.temples[t].schedule[scheduleNum];
                }
            
        }
    }
}



