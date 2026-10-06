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

let mostExpensive = products[0];

products.forEach(product => {
    if (product.price > mostExpensive.price) {
        mostExpensive = product;
    }
});

console.log(mostExpensive);


let outOfStock = 0;

products.forEach(product => {
    if (product.stock === 0) {
        outOfStock++;
    }
});

console.log(outOfStock);


let expensiveProducts = products.filter(product => product.price > 5000);

expensiveProducts.forEach(product => {
    console.log(product.name);
});