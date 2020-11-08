//lets name some variables!!
var intMax, intMin, intRandom, intGuess, intCount, intRedo;

do{
intMin = -1; //parseInt(prompt("Please enter the minimum number for your range (no lower than 1)")); //yo tell me what your min is gonna be

do{ //to make sure that the maximum number for the range is a number and one we like ;)
  intMin = parseInt(prompt("Please enter minimum number in your range, it must greater than zero"));
} while( isNaN(intMin) || intMin <= 0 );

while ( intMin <= 0 || intMin == isNaN) { //lets make sure youre putting in nice happy numbers
  intMin = parseInt(prompt("Please enter minimum number in your range (no lower than 0)"));
}

do{ //to make sure that the maximum number for the range is a number and one we like ;)
  intMax = parseInt(prompt("Please enter maximum number in your range, it must be at least 2 greater than your lowest number"));
} while( isNaN(intMax) || intMax < intMin + 2 ); 


intGuess = -10;

do{ //lets make sure the guess in within our range
intGuess = parseInt(prompt("What is your guess of the number between " + intMin + " and " + intMax));
} while(isNaN(intGuess) || intGuess > intMax || intGuess < intMin); 



intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);

// set the loop counter
intCount = 1;


while(intGuess != intRandom)
{
  if( intGuess < intRandom)
  {
    alert("guess is too low, try again");
    intGuess = -10;//i have to use a save number under 0 to force my do while loop to execute. I'm not sure how else to make the loop execute without prompting the user two times for the same thing
        do
        { //lets make sure the guess in within our range
        intGuess = parseInt(prompt("What is your guess of the number between " + intMin + " and " + intMax));
        } while(isNaN(intGuess) || intGuess > intMax || intGuess < intMin); 
  } else {
    alert("guess is too high, try again");
    intGuess = -10; //once again, i have to use a save number under 0 to force my do while loop to execute
        do
        { //lets make sure the guess in within our range
        intGuess = parseInt(prompt("What is your guess of the number between " + intMin + " and " + intMax));
        } while(isNaN(intGuess) || intGuess > intMax || intGuess < intMin);
  }
  intCount ++; //adding to the count for the conclusion
}

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts, for " + intCount+ " attempts you win " + ((intMax - intMin + 1) - intCount ) + " points! Congradulations user!");

            intRedo = parseInt(prompt("Since my game was so dang great, would you like to play again? Enter 1 for yes, or 2 for no. If you don't want to play again, you're kinda lame..."));

    
} while (intRedo == 1);