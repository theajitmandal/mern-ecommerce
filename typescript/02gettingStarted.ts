/*
    *** TypeScript Getting Started ***

    *** TypeScript Compiler ***
        TypeScript is transpiled into JavaScript using a compiler.
        TypeScript being converted into JavaScript means it runs anywhere that JavaScript runs!

    *** Installing the Compiler ***
        TypeScript has an official compiler which can be installed through npm.
        
        Learn more about npm, and how to get started here: What is npm?

        Within your npm project, run the following command to install the compiler:

        Example:
            npm install typescript --save-dev

        Which should give you an output similar to:

        Example:
            added 1 package, and audited 2 packages in 2s
            found 0 vulnerabilities

        The compiler is installed in the node_modules directory and can be run with: npx tsc.

        Example:
            npx tsc

        Which should give you an output similar to:

        Example:
            Version 4.5.5
            tsc: The TypeScript Compiler - Version 4.5.5

        Followed by a list of all the Common Commands.

    *** Installing Globally ***
        Installing TypeScript globally means adding the tsc command to your system PATH so it is available from any folder.

        Example:
            npm install -g typescript

        Example:
        tsc -v

        Pros:
            Quick access to tsc from any project or directory.
            Useful for trying commands, learning, or one-off scripts.
            Some editors or tools can discover a global compiler automatically.

        Cons:
            Different machines (or teammates) may have different global versions.
            Can drift from the version your project expects, causing subtle issues.
            May require elevated permissions on some systems to install globally.

        Best practice is to install TypeScript as a project devDependency and run it with npx tsc so the exact 
        version is consistent across environments. A global install is optional and convenient for ad-hoc usage.

        Explanation:
        • Global install: This means installing TypeScript once onto your computer's core system. 
                            It lets you type tsc anywhere, in any folder, at any time.
        • Ad-hoc usage: This means quick, one-off tasks. If you just want to quickly test a single, 
                            random file outside of a formal project, a global install is convenient because you 
                            don't have to set up a whole project configuration first.



*/