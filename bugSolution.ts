function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, parseInt('10', 10)); // Correct: String converted to number

let result2 = add(5, Number('10')); //Correct: String converted to number