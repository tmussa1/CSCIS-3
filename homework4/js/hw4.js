/*
Homework 4
By: Tofik Mussa
Submitted to : Laurence Bouthillier
*/
window.onload = function(){
    
    var transcript = document.getElementById("transcriptText");

    var wordsArray = eliminateSpace(transcript.innerHTML.split(" "));

    var transcriptButton = document.getElementById("divideTranscript");

    transcriptButton.addEventListener("click", function(){
        buildSpans(wordsArray, transcript);
        changeStyleOnMouseOver(transcript);
    })
    
}

//Highlight upon hovering over words
function changeStyleOnMouseOver(transcript){
    var childSpans = transcript.childNodes;

    for(let i = 0; i < childSpans.length; i++){
        childSpans[i].onmouseover= function(){
            childSpans[i].style.color = "green";
        }
    }
}

//Recreate the spans
function buildSpans(wordsArray, transcript){

    transcript.innerHTML = " ";

    for(let i = 0; i < wordsArray.length; i++){
        var span = document.createElement("span");
        span.append(wordsArray[i] + " ");
        span.setAttribute("id", "word" + i);
        transcript.append(span);
    }
}

//Eliminate white space
function eliminateSpace(wordSplit){
    
    var wordsArray = [];

    for(var i = 0; i < wordSplit.length; i++){
        if(wordSplit[i] != ""){
            wordsArray.push(wordSplit[i]);
        }
    }
    return wordsArray;
}
