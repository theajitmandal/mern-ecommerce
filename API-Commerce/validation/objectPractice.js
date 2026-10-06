const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

delete person.age;

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
// Create an Object
const person2 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let text = person.name + "," + person.age + "," + person.city;


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person5 = {
  name: "John",
  hello: function() {
    return "Hello " + this.name;
  }
};

const person8 = {
  name: "Anna",
  hello: function() {
    return "Hello " + this.name;
  }
};

document.getElementById("demo").innerHTML = person1.hello();



let products = ["Laptop", "Mouse", "Keyboard"];

products.forEach(product => {
    console.log(product);
});


let highestStock = products[0];

products.forEach(product => {
    if (product.stock > highestStock.stock) {
        highestStock = product;
    }
});

console.log(highestStock);


let products1 = [
    { name: "Laptop", price: 50000, stock: 5 },
    { name: "Mouse", price: 1000, stock: 0 },
    { name: "Keyboard", price: 2000, stock: 3 },
    { name: "Monitor", price: 12000, stock: 2 },
    { name: "Webcam", price: 3000, stock: 0 }
];

products.forEach(product => {
    console.log(product.name);
});

products.forEach(product => {
    let status = product.stock > 0 ? "Available" : "Out of Stock";

    console.log(`${product.name} - ${status}`);
});

let products2 = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 3 }
];

products.forEach(product => {
    if (product.stock > 0) {
        console.log(`${product.name} - Available`);
    } else {
        console.log(`${product.name} - Out of Stock`);
    }
});


