

var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var randomLetter = letter[Math.floor(Math.random() * letter.length)];
// console.log(randomLetter);

var updateLetterToGuess = function() {
  this.letterToGuess = this.letter[Math.floor(Math.random() * this.letter.length)];

  console.log(letterToGuess);
};

updateLetterToGuess();
//lines 7-13; function that makes computer randomly generate a number//

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessedLetters = [];

var initGame = function(){
	guessesLeft=5;
	guessedLetters=[];
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
	document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + guessedLetters;
};

initGame();

	onkeyup=function(event){
	var playerGuess = event.key.toLowerCase();
	guessesLeft--;
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
	/*This will dynamically update guesses left on the HTML page"*/


	guessedLetters.push(playerGuess);
	console.log(guessedLetters);
	/*push will update the guessedLetters array - place new entry at the end*/
	document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + guessedLetters;
	/*This will dynamically update guesses so far on the HTML page"*/

	if (guessesLeft > 0 && playerGuess == letterToGuess){
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		initGame();
		updateLetterToGuess();
	}
	if (guessesLeft == 0){
		initGame();
		updateLetterToGuess(),
		losses++;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		
	}
	}


















