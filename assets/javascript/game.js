var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterGuessed = [];

document.onkeypress = function (event) {
    var userGuess = event.key;
    letterGuessed.push(userGuess);
    console.log(letterGuessed);
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userGuess === computerGuess) {
        wins++;
        letterGuessed.length = 0;
        guessesLeft = 9;
    } else{
        guessesLeft--;
        if (guessesLeft == 0){
            losses++;
            letterGuessed.length = 0;
            guessesLeft = 9;
        }
    }
    var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of</p>" + "<br>" + "<p>Wins: " +wins + "</p>" + "<br>" + "<p>Losses: " +losses + "</p>" + "<br>" +"<p>Guesses Left: " +guessesLeft + "</p>" + "<br>" +"<p>Your Guesses so far: " +letterGuessed +"</p>";
    document.getElementById("game").innerHTML = html;
}