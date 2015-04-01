$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var comp_integer = Math.floor(Math.random()*100);
  $('button').on('click', function(){
    var play_guess = parseInt($('input').val());
    if (play_guess === comp_integer){
      console.log("You're Correct!"); //what happens if the guess is correct
    }
    else if (play_guess > comp_integer){ //if the user guessed too high...
      console.log("Guess Lower!");  //update the 'feedback' paragraph to tell them to guess lower 
    }
    else {
      console.log("Guess Higher!"); //update the 'feedback' paragraph to tell them to guess higher
    }
  });
});
