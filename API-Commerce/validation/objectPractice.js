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