/*
    *** TypeScript Type Aliases and Interfaces ***
        TypeScript allows types to be defined separately from the variables that use them.
        Aliases and Interfaces allows types to be easily shared between different variables/objects.

    *** Type Aliases ***
        Type Aliases allow defining types with a custom name (an Alias).
        Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

    Example:
        type CarYear = number
        type CarType = string
        type CarModel = string

        type Car = {
            year: CarYear,
            type: CarType,
            model: CarModel
        }

        const carYear: CarYear = 2001
        const carType: CarType = "Toyota"
        const carModel: CarModel = "Corolla"

        const car: Car = {
            year: carYear,
            type: carType,
            model: carModel
        };

    Example: Union and Intersection Types:
        type Animal = { name: string };
        type Bear = Animal & { honey: boolean };
        const bear: Bear = { name: "Winnie", honey: true };

        type Status = "success" | "error";
        let response: Status = "success";
*/