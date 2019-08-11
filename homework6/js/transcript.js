/*
Homework 6
By: Tofik Mussa
Submitted to: Dr. Laurence
*/
window.onload = function(){

  var player = jwplayer("playerDiv").setup({
                   file: "http://learningapi.com/cscie3/examples/week13/nasa-spinoffs.mp4",
                   height: 360,
                   width: 640,
                   controls:true,
               });

    var vt = Vue.component('transcript', {
        data: function(){
         return {
           transcript :  [
                 {
                    "start": "17.869",
                    "dur": "3.82",
                    "text": "Hey this is Dwayne Johnson. While playing astronaut Chuck Baker in the film Planet"
                 },
                 {
                    "start": "21.689",
                    "dur": "0.701",
                    "text": "51"
                 },
                 {
                    "start": "22.39",
                    "dur": "3.56",
                    "text": "I gained a lot of respect for our nation&#39;s space program. NASA makes new"
                 },
                 {
                    "start": "25.95",
                    "dur": "1.35",
                    "text": "discoveries about our universe"
                 },
                 {
                    "start": "27.3",
                    "dur": "4.11",
                    "text": "every day but one of the coolest things about nasa is the technologies that"
                 },
                 {
                    "start": "31.41",
                    "dur": "1.55",
                    "text": "it creates for exploring space"
                 },
                 {
                    "start": "32.96",
                    "dur": "3.739",
                    "text": "are also improving life here on earth. NASA technologies can be found"
                 },
                 {
                    "start": "36.699",
                    "dur": "0.621",
                    "text": "everywhere"
                 },
                 {
                    "start": "37.32",
                    "dur": "3.71",
                    "text": "from the soles of the shoes to the freeze dried fruit here cereal. These"
                 },
                 {
                    "start": "41.03",
                    "dur": "1.58",
                    "text": "technologies, called spinoffs,"
                 },
                 {
                    "start": "42.61",
                    "dur": "4.36",
                    "text": "help doctors heal patients with heart problems, scientists track rare animals, and"
                 },
                 {
                    "start": "46.97",
                    "dur": "2.409",
                    "text": "firefighters and police officers and soldiers"
                 },
                 {
                    "start": "49.379",
                    "dur": "4.45",
                    "text": "stay safe on the job. Space technology has even helped Olympic swimmers win"
                 },
                 {
                    "start": "53.829",
                    "dur": "0.711",
                    "text": "gold medals."
                 },
                 {
                    "start": "54.54",
                    "dur": "3.63",
                    "text": "All of these the spinoffs began as innovations for nasa missions"
                 },
                 {
                    "start": "58.17",
                    "dur": "3.86",
                    "text": "like the space shuttle, the Hubble Space Telescope, and the International Space"
                 },
                 {
                    "start": "62.03",
                    "dur": "3.18",
                    "text": "Station. You don&#39;t have to be an astronaut to trace"
                 },
                 {
                    "start": "65.21",
                    "dur": "3.47",
                    "text": "space back to where you live. Visit nasa.gov"
                 },
                 {
                    "start": "68.68",
                    "dur": "3.549",
                    "text": "to learn more about how nasa technologies play a role in your life."
                 },
                 {
                    "start": "72.229",
                    "dur": "3.331",
                    "text": "After all, there&#39;s no space like home"
                 }
              ]
            };
      },

      template: '<div><span v-for="phrase in transcript"  \
                       class="words"                 \
                       v-bind:data-start="phrase.start"   \
                       v-bind:data-dur="phrase.dur">      \
                  {{ phrase.text }}                            \
                </span></div>' ,

      mounted : function(){

        $(".words").click(function(evt){

            player.seek(parseInt(this.attributes[0].value)); //Seek to current position when clicked
       });

       player.onTime(function(evt){
     
         var time = parseInt(evt.position); //Get the current position as an integer
       
         $('.words').each(function(){
            
            //The interval is between the least largest and the greatest smallest
            var intervalBegin = parseInt(this.attributes[0].value);
            var intervalEnd = parseInt(this.attributes[0].value) + 
                              parseInt(this.attributes[1].value);
               
               if(intervalEnd > time && intervalBegin <= time){
                  $(this).addClass("hilite"); //highlight it
               } 
               else {
                  $(this).removeClass("hilite"); //remove the highlight
               }
         });

       });
     } 
   }); 

    var v = new Vue({
        el: "#videoTranscript"
      });

};
