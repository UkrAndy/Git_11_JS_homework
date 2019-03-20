
// EXERCISE_4
// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

let length = parseFloat(prompt("Enter the length in cm", ""));
console.log(`It's equal ${(length / 100).toFixed(2)} m or ${(length / 100000).toFixed(2)} km`);
