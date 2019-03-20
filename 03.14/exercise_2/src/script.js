{
    // 1.1. Найбільше серед двох різних замінити на 0.

    let num_1 = parseFloat(prompt("Enter first number:", ""));
    let num_2 = parseFloat(prompt("Enter second number:", ""));

    console.log(`First number: ${num_1}\nSecond number: ${num_2}`);

    if (isNaN(num_1) || isNaN(num_2)) {
        console.log("You entered not a number.");
    } else {
        if (num_1 == num_2) {
            console.log("Numbers are equal.");
            num_1 = 1;
            num_2 = 1;
            console.log(`First number: ${num_1}\nSecond number: ${num_2}`);
        } else {
            num_1 > num_2 ? num_1 = 0 : num_2 = 0;
            console.log(`First number: ${num_1}\nSecond number: ${num_2}`);
        }
    }
}

{
    // 1.2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

    let num_1 = parseFloat(prompt("Enter the cost of item:", ""));
    let num_2 = parseFloat(prompt("Enter the amount of money:", ""));

    if (isNaN(num_1) || isNaN(num_2)) {
        console.log("You entered not a number.");
    } else {
        if (num_1 == num_2) {
            console.log("Numbers are equal.");
            num_1 = 1;
            num_2 = 1;
            console.log(`First number: ${num_1}\nSecond number: ${num_2}`);
        } else {
            num_1 > num_2 ? console.log("You do not have enough money.") : console.log("Buy a lottery for 4 UAH?");
        }
    }
}

{
    // 1.3. Формування накладної. Вводиться назва товару, кількість, ціна і рік.  Значення року вводиться користувачем або ж дорівнює 2017 (у випадку, якщо користувач не ввів значення). Перевірити коректність введених даних . У випадку некоректності вивести відповідне повідомлення.

    let nameProduct = prompt("Name of product:", "") || "Product";
    let count = parseFloat(prompt("Count", ""));
    let price = parseFloat(prompt("Price:", ""));
    let year = parseInt(prompt("Year", "")) || 2019;
    
    if (!isNaN(count) && !isNaN(price)) {
        console.log(`${nameProduct} - ${count} item(s) - ${price} $ - ${year}`);
    } else {
        console.log("Error");
    }
}

{
    // 2. З клавіатури вводяться два числа. Вибравши номер операції обчислити результат.

    let num_1 = parseFloat(prompt("Enter first number:", ""));
    let num_2 = parseFloat(prompt("Enter second number::", ""));

    switch (+prompt("1='+', 2='-', 3='*', 4='/'", "")) {
        case 1:
            console.log(num_1 + num_2);
            break;
        case 2:
            console.log(num_1 - num_2);
            break;
        case 3:
            console.log(num_1 * num_2);
            break;
        case 4:
            console.log(num_1 / num_2);
            break;
            
        default:
            console.log("Error!");
            break;
    }
}

{
    // 3. Модифікувати попереднє завдання ввівши не номер операції, а саму операцію.

    let num_1 = parseFloat(prompt("Enter first number:", ""));
    let num_2 = parseFloat(prompt("Enter second number::", ""));

    switch (prompt("1='+', 2='-', 3='*', 4='/'", "")) {
        case "+":
            console.log(num_1 + num_2);
            break;
        case "-":
            console.log(num_1 - num_2);
            break;
        case "*":
            console.log(num_1 * num_2);
            break;
        case "/":
            console.log(num_1 / num_2);
            break;
            
        default:
            console.log("Error!");
            break;
    }
}

{
    // 1.	На роботу компаніє приймає працівників від 32 до 45 років. З клавіатури вводиться вік претендента. З’ясувати, чи може він бути прийнятим на роботу.

    let age = parseInt(prompt("Enter your age:", ""));

    if (!isNaN(age)) {
        (age >= 32) && (age < 45) ? console.log("You are hired.") : console.log("You do not pass.");
    } else {
        console.log("Enter the number.");
    }
}

{
    // 2.	З клавіатури вводиться кількість балів. Вивести на екран оцінку (задовільно, добре чи відмінно).

    switch (+prompt("Enter the number of points:", "")) {
        case 1:
        case 2:
            console.log("Незадовільно");
            break;
        case 3:
            console.log("Задовільно");
            break;
        case 4:
            console.log("Добре");
            break;
        case 5:
            console.log("Відмінно");
            break;
            
        default:
            console.log("Error!");
            break;
    }
}

