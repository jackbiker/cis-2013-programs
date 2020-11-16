//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	if(intCount < 2 || intCount > 100 || isNaN(intCount)) {
        alert("ERROR; Please enter a NUMBER that is between 100 and 2");
        $("total_fib").value = "";
        $("output").value = "";
    } else {
    var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers
    if (intCount === 2){ //if statement that considers the user chose 2
        stringOutput = "0 1"; 
        $("output").value = stringOutput;//pushed output to the DOM
    } else {
        while( intCount > 2) {
            k = i + j;//adds the last two fibonacci numbers to find the next in the series
            i = j;//sets i to j so that k will find the correct number
            j = k; //sets j equal to k so k finds the correct number
            stringOutput = stringOutput + " " + k + " "; //sets stringOutput
            $("output").value = stringOutput; // pushed the output to the DOM
            intCount--; //lowers inCount so the loop will actually end
        }
    }
    }
};
// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};