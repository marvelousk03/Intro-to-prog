// let secret = Math.floor(Math.random() * 10) + 1;
// let guess;

// while ((guess = prompt("Guess a number between 0 and 10")) != secret) {
//     alert(guess < secret ? "Too low!" : "Too high!");
// }

// alert("Congratulations! You got it!");



// var secNumber = 7;

// while (true) {
//     let message = Number(prompt("What is the secrect number? Take a guess from 1 to 20."));

//     if (message === secNumber) {
//         alert("Lucky number 7! You guessed right");
//         break;
//     } else {
//         alert("You seem unlucky today. Try again.")
//     };
// };

var secNumber = Math.floor(Math.random() * 10) + 1;
var theNum = 0;
console.log(secNumber)
while (theNum != secNumber) {
    theNum = prompt("Guess a number from 1 to 10");
    if (theNum < secNumber) {
        alert("Too Low!");
    } else if (theNum > secNumber) {
        alert("Too High!")
    } else {
        break
    }
}
alert("Congratulations! You got it!")



// if (number < secret) {
//     alert("Incorrect, too low");
// } else if (number > secret) {
//     alert("Incorrect, too high");
// } else if (number === null) {
//     alert(" Please select a number");
// }
// else {
//     break
// }
// alert("Congratulations! You got it!")
