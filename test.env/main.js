// function sayHello(arg1, arg2, arg3) {
//     console.log(arg1, arg2, arg3)
// }
// sayHello(12, 13, "marvelous")

// var i = 0
// while (i < 5) {
//     alert(i)
//     i++
// }

// console.log(myNewArray[0]);

// myNewArray.push(5);
// let five = myNewArray.pop();

// myNewArray.unshift(0);
// let zero = myNewArray.shift();

// let everythingFromIndexTwo = myNewArray.slice(2, 4);
// console.log(everythingFromIndexTwo);

// let login = true;

// let userName = prompt("Username please?").toUpperCase();
// let pass = prompt("Password please?").toUpperCase();

// if (pass === "PASSWORD" && userName === "DAVID") {
//     alert("Welcome back " + userName)
// } else if (pass === "PASSWORD" || userName === "DAVID") {
//     alert("You got one login correct");
// } else {
//     alert("Wrong");
// }


// for (let i = 0; i < 5; i++) {
//     alert(i);
// }

// while (login) {

//     let userName = prompt("Username please?").toUpperCase();
//     let pass = prompt("Password please?").toUpperCase();

//     while (pass === "PASSWORD" && userName === "DAVID") {
//         alert("Welcome back.");
//         break;
//     }

//     break;

// }

function myFunc() {
    for (let userName = prompt("Username please?").toUpperCase(); userName === "KELLY"; userName = false) {
        alert("Welcome");
    }
};