// for simple testing purpose
// const greet = (user: string): string => {
//   return `Hello, ${user}! TypeScript is running successfully.`;
// };

// console.log(greet("Developer"));

let isActive: boolean = true;
let hasPermission = false;

console.log(isActive)
console.log(hasPermission)

// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

let v: any = true;
v = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(v); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.