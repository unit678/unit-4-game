//this is wehere the computer will select a number to begin the game

var randomNumber = 18 + Math.floor(Math.random() * 120);

//this id link will allow the number to show
$('#numberGuess').html(randomNumber);
console.log(randomNumber);
//the computer selects a number between 1 and all the variables for the game.
var blueCrystal = 1 + Math.floor(Math.random() * 10);
var redCrystal = 1 + Math.floor(Math.random() * 10);
var yellowCrystal = 1 + Math.floor(Math.random() * 10);
var greenCrystal = 1 + Math.floor(Math.random() * 10);
var wins = 0;
var losses = 0;
var score = 0;

$('#myScore').text(score);
$('#wins').text(wins);
$('#losses').text(losses);

//reset everything once you have won the game or loss

var reset = function () {
  score = 0;
  randomNumber = 18 + Math.floor(Math.random() * 120);
  blueCrystal = 1 + Math.floor(Math.random() * 10);
  redCrystal = 1 + Math.floor(Math.random() * 10);
  yellowCrystal = 1 + Math.floor(Math.random() * 10);
  greenCrystal = 1 + Math.floor(Math.random() * 10);
  console.log(randomNumber);
  $('#numberGuess').text(randomNumber);
  $('#myScore').text(score);
  $('#wins').text(wins);
  $('#losses').text(losses);
};


//the rules of the game when you are playing with the if and else statments.
var rules = function () {
  if (score == randomNumber) {
    wins++;
    $('#wins').text(wins);
    reset();
  } else if (score > randomNumber) {
    losses++;
    $('#losses').text(losses);
    reset();
  }
};

//all the crystals are here when they are pressed giving the random number.

$('#blue').on('click', function () {
  score = score + blueCrystal;
  console.log(score);
  $('#myScore').text(score);
  rules();
});

$('#red').on('click', function () {
  score = score + redCrystal;
  console.log(score);
  $('#myScore').text(score);
  rules();
});

$('#yellow').on('click', function () {
  score = score + yellowCrystal;
  console.log(score);
  $('#myScore').text(score);
  rules();
});

$('#green').on('click', function () {
  score = score + greenCrystal;
  console.log(score);
  $('#myScore').text(score);
  rules();
});

//the end
