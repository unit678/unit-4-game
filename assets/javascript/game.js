//this is wehere the computer will select a number to begin the game

var randomNumber = 18 + Math.floor(Math.random() * 120);

//this id link will allow the number to show
$('#numGuess').html(randomNumber);
console.log(randomNumber);
//the computer selects a number between 1 and all the variables for the game.
var blueCrystal = 1 + Math.floor(Math.random() * 10);
var redCrystal = 1 + Math.floor(Math.random() * 10);
var yellowCrystal = 1 + Math.floor(Math.random() * 10);
var greenCrystal = 1 + Math.floor(Math.random() * 10);

var scoreTracker = 0;
var wins = 0;
var losses = 0;
$('#yourScore').text(scoreTracker);
$('#wins').text(wins);
$('#losses').text(losses);

//reset everything once you have won the game or loss

var reset = function () {
  scoreTracker = 0;
  randomNumber = 18 + Math.floor(Math.random() * 120);
  blueCrystal = 1 + Math.floor(Math.random() * 10);
  redCrystal = 1 + Math.floor(Math.random() * 10);
  yellowCrystal = 1 + Math.floor(Math.random() * 10);
  greenCrystal = 1 + Math.floor(Math.random() * 10);
  console.log(randomNumber);
  $('#numGuess').text(randomNumber);
  $('#yourScore').text(scoreTracker);
  $('#wins').text(wins);
  $('#losses').text(losses);
};


//the rules of the game when you are playing with the if and else statments.
var rules = function () {
  if (scoreTracker == randomNumber) {
    wins++;
    $('#wins').text(wins);
    reset();
  } else if (scoreTracker > randomNumber) {
    losses++;
    $('#losses').text(losses);
    reset();
  }
};

//all the crystals are here when they are pressed giving the random number.

$('#blue').on('click', function () {
  scoreTracker = scoreTracker + blueCrystal;
  console.log(scoreTracker);
  $('#yourScore').text(scoreTracker);
  rules();
});

$('#red').on('click', function () {
  scoreTracker = scoreTracker + redCrystal;
  console.log(scoreTracker);
  $('#yourScore').text(scoreTracker);
  rules();
});

$('#yellow').on('click', function () {
  scoreTracker = scoreTracker + yellowCrystal;
  console.log(scoreTracker);
  $('#yourScore').text(scoreTracker);
  rules();
});

$('#green').on('click', function () {
  scoreTracker = scoreTracker + greenCrystal;
  console.log(scoreTracker);
  $('#yourScore').text(scoreTracker);
  rules();
});

//the end
