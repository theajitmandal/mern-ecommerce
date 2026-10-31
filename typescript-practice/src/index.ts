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

let value: string | undefined | null = null;
value = 'hello';
value = undefined;

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log('No yard');
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500
};

printYardSize(home); // Prints 'No yard'

// Convert all properties to boolean
type Flags<T> = {
  [K in keyof T]: boolean;
};

interface User {
  id: number;
  name: string;
  email: string;
}

type UserFlags = Flags<User>;
// Equivalent to:
// {
//   id: boolean;
//   name: boolean;
//   email: boolean;
// }

type IsString<T> = T extends string ? true : false;

// Usage examples
type Result1 = IsString<string>; // true
type Result2 = IsString<number>; // false
type Result3 = IsString<"hello">; // true (literal types extend their base types)

// We can use this with variables too
let a: IsString<string>; // a has type 'true'
let b: IsString<number>; // b has type 'false'

type ToArray<T> = T extends any ? T[] : never;

// When used with a union type, it applies to each member of the union
type StringOrNumberArray = ToArray<string | number>;
// This becomes ToArray<string> | ToArray<number>
// Which becomes string[] | number[]

// We can also extract specific types from a union
type ExtractString<T> = T extends string ? T : never;
type StringsOnly = ExtractString<string | number | boolean | "hello">;
// Result: string | "hello"

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}

class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
    // Restore prototype chain
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

class DatabaseError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = 'DatabaseError';
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

// Usage
function validateUser(user: any) {
  if (!user.name) {
    throw new ValidationError('Name is required', 'name');
  }
  if (!user.email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
}

// Create a typed Promise that resolves to a string
const fetchGreeting = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Hello, TypeScript!");
      } else {
        reject(new Error("Failed to fetch greeting"));
      }
    }, 1000);
  });
};

// Using the Promise with proper type inference
fetchGreeting()
  .then((greeting) => {
    // TypeScript knows 'greeting' is a string
    console.log(greeting.toUpperCase());
  })
  .catch((error: Error) => {
    console.error("Error:", error.message);
  });

  // Define types for our API response
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

// Function that returns a Promise of User array
async function fetchUsers(): Promise<User[]> {
  console.log('Fetching users...');
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
  ];
}

// Async function to process users
async function processUsers() {
  try {
    // TypeScript knows users is User[]
    const users = await fetchUsers();
    console.log(`Fetched ${users.length} users`);

    // Type-safe property access
    const adminEmails = users
      .filter(user => user.role === 'admin')
      .map(user => user.email);

    console.log('Admin emails:', adminEmails);
    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to process users:', error.message);
    } else {
      console.error('An unknown error occurred');
    }
    throw error; // Re-throw to let caller handle
  }
}

// Execute the async function
processUsers()
  .then(users => console.log('Processing complete'))
  .catch(err => console.error('Processing failed:', err));

  interface Product {
  id: number;
  name: string;
  price: number;
}

async function fetchProduct(id: number): Promise<Product> {
  console.log(`Fetching product ${id}...`);
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
  return { id, name: `Product ${id}`, price: Math.floor(Math.random() * 100) };
}

async function fetchMultipleProducts() {
  try {
    // Start all fetches in parallel
    const [product1, product2, product3] = await Promise.all([
      fetchProduct(1),
      fetchProduct(2),
      fetchProduct(3)
    ]);

    const total = [product1, product2, product3]
      .reduce((sum, product) => sum + product.price, 0);
    console.log(`Total price: $${total.toFixed(2)}`);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchMultipleProducts();

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}

class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
    // Restore prototype chain
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

class DatabaseError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = 'DatabaseError';
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

// Usage
function validateUser(user: any) {
  if (!user.name) {
    throw new ValidationError('Name is required', 'name');
  }
  if (!user.email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
}

// Type guards
function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record"">).message === 'string'
  );
}

function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError;
}

// Usage in catch block
try {
  validateUser({});
} catch (error: unknown) {
  if (isValidationError(error)) {
    console.error(`Validation error in ${error.field}: ${error.message}`);
  } else if (isErrorWithMessage(error)) {
    console.error('An error occurred:', error.message);
  } else {
    console.error('An unknown error occurred');
  }
}