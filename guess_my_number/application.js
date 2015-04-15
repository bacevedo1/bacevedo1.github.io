$(document).ready(function(){
  var guess = 0; // starts program off by setting the guess to 0 
  var comp_integer = Math.floor(Math.random()*100); //program chooses random number from 0 to 100
  console.log(comp_integer);
    $('button').on('click', function(){ //when the player clicks on the 'guess' button
    $("#feedback").empty();
    guess = guess + 1;
    var play_guess = parseInt($('input').val());
    console.log(play_guess);
    //and compare this guess to the random number that the computer picked
    $("#guess_counter").empty();
    $("#guess_counter").append(guess);// we tried to update it but it didnt work...sorry
    if(play_guess===comp_integer){    //if the user guessed the correct number...
      $("#feedback").append("Correct!");
    }
    else if(play_guess>comp_integer){ //if the user guessed too high...
 $("#feedback").append("number too high!");
    }
    else
      //update the 'feedback' paragraph to tell them to guess lower
    //if the user guessed too low...
    $("#feedback").append("number too low!");
      //update the 'feedback' paragraph to tell them to guess higher
    $("#guess_counter").empty();
  });
});
