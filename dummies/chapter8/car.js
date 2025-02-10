// var one = 1;

// var two = "string";

// var three = true;

// console.log(typeof three)

// var cakes = {
//     type1: "chocolate",
//     type2: "vanilla",
//     type3: "carrot",
//     type4: "caramel"
// };
// console.log(cakes)

var dreamCar = {
    make: "Audi",
    model: "R8",
    color: "wheat",
    year: 2023,
    bodyStyle: "Luxury Car",
    price: 5000
};

document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("pricetag").innerHTML = dreamCar.price + ".";
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model + "."
document.getElementById("body").style.backgroundColor = dreamCar.color
