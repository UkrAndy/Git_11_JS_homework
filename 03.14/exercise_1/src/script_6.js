
// EXERCISE_6
// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

let cost_1 = parseFloat(prompt("Enter the price for the first unit", ""));
let quantity_1 = parseFloat(prompt("Enter quantity", ""));
let cost_2 = parseFloat(prompt("Enter the price for the second unit", ""));
let quantity_2 = parseFloat(prompt("Enter quantity", ""));
let cost_3 = parseFloat(prompt("Enter the price for the third unit", ""));
let quantity_3 = parseFloat(prompt("Enter quantity", ""));

let itemPrice_1 = cost_1 * quantity_1;
let itemPrice_2 = cost_2 * quantity_2;
let itemPrice_3 = cost_3 * quantity_3;
let totalPrice = itemPrice_1 + itemPrice_2 + itemPrice_3;

document.write(`
    <table>
        <tr>
            <th colspan="3">"Сільпо"</th>
        </tr>
        <tr>
            <td colspan="2">Картопля</td>
            <td>${(itemPrice_1).toFixed(2)} $</td>
        </tr>
        <tr>
            <td colspan="2">Морква</td>
            <td>${(itemPrice_2).toFixed(2)} $</td>
        </tr>
        <tr>
            <td colspan="2">Буряк</td>
            <td>${(itemPrice_3).toFixed(2)} $</td>
        </tr>
        <tr>
            <th colspan="2">Сума</th>
            <th>${(totalPrice).toFixed(2)} $</th>
        </tr>
    </table>
`);
