// for simple testing purpose
// const greet = (user: string): string => {
//   return `Hello, ${user}! TypeScript is running successfully.`;
// };

// console.log(greet("Developer"));

// let isActive: boolean = true;
// let hasPermission = false;

// console.log(isActive)
// console.log(hasPermission)

// let firstName: string = 'Ram'
// let lastName: string = 'Shyam'

// let sentence: string = `He is ${firstName} + ${lastName}`
// console.log(sentence)

// // let u = true;
// // u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// // Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// let v: any = true;
// v = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(v); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// function processValue(value: unknown) {
//   if (typeof value === 'string') {
//     // value is now treated as string
//     console.log(value.toUpperCase());
//   } else if (Array.isArray(value)) {
//     // value is now treated as any[]
//     console.log(value.length);
//   }
// }

// function throwError(message: string): never {
//   throw new Error(message);
// }

// type Shape = Circle | Square | Triangle;

// function getArea(shape: Shape): number {
//   switch (shape.kind) {
//     case 'circle':
//       return Math.PI * shape.radius ** 2;
//     case 'square':
//       return shape.sideLength ** 2;
//     default:
//       // TypeScript knows this should never happen
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }

// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// const names: string[] = [];
// names.push("Dylan"); // no error
// // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4); // no error
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error

// const graph: [x: number, y: number] = [55.2, 41.3];

// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;

// const car2: { type: string, model: string, year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009
// };

// const car3 = {
//   type: "Toyota",
// };
// car3.type = "Ford"; // no error
// car3.type = 2; // Error: Type 'number' is not assignable to type 'string'.


// const car1 = {
//   type: "Toyota",
// };
// car1.type = "Ford"; // no error
// car1.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// enum CardinalDirections {
//                 North,
//                 East,
//                 South,
//                 West
// };
                        
// let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
// console.log(currentDirection);

// enum CardinalDirections {
//                 North=1,
//                 East,
//                 South,
//                 West
// };
                        
// let currentDirection = CardinalDirections.East;

// console.log(currentDirection);

let ourTuple: [number, boolean, string];

ourTuple = [5, false, 'Coding God was here'];

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
console.log(ourTuple);