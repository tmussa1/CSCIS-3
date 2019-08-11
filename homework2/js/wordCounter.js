var textArea = document.getElementById("myWordsToCount");

textArea.onkeyup = function(){
    
    var textArray = textArea.value.split(" ");
    var wordCount = 0;

    //Extra credit part
    //Trims leading and trailing spaces leaving out only letters
    for(let i = 0; i < textArray.length; i++){
        if(textArray[i].trim()){
            wordCount++;
        }
    }

    //Display word count
    document.getElementById("wordcount").innerHTML = wordCount;
}
