// Задача 1. Створити функцію, яка за номером місяця повертає його назву.
{
    function month(monthNumber) {
        let monthes=['jan','feb','march']
        return monthes[monthNumber];
        
        switch (monthNumber) {
            case 1:
                return "January";
                break;
            case 2:
                return "February";
                break;
            case 3:
                return "March";
                break;
            case 4:
                return "April";
                break;
            case 5:
                return "May";
                break;
            case 6:
                return "June";
                break;
            case 7:
                return "July";
                break;
            case 8:
                return "August";
                break;
            case 9:
                return "September";
                break;
            case 10:
                return "October";
                break;
            case 11:
                return "November";
                break;
            case 12:
                return "December";
                break;

            default:
                return "Error!";
                break;
        }
    }
}

// Задача 2. Створити функцію, яка за номером тижня повертає кількість уроків(так, як у вас було у школі).
{
    function schedule(dayNumber) {
        switch (dayNumber) {
            case 1:
                return "Monday: 6 lessons";
                break;
            case 2:
                return "Tuesday: 5 lessons";
                break;
            case 3:
                return "Wednesday: 6 lessons";
                break;
            case 4:
                return "Thursday: 5 lessons";
                break;
            case 5:
                return "Friday: 4 lessons";
                break;
            case 6:
                return "Saturday: stay home and relax";
                break;
            case 7:
                return "Sunday: stay home and relax";
                break;

            default:
                return "Error!";
                break;
        }
    }
}

// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
{
    let sum4 = (a, b, c, d) => a + b + c + d;
}
// 2)добуток;
{
    let multiply4 = (a, b, c, d) => a * b * c * d;
}
// 3)середнє арифметичне;
{
    let arithmeticMean = (a, b, c, d) => (a + b + c + d) / 4;
}
// 4)мінімальне значення. 
{
    let min4 = (a, b, c, d) => {
        if (a < b) {
            if (a < c) {
                if (a < d) {
                    return a;
                } else {
                    return d;
                }
            } else if (c < d) {
                return c;
            } else {
                return d;
            }
        } else if (b < c) {
            if (b < d) {
                return b;
            } else {
                return d;
            }
        } else if (c < d) {
            return c;
        } else {
            return d;
        }
    }
}

// Задача 4. Створити функцію, яка для одновимірного масиву знаходить кількість парних елементів.
{
    function eval(arr) {
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                count++;
            }
        }

        return count;
    }
}

// Задача 5. Створити функцію, яка у масиві 0 заміняє на 1.
{
    function zeroToOne(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                arr.splice(i, 1, 1);
            }
        }
        return arr;
    }
}

// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців
{
    function table(row, col) {
        document.write(`<table>`);
        for (let i = 0; i < row; i++) {
            document.write(`<tr>`);

            for (let j = 0; j < col; j++) {
                document.write(`<td></td>`);
            }

            document.write(`</tr>`);
        }

        document.write(`</table>`);
        return;
    }
}

// Задача 7. Створити функцію, яка випадковим чином виводить на екран зображення (шляхи до зображень передаються у функцію у вигляді масиву)
{
    function imgRandom(arrImg) {
        let arrRnd = [];

        next:for (let i = 0; i < arrImg.length; i++) {
            let rnd = Math.floor(Math.random() * arrImg.length);

            for (let j = 0; j < arrRnd.length; j++) {

                if (arrImg[rnd] == arrRnd[j]) {
                    i--;
                    continue next;
                }

            }

            arrRnd.push(arrImg[rnd]);
        }

        for (let i = 0; i < arrRnd.length; i++) {
            document.write(`<img src="${arrRnd[i]}">`);
        }

        return;
    }

    function imgRandom2(arrImg) {

        function rnd() {
            return (Math.random() - 0.5)
        }
        
        return arrImg.sort(rnd);
    }
}
