// //Listing 17.1
// for (var i = 10; i > 0; i--) {
//     alert(i);
// }
// alert("Blast Off!");

// //Listing 17.2
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];

// for (var i = 0; i < myFriends.length; i++){
//  alert(myFriends[i] + " is my friend.");
// }

// //Listing 17.3
// alert(Math.random());

// //Listing 17.4
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// var randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

// Listing 17.5
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

var maxTemp = 100;
var minTemp = 0;
generateWeather();

function generateWeather() {
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" +
            weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + 
            tempToday + " degrees.</div>";
    }
}

// let classMatesNames = ["Sindy", "John", "Rex", "Sandra", "Gina", "Georgia"]
// for (var i = 0; i < classMatesNames.length; i++) {
//     prompt(classMatesNames[i])
//     console.log(classMatesNames)
// }


// let multiplesOfTen = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let age = parseInt(prompt("Enter your age:"));

// for (let i = 0; i < multiplesOfTen.length; i++) {
//     if (age === multiplesOfTen[i]) {
//         if (age === 10) {
//             console.log("You are a small boy.");
//         } else if (age <= 30) {
//             console.log("You are a grown man.");
//         } else if (age <= 60) {
//             console.log("Oupa!");
//         } else {
//             console.log("Go to an old age home.");
//         }
//         break; // Exit the loop once a match is found
//     }
// }

// if (!multiplesOfTen.includes(age)) {
//     console.log("Please enter a multiple of 10.");
// }

// let multiplesOfTen = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let age = parseInt(prompt("Enter your age:"));
// let i = 0;
// let found = false;

// while (i < multiplesOfTen.length) {
//     if (age === multiplesOfTen[i]) {
//         found = true;
//         if (age === 10) {
//             console.log("You are a small boy.");
//         } else if (age <= 30) {
//             console.log("You are a grown man.");
//         } else if (age <= 60) {
//             console.log("Oupa!");
//         } else {
//             console.log("Go to an old age home.");
//         }
//         break; // Exit loop once a match is found
//     }
//     i++;
// }

// if (!found) {
//     console.log("Please enter a multiple of 10.");
// }

// let count = 0;
// while (count < 10) {
//     console.log("Count is:", count);
//     count++; 
// }

// let army = 0
// while (army < 10) {
//     console.log("hey army: " +army)
//     army++;
// }