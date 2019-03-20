
// EXERCISE_1
// Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці.

let num_1 = parseFloat(prompt("Enter the first number", ""));
let num_2 = parseFloat(prompt("Enter the second number", ""));

let sum = num_1 + num_2;
let mult = num_1 * num_2;
let divi = num_1 / num_2;

document.write(`
    <table>
        <tr>
            <td>a</td>
            <td>${(num_1).toFixed(2)}</td>
        </tr>
        <tr>
            <td>b</td>
            <td>${(num_2).toFixed(2)}</td>
        </tr>
        <tr>
            <td>s</td>
            <td>${(sum).toFixed(2)}</td>
        </tr>
        <tr>
            <td>m</td>
            <td>${(mult).toFixed(2)}</td>
        </tr>
        <tr>
            <td>d</td>
            <td>${(divi).toFixed(2)}</td>
        </tr>
    </table>
`);
