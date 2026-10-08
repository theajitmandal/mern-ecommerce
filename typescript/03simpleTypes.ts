/*
    *** TypeScript Simple Types ***
        TypeScript enhances JavaScript by adding static types.

    *** JavaScript and TypeScript Primitives ***
        The most basic types in TypeScript are called primitives.

        These types form the building blocks of more complex types in your applications.
        TypeScript includes all JavaScript primitives plus additional type features.

        Here are the five primitive types you'll use most often:

        1. Boolean
            Represents true/false values.
            Used for flags, toggles, and conditions.

            Example:
                let isActive: boolean = true;
                let hasPermission = false; // TypeScript infers 'boolean' type

        2. Number:
            Represents both integers and floating-point numbers.
            TypeScript uses the same number type for all numeric values.

            Example
                let decimal: number = 6;
                let hex: number = 0xf00d;       // Hexadecimal
                let binary: number = 0b1010;     // Binary
                let octal: number = 0o744;      // Octal
                let float: number = 3.14;      // Floating point

        3. String
            Represents text data.
            Can use single quotes ('), double quotes ("), or backticks (`) for template literals.

            Example:
                let color: string = "blue";
                let fullName: string = 'John Doe';
                let age: number = 30;
                let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

        4. BigInt (ES2020+)
            Represents whole numbers larger than 2(power 53) - 1.

            Example:
                const hugeNumber = BigInt(9007199254740991);

        5. Symbol
            Creates unique identifiers.
            Useful for creating unique property keys and constants.

            Example:
                const uniqueKey: symbol = Symbol('description');
                const obj = {
                    [uniqueKey]: 'This is a unique property'
                };
                console.log(obj[uniqueKey]); // "This is a unique property"

*/

/* 
    *** Exercises ***
    1. Drag and drop the correct type for a text variable in TypeScript.

        let name: ______  = "John";

        number, string, boolean, any
                                                                                                    -> string
                                                                                                    
    2. Fill in the blank to specify a boolean type:

        let isActive: ______ = true;
                                                                                                    -> boolean

    3. Which statement correctly defines a number variable in TypeScript?

        let age: number = 25;
        let age = number(25);
        var age Number = 25;
        const age = Number(25);
                                                                                    -> let age: number = 25;




*/