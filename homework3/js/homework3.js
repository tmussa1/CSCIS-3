/* homework3.js 
By: Tofik Mussa
Submitted to: Dr. Laurence Bouthillier
*/
"use strict";

(function(){

    //Global array containing list of trips
    var listOfTrips = new Array();

    var button = document.getElementById("doit");
    button.onclick = function(){
      
        //Get flight details
        var flightInfo = document.getElementById("flightInfo").value;
        var hotelInfo = document.getElementById("hotelInfo").value;
        var destination = document.getElementById("destination").value;

        //Constructor
        function tripConstructor(fInfo, hInfo, dest){
            this.flightInfo = fInfo;
            this.hotelInfo = hInfo;
            this.destination = dest;
        }

        //Create object
        var newTrip = new tripConstructor(flightInfo, hotelInfo, destination);

        //Append to table
        writeRowToPage(newTrip)

        //Push to the global array
        listOfTrips.push(newTrip);

        //Save to local storage
        window.localStorage.setItem("trips", JSON.stringify(listOfTrips));
    }

    //Custom method for appending to table
    function writeRowToPage(dataObject) {

        var flightRow = document.getElementById("flightDiv");
        var flightPara = document.createElement("p");
        flightPara.append(dataObject.flightInfo);
        flightRow.append(flightPara);

        var hotelRow = document.getElementById("hotelDiv");
        var hotelPara = document.createElement("p");
        hotelPara.append(dataObject.hotelInfo);
        hotelRow.append(hotelPara);
        
        var destRow = document.getElementById("destDiv");
        var destPara = document.createElement("p");
        destPara.append(dataObject.destination);
        destRow.append(destPara);
        
    }


    //Display data in the table upon page loading
    window.onload = function(){
        
        var tripsRetrieved = JSON.parse(window.localStorage.getItem("trips"));

        for(let i = 0; i < tripsRetrieved.length; i++){
            
            writeRowToPage(tripsRetrieved[i]);

        }
    }

})();