{
    // 3. Комп’ютер випадковим чином генерує число. Вгадати, чи наступне число буде більшим чи меншим.

    let rndm = Math.random();
    let answer = +prompt(`Next more "1" or less "2": ${rndm}`, "");

    if (Math.random() > rndm) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

{
    // 3.2. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби

    let rndm = Math.floor(Math.random() * 5 + 1);
    let answer = parseInt(prompt("Random number: " + rndm + "\nHow is the next number?", ""));
    let result;

    switch (answer) {
        case 1:
            if (Math.floor(Math.random() * 5 + 1) == 1) {
                alert("You win!");
            } else {
                result = "Try again.";
                alert(result);
            }
            break;
        case 2:
            if (Math.floor(Math.random() * 5 + 1) == 1) {
                alert("You win!");
            } else {
                result = "Try again.";
                alert(result);
            }
            break;
        case 3:
            if (Math.floor(Math.random() * 5 + 1) == 1) {
                alert("You win!");
            } else {
                result = "Try again.";
                alert(result);
            }
            break;
        case 4:
            if (Math.floor(Math.random() * 5 + 1) == 1) {
                alert("You win!");
            } else {
                result = "Try again.";
                alert(result);
            }
            break;
        case 5:
            if (Math.floor(Math.random() * 5 + 1) == 1) {
                alert("You win!");
            } else {
                result = "Try again.";
                alert(result);
            }
            break;
    
        default:
            alert("Error!");
            break;
    }

    if (result == "Try again.") {
        answer = parseInt(prompt("Second try.", ""));
    
        switch (answer) {
            case 1:
                (Math.floor(Math.random() * 5 + 1) == 1) ? alert("You win!") : alert("You lose!");
                break;
            case 2:
                (Math.floor(Math.random() * 5 + 1) == 2) ? alert("You win!") : alert("You lose!");
                break;
            case 3:
                (Math.floor(Math.random() * 5 + 1) == 3) ? alert("You win!") : alert("You lose!");
                break;
            case 4:
                (Math.floor(Math.random() * 5 + 1) == 4) ? alert("You win!") : alert("You lose!");
                break;
            case 5:
                (Math.floor(Math.random() * 5 + 1) == 5) ? alert("You win!") : alert("You lose!");
                break;
        
            default:
                alert("Error!");
                break;
        }
    }
}

{
    // 3.3.	З клавіатури вводяться імена двох дітей та кількість шоколадок. Вивести не екран ім’я того учня, у якого кількість шоколадок є більшою.

    let child_1 = prompt("Enter the name of the first child:", "");
    let chocolates_1 = parseInt(prompt("Enter the amount of chocolate in the first child:", ""));
    let child_2 = prompt("Enter the name of the second child:", "");
    let chocolates_2 = parseInt(prompt("Enter the amount of chocolate in the first child:", ""));

    chocolates_1 > chocolates_2 ? alert(child_1) : alert(child_2);
}


// ======================= ПРИКЛАДИ ОПЕРАТОР ВИБОРУ =====================

{
    // З клавіатури вводиться рейтинг користувача. 1-Профі, 2-Досвідчений, 3-Знаючий, 4-Початківець.
    //Вивести за рейтингом рядкове представлення. 

    let rating = parseInt(prompt("Enter user rating.", ""));

    switch (rating) {
        case 1:
            console.log("Professional");
            break;
        case 2:
            console.log("Experienced");
            break;
        case 3:
            console.log("Knowing");
            break;
        case 4:
            console.log("Beginner");
            break;
            
        default:
            console.log("Error!");
            break;
    }
}

{
    // З клавіатури вводиться рейтинг користувача. 1-Профі, 2-Досвідчений, 3-Знаючий, 4-Початківець.
    //Чи доволено робити коментарі (1, 2 -дозволено, 3,4- не дозволено)

    let rating = parseInt(prompt("Enter user rating.", ""));

    switch (rating) {
        case 1:
        case 2:
            console.log("Allowed to comment.");
            break;
        case 3:
        case 4:
            console.log("It is forbidden to comment.");
            break;
            
        default:
            console.log("Error!");
            break;
    }
}

{
    // З клавіатури ввоидться номер місяця, вивести на екран пору року

    let month = parseInt(prompt("Enter month number.", ""));

    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter.");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring.");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer.");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall.");
            break;
            
        default:
            console.log("Error!");
            break;
    }
}

{
    // З використанням операторів вибору реалізувати гру «Камінь ножниці папір» (користувач задає свій варіант, комп’ютер генерує випадковим чином).

    let answer = parseInt(prompt("Enter 1-stone, 2-paper or 3-scissors:", ""));
    let result = Math.floor(Math.random() * 3 + 1);

    switch (answer) {
        case 1:
            if (result == 1) {
                console.log("Draw.");
            } else {
                result == 2 ? console.log("You lose.") : console.log("You win.");
            }
            break;
        case 2:
            if (result == 2) {
                console.log("Draw.");
            } else {
                result == 3 ? console.log("You lose.") : console.log("You win.");
            }
            break;
        case 3:
            if (result == 3) {
                console.log("Draw.");
            } else {
                result == 1 ? console.log("You lose.") : console.log("You win.");
            }
            break;
    
        default:
            console.log("Error!");
            break;
    }
}