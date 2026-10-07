/*
    *** Learn TypeScript ***
        TypeScript is JavaScript with added syntax for types.
        TypeScript is developed and maintained by Microsoft.

    *** TypeScript Introduction ***
        TypeScript is JavaScript with added syntax for types.

    *** Why should I use TypeScript? ***
        JavaScript is a loosely typed language.
        It can be difficult to understand what types of data are being passed around in JavaScript.
        In JavaScript, function parameters and variables don't have any information!
        So developers need to look at documentation, or guess based on the implementation.
        TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
        For example, TypeScript will report an error when passing a string into a function that expects a number.

        JavaScript will not.

        TypeScript uses compile time type checking.
        Which means it checks if the specified types match before running the code, not while running the code.

    *** How do I use TypeScript? ***
        A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.

        The next section shows how to get the compiler setup for a local project.

        Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!
*/

/*
    *** Exercises ***

        1. Drag and drop the correct type for the text greeting variable.
            _____ = "Hello, TypeScript!";

            string      number          boolean         any
                                                                                                        -> string
        2. Complete the sentence:
                TypeScript allows developers to add _____ to JavaScript.
                                                                                                        -> types

        3. What is the main benefit of using TypeScript over JavaScript?

                Faster execution speed
                Smaller file sizes
                Static type-checking
                More browser compatibility

*/

/*

To start and run a modern TypeScript project, you need Node.js installed on your machine. A clean setup involves initializing a Node.js environment, configuring the TypeScript compiler (tsc), and writing automated scripts.
Here is the quickest step-by-step framework to get your project running.

Step 1: Initialize the Project

Open your terminal and run the following commands to create your project folder and set up the foundation:
bash
# Create and enter your project folder
mkdir my-ts-project && cd my-ts-project

# Initialize a standard package.json file
npm init -y
Use code with caution.

Step 2: Install Dependencies

Install TypeScript and the required utilities. We install them as local development dependencies (-D) to ensure consistency across different development machines.
bash
npm install -D typescript @types/node tsx
Use code with caution.
• typescript: The core TypeScript compiler (tsc).
• @types/node: Explicit type definitions for Node.js built-ins.
• tsx: A fast, modern execution tool to run .ts files instantly in development without manual compilation steps.

Step 3: Configure TypeScript

Generate a tsconfig.json file to manage how your code is transpiled into JavaScript:
bash
npx tsc --init
Use code with caution.
Open the newly created tsconfig.json file. Un-comment and update these core properties to create a clean, modern workflow:
json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
Use code with caution.
• rootDir: Specifies where your source code lives (src directory).
• outDir: Dictates where the compiled production-ready JavaScript goes (dist directory).
• strict: Enforces strict type-checking safety nets.

Step 4: Write Code

Create a src folder and drop an index.ts file inside it:
bash
mkdir src
touch src/index.ts
Use code with caution.
Add a quick block of TypeScript code to src/index.ts:
typescript
const greet = (user: string): string => {
  return `Hello, ${user}! TypeScript is running successfully.`;
};

console.log(greet("Developer"));
Use code with caution.

Step 5: Automate Run Scripts

Open your package.json file and overwrite the default "scripts" section to map out production and development paths:
json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
Use code with caution.

How to Run Your Project

Choose the script that matches your current workflow:
• For Active Development:bash
npm run dev
Use code with caution.
This leverages tsx watch to execute your TypeScript code instantly and auto-restarts every time you save a file change.
• To Compile for Production:bash
npm run build
Use code with caution.
This invokes the tsc compiler, turning your TypeScript files into standard JavaScript inside the dist/ directory.
• To Run the Production Build:bash
npm start
Use code with caution.
This executes the natively compiled JavaScript bundle directly through Node.js
*/