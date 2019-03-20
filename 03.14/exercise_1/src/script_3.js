
// EXERCISE_3
// Дано вартість одиниці товару і кількість. Знайти загальну вартість.

let cost = parseFloat(prompt("Enter unit price", ""));
let quantity = parseFloat(prompt("Enter quantity", ""));
console.log(`Total cost = ${(cost * quantity).toFixed(2)} $`);
