# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: Type 'string' is not assignable to type 'number'.  This happens when you try to perform a numeric operation (like addition) on a string value without proper type conversion.

The `bug.ts` file contains the erroneous code.  The `bugSolution.ts` file provides a corrected version.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Compile the `bug.ts` file using the TypeScript compiler: `tsc bug.ts`
4. Observe the compiler error.

## Solution

The solution involves ensuring that all values used in arithmetic operations are of the same numeric type.  The `bugSolution.ts` file shows how to convert the string to a number using `parseInt()` or `Number()`.