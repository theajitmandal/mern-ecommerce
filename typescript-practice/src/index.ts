// for simple testing purpose
// const greet = (user: string): string => {
//   return `Hello, ${user}! TypeScript is running successfully.`;
// };

// console.log(greet("Developer"));

let isActive: boolean = true;
let hasPermission = false;

console.log(isActive)
console.log(hasPermission)

let firstName: string = 'Ram'
let lastName: string = 'Shyam'

let sentence: string = `He is ${firstName} + ${lastName}`
console.log(sentence)

// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

let v: any = true;
v = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(v); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

function processValue(value: unknown) {
  if (typeof value === 'string') {
    // value is now treated as string
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    // value is now treated as any[]
    console.log(value.length);
  }
}

function throwError(message: string): never {
  throw new Error(message);
}

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
