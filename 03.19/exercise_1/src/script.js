
// Задача 1. Вивести на екран рядок тексту
// а а. . . а с с . . . с
// У рядку 37 букв «а» і 10 букв «с»

for (let i = 0; i < 37; i++) {
    document.write("a");
}
for (let i = 0; i < 10; i++) {
    document.write("c");
}


// Задача 1.1. Вивести на екран
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000
// 000000000000000000000

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
        document.write("0");
    }
    document.write("</br>");    
}

// Задача 2. Вивести на екран таблицю
// -------
// | | | |
// -------
// | | | |
// -------
// | | | |
// -------

for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 7; i++) {
        document.write("-");    
    }
    document.write("</br>");    
    for (let i = 0; i < 4; i++) {
        document.write("| ");    
    }
    document.write("</br>");    
}
for (let i = 0; i < 7; i++) {
    document.write("-");    
}


// Задача 3. Вивести на екран
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- -- 
// \/ \/ \/ \/ \/ \/ \/
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- -- 
// \/ \/ \/ \/ \/ \/ \/
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- -- 
// \/ \/ \/ \/ \/ \/ \/

for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 7; i++) {
        document.write("00 ");
    }
    document.write("</br>");
    for (let i = 0; i < 7; i++) {
        document.write("-- ");
    }
    document.write("</br>");
    for (let i = 0; i < 7; i++) {
        document.write("\\/ ");
    }
    document.write("</br>");
}


// Задача 5. Вивести на екран
// 1.1
// 2.12
// 3.123
// . . . 	
// 9.123456789

document.write("<ol>");
for (let i = 0; i < 9; i++) {
    document.write("<li>");
    for (let j = 0; j <= i; j++) {
        document.write(`${j + 1}`);
    }
    document.write("</li>");
}
document.write("</ol>");


// 1.	Користувач вводить числа поки не натисне відміну. Знайти 
// 1.	кількість парних;

let result = 0;
let num;

do {
    num = prompt("Enter the number:", "");
    let int = parseInt(num);
    
    if (int % 2 == 0 && int != 0) {
        result += 1;
    }
    
} while (num !== null);

console.log(result);


// 2.	добуток непарних;

let result = 1;
let count = 0;
let num;

do {
    num = prompt("Enter the number:", "");
    let int = parseInt(num);
    
    if (int % 2 != 0 && int != 0 && !isNaN(int)) {
        count++;
        result *= int;
    }
} while (num !== null);
``
if (count > 0) {
    console.log(0);
} else {
    console.log(result);
}


// 3.	суму двоцифрових;

let sum = 0;
let num;

do {
    num = prompt("Enter the number:", "");
    let int = parseInt(num);

    if (int > -100 && int < -9 || int > 9 && int < 100) {
        sum += int;
    }
} while (num !== null);

console.log(sum);


// 4.	середнє арифметичне додатних;

let positiveArithmeticMeanSum = 0;
let num;
let count = 0;

do {
    num = prompt("Enter the number:", "");
    let int = parseInt(num);

    if (int > 0) {
        positiveArithmeticMeanSum += int;
        count++;
    }
} while (num !== null);

if (count > 0) {
    console.log(positiveArithmeticMeanSum / count);
} else {
    console.log(0);
}


// 5.	найбільше від’ємне;

let biggestNegative = -Infinity;
let num;

do {
    num = prompt("Enter the number:", "");
    let int = parseInt(num);

    if (int < 0 && int > biggestNegative) {
        biggestNegative = int;
    }
} while (num !== null);

console.log(biggestNegative);