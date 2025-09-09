// ----------------- Calculator -----------------
function calcSummary(a, b) {
  const A = Number(a);
  const B = Number(b);

  function safeDivide(x, y) {
    if (y === 0) return null; // Avoid division by zero
    return x / y;
  }

  return {
    arithmetic: {
      add: A + B,
      subtract: A - B,
      multiply: A * B,
      divide: safeDivide(A, B),
      remainder: (B === 0) ? null : (A % B),
      power: Math.pow(A, B)
    },
    logical: {
      bothPositive: (A > 0 && B > 0),
      anyPositive: (A > 0 || B > 0),
      neitherPositive: !(A > 0) && !(B > 0),
      notA: !A,
      truthyCheck: Boolean(A) && Boolean(B)
    },
    comparison: {
      equalLoose: (A == B),
      equalStrict: (A === B),
      notEqual: (A != B),
      greaterThan: (A > B),
      lessThan: (A < B),
      greaterOrEqual: (A >= B),
      lessOrEqual: (A <= B)
    },
    rawInputs: { a: a, b: b }
  };
}

function printCalc(a, b) {
  const res = calcSummary(a, b);
  console.log("Calculator summary for", a, "and", b);

  console.log("\n-- Arithmetic --");
  for (const [k, v] of Object.entries(res.arithmetic)) {
    console.log(`${k.padEnd(10)} : ${v}`);
  }

  console.log("\n-- Logical --");
  for (const [k, v] of Object.entries(res.logical)) {
    console.log(`${k.padEnd(15)} : ${v}`);
  }

  console.log("\n-- Comparison --");
  for (const [k, v] of Object.entries(res.comparison)) {
    console.log(`${k.padEnd(15)} : ${v}`);
  }
  console.log("\n");
}

// ----------------- Multiplication Table -----------------
function multiplicationTable(number, max = 12) {
  const N = Number(number);
  if (Number.isNaN(N)) throw new Error("Invalid number provided to multiplicationTable");

  const rows = [];
  for (let i = 1; i <= max; i++) {
    rows.push({ expr: `${N} × ${i}`, result: N * i });
  }
  return rows;
}

function printMultiplicationTable(number, max = 12) {
  const rows = multiplicationTable(number, max);
  console.log(`\nMultiplication table for ${number} (1 to ${max}):`);
  console.log("------------------------------");
  for (const row of rows) {
    console.log(`${row.expr.padEnd(8)} = ${row.result}`);
  }
  console.log("------------------------------\n");
}

// ----------------- Examples / Demo -----------------
console.log("=== ND2 JS Tasks Demo ===\n");

printCalc(10, 5);
printCalc("10", "10");
printCalc(7, 0);

printMultiplicationTable(7);
printMultiplicationTable(5, 15);
