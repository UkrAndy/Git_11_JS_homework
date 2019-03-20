
// EXERCISE_5
// Дано кількість секунд. Визначити скільки це годин і хвилин.

let sec = parseFloat(prompt("Enter the number of seconds", ""));
console.log(`It's equal ${(sec / 60).toFixed(2)} min or ${(sec / 3600).toFixed(2)} hour(s)`);
