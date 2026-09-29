// Create an Array
var cars = ['BMW', 'Volvo', 'Mini'];

// Iterate over the Array values
var text = "";
for (let x of cars) {
    text += x + ",";
}

// Create an Array
var cars = ['BMW', 'Volvo', 'Mini'];

// Iterate over the Array values
var text = "";
for (let x in cars) {
    text += x + ",";
}

// Create an Array
const cars = ['BMW', 'Volvo', 'Mini'];

// Iterate over the Array values
let text = "";
for (let x in cars) {
    text += cars[x]
}