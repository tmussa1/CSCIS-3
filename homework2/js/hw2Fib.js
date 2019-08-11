/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 11 odd Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = fibonacciSum();
 }

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 11 odd fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 11 odd Fibonacci numbers
  */

 function fibonacciSum(){
  
  var fibonacciNumbers = new Array();
  var oddFibonacciNumbers = new Array();
  var count = 0;

  //Initial condition
  fibonacciNumbers[count] = 0;
  fibonacciNumbers[++count] = 1;
  oddFibonacciNumbers[0] = 1;

  //Iterate till we have 11 odd fibonacci numbers
  while(oddFibonacciNumbers.length < 11){
    
    count++;

    //Add two preceding values to get the next fibonacci number
    fibonacciNumbers[count] = fibonacciNumbers[count - 1] + fibonacciNumbers[count - 2];

    //If the next number is odd, push it to odd fibonacci array
    if(fibonacciNumbers[count] % 2 == 1){
        oddFibonacciNumbers.push(fibonacciNumbers[count]);
      }

    }

    //Sum up the odd fibonacci numbers
    return oddFibonacciNumbers.reduce((a, b ) => a + b , 0);
 }
