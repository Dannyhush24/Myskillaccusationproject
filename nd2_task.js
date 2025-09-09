‎What is a function?
‎A function is a reusable block of code that performs a task. It can accept inputs (parameters) and return a value.
‎
‎Function Declaration
‎
‎function greet(name) {
‎  return "Hello, " + name + "!";
‎}
‎console.log(greet("Daniel")); // "Hello, Daniel!"
‎
‎
‎Function Expression
‎
‎const add = function (a, b) {
‎  return a + b;
‎};
‎console.log(add(2, 3)); // 5
‎
‎
‎Arrow Function (shorter syntax)
‎
‎const multiply = (a, b) => a * b;
‎console.log(multiply(4, 5)); // 20
‎
‎
‎Default parameters
‎
‎function say(message = "I obey, Master") {
‎  return message;
‎}
‎console.log(say()); // default used
‎
‎
‎Rest parameters (collect extra args)
‎
‎function sumAll(...numbers) {
‎  return numbers.reduce((s, n) => s + n, 0);
‎}
‎console.log(sumAll(1,2,3,4)); // 10
‎
‎
‎Higher-order functions (accept or return functions)
‎
‎function operate(a, b, op) {
‎  return op(a, b);
‎}
‎console.log(operate(5, 2, (x,y) => x - y)); // 3
‎
‎
‎Closure (function remembers outer scope)
‎
‎function makeAdder(x) {
‎  return function(y) {
‎    return x + y;
‎  };
‎}
‎const add10 = makeAdder(10);
‎console.log(add10(5)); // 15
‎
‎
‎IIFE (Immediately Invoked Function Expression)
‎
‎(function() {
‎  console.log("This runs immediately");
‎})();
‎
‎
‎Async function (brief mention)
‎
‎async function fetchSomething() {
‎  // placeholder; real network calls not used here
‎  return "done";
‎}
‎fetchSomething().then(console.log);
‎
‎2 — Calculator (arithmetic, logical, comparison) — JavaScript-only
‎
‎This block defines a calculator function calcSummary(a,b) which returns an object with arithmetic results, logical checks, and comparison results. It also prints readable output if you call the helper printCalc(a,b).
‎
‎// nd2_tasks.js (part: calculator)
‎function calcSummary(a, b) {
‎  // Ensure numbers when possible:
‎  const A = Number(a);
‎  const B = Number(b);
‎
‎  function safeDivide(x, y) {
‎    if (y === 0) return null; // avoid division by zero
‎    return x / y;
‎  }
‎
‎  return {
‎    arithmetic: {
‎      add: A + B,
‎      subtract: A - B,
‎      multiply: A * B,
‎      divide: safeDivide(A, B),   // null if division by zero
‎      remainder: (B === 0) ? null : (A % B),
‎      power: Math.pow(A, B)
‎    },
‎
‎    logical: {
‎      // example logical checks (booleans)
‎      bothPositive: (A > 0 && B > 0),
‎      anyPositive: (A > 0 || B > 0),
‎      neitherPositive: !(A > 0) && !(B > 0),
‎      notA: !A,    // coerces A to boolean then negates
‎      truthyCheck: Boolean(A) && Boolean(B)
‎    },
‎
‎    comparison: {
‎      equalLoose: (A == B),   // type-converting equality
‎      equalStrict: (A === B), // strict equality
‎      notEqual: (A != B),
‎      greaterThan: (A > B),
‎      lessThan: (A < B),
‎      greaterOrEqual: (A >= B),
‎      lessOrEqual: (A <= B)
‎    },
‎
‎    rawInputs: { a: a, b: b }
‎  };
‎}
‎
‎// Helper: print calculator nicely to console
‎function printCalc(a, b) {
‎  const res = calcSummary(a, b);
‎  console.log("Calculator summary for", a, "and", b);
‎  console.log("\n-- Arithmetic --");
‎  for (const [k, v] of Object.entries(res.arithmetic)) {
‎    console.log(`${k.padEnd(10)} : ${v}`);
‎  }
‎  console.log("\n-- Logical --");
‎  for (const [k, v] of Object.entries(res.logical)) {
‎    console.log(`${k.padEnd(15)} : ${v}`);
‎  }
‎  console.log("\n-- Comparison --");
‎  for (const [k, v] of Object.entries(res.comparison)) {
‎    console.log(`${k.padEnd(15)} : ${v}`);
‎  }
‎  console.log("\n");
‎}
‎
‎// Example:
‎printCalc(10, 5);
‎printCalc("10", "10");  // shows equality differences
‎printCalc(7, 0);        // demonstrates divide-by-zero handling
‎
‎
‎Notes
‎
‎safeDivide returns null when dividing by zero — you can change that behavior (e.g., return Infinity or throw an error).
‎
‎logical results show boolean checks that are common in control flows.
‎
‎3 — Multiplication table generator (given number / group number) — JS-only
‎
‎This function returns the table as an array of { expr, result } rows and also has a helper to print a neat console table. It uses a max parameter (default 12) — change as needed.
‎
‎// nd2_tasks.js (part: multiplication table)
‎function multiplicationTable(number, max = 12) {
‎  const N = Number(number);
‎  if (Number.isNaN(N)) throw new Error("Invalid number provided to multiplicationTable");
‎  const rows = [];
‎  for (let i = 1; i <= max; i++) {
‎    rows.push({ expr: `${N} × ${i}`, result: N * i });
‎  }
‎  return rows;
‎}
‎
‎// Helper to print to console in a simple grid
‎function printMultiplicationTable(number, max = 12) {
‎  const rows = multiplicationTable(number, max);
‎  console.log(`\nMultiplication table for ${number} (1 to ${max}):`);
‎  console.log("------------------------------");
‎  for (const row of rows) {
‎    console.log(`${row.expr.padEnd(8)} = ${row.result}`);
‎  }
‎  console.log("------------------------------\n");
‎}
‎
‎// Example:
‎printMultiplicationTable(7);
‎printMultiplicationTable(3, 20); // prints 1..20
‎
‎Full combined file
‎
‎// ----------------- Calculator -----------------
‎function calcSummary(a, b) {
‎  const A = Number(a);
‎  const B = Number(b);
‎  function safeDivide(x, y) {
‎    if (y === 0) return null;
‎    return x / y;
‎  }
‎  return {
‎    arithmetic: {
‎      add: A + B,
‎      subtract: A - B,
‎      multiply: A * B,
‎      divide: safeDivide(A, B),
‎      remainder: (B === 0) ? null : (A % B),
‎      power: Math.pow(A, B)
‎    },
‎    logical: {
‎      bothPositive: (A > 0 && B > 0),
‎      anyPositive: (A > 0 || B > 0),
‎      neitherPositive: !(A > 0) && !(B > 0),
‎      notA: !A,
‎      truthyCheck: Boolean(A) && Boolean(B)
‎    },
‎    comparison: {
‎      equalLoose: (A == B),
‎      equalStrict: (A === B),
‎      notEqual: (A != B),
‎      greaterThan: (A > B),
‎      lessThan: (A < B),
‎      greaterOrEqual: (A >= B),
‎      lessOrEqual: (A <= B)
‎    },
‎    rawInputs: { a: a, b: b }
‎  };
‎}
‎
‎function printCalc(a, b) {
‎  const res = calcSummary(a, b);
‎  console.log("Calculator summary for", a, "and", b);
‎  console.log("\n-- Arithmetic --");
‎  for (const [k, v] of Object.entries(res.arithmetic)) {
‎    console.log(`${k.padEnd(10)} : ${v}`);
‎  }
‎  console.log("\n-- Logical --");
‎  for (const [k, v] of Object.entries(res.logical)) {
‎    console.log(`${k.padEnd(15)} : ${v}`);
‎  }
‎  console.log("\n-- Comparison --");
‎  for (const [k, v] of Object.entries(res.comparison)) {
‎    console.log(`${k.padEnd(15)} : ${v}`);
‎  }
‎  console.log("\n");
‎}
‎
‎// ----------------- Multiplication Table -----------------
‎function multiplicationTable(number, max = 12) {
‎  const N = Number(number);
‎  if (Number.isNaN(N)) throw new Error("Invalid number provided to multiplicationTable");
‎  const rows = [];
‎  for (let i = 1; i <= max; i++) {
‎    rows.push({ expr: `${N} × ${i}`, result: N * i });
‎  }
‎  return rows;
‎}
‎
‎function printMultiplicationTable(number, max = 12) {
‎  const rows = multiplicationTable(number, max);
‎  console.log(`\nMultiplication table for ${number} (1 to ${max}):`);
‎  console.log("------------------------------");
‎  for (const row of rows) {
‎    console.log(`${row.expr.padEnd(8)} = ${row.result}`);
‎  }
‎  console.log("------------------------------\n");
‎}
‎
‎// ----------------- Examples / Demo -----------------
‎console.log("=== ND2 JS Tasks Demo ===\n");
‎
‎printCalc(10, 5);
‎printCalc("10", "10");
‎printCalc(7, 0);
‎
‎printMultiplicationTable(7);
‎printMultiplicationTable(5, 15);
‎
