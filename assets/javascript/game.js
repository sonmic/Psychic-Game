let answer;
// computer picks a random letter
let comGuess = function() {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    answer = letters[Math.floor(Math.random() * letters.length)];
    console.log(answer);
};
// logs the computer picked letter
comGuess();
let win = 0;
document.getElementById("wins").innerText = win;
let guessLeft = 10;
document.getElementById("guessleft").innerText = guessLeft;
let loss = 0;
document.getElementById("losses").innerText = loss;

//when the key is pressed
addEventListener("keypress", function(event) {
    let key = String.fromCharCode(event.charCode);
    console.log(key);
    document.getElementById("yourguess").innerText += key;

    //the += replaces document.getElementById("yourguess").innerText = document.getElementById("yourguess").innerText + key

    if (answer === key) {
        document.getElementById("wins").innerText = ++win;
        reset();
    } else {
        document.getElementById("guessleft").innerText = --guessLeft;
        if (guessLeft < 1) {
            document.getElementById("losses").innerText = ++loss;
            reset();
        }
    }

});

function reset() {
    guessLeft = 10;
    document.getElementById("guessleft").innerText = guessLeft;
    document.getElementById("yourguess").innerText = "";
    comGuess();
}