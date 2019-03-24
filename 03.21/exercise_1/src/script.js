// Задача 1. Дано послідовність платіжок протягом року.
{
    let arr = new Array(12);

    for (let i = 0; i < arr.length; i++) {
        let answer = prompt(`Enter the amount for the ${i+1} month`, "");
        let num = parseFloat(answer);

        if (answer === null) break;
        
        if (isNaN(rating) && !isFinite(num)) {
            i--;
            continue;
        } else {
            arr[i] = num;
        }
        
    }
    console.log(arr);

    // Знайти сумарну кількість грошей за:
    // 1)	у першій половині року;

    let firstHalfSum = 0;

    for (let i = 0; i < arr.length / 2; i++) {
        firstHalfSum += arr[i];
    }
    console.log(firstHalfSum);

    // 2)	у другій половині року;

    let secondHalfSum = 0;

    for (let i = arr.length / 2; i < arr.length; i++) {
        secondHalfSum += arr[i];
    }
    console.log(secondHalfSum);

    // 3)	за літо;

    let summerfSum = 0;

    for (let i = 5; i < 8; i++) {
        summerfSum += arr[i];
    }
    console.log(summerfSum);

    // 4)	за ІІ квартал.

    let secondQuarter = 0;

    for (let i = 3; i < 6; i++) {
        secondQuarter += arr[i];
    }
    console.log(secondQuarter);
}

// Задача 2. Дано послідовність оцінок учня. Підрахувати кількість:
{
    let arr = [];
    let quantiy = prompt("Enter the number of ratings", "");    

    for (let i = 0; i < quantiy; i++) {
        let answer = prompt("Enter a rating", "");
        let rating = parseInt(answer);
        
        if (answer === null) break;
        
        if (isNaN(rating) && !isFinite(answer)) {
            i--;
            continue;
        } else {
            arr[i] = rating;
        }

    }

    // 1)	двійок

    let countTwo = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 2) countTwo++;

    }
    console.log(countTwo);

    // 2)	кількість хороших оцінок (добре, відмінно);

    let countGood = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 4 || arr[i] == 5) countGood++;

    }
    console.log(countGood);

    // 3)	кількість оцінок, які нижче середнього.

    let sum = 0;
    let countLessArithmeticMean = 0;

    for (let i = 0; i < arr.length; i++) {sum += arr[i];}

    let arithmeticMean = sum / quantiy;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < arithmeticMean) countLessArithmeticMean++;

    }
    console.log(countLessArithmeticMean);
}
// Задача 3. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
{
    let quantityProduct = parseInt(prompt("Enter the quantity of the product", "0"));
    let amountMoney = parseFloat(prompt("Enter the amount of money", "0.00"));
    let arrProduct = [];
    let arrPrice = [];

    for (let i = 0; i < quantityProduct; i++) {
        let productName = prompt("Enter the product name", "");
        let productPrice = prompt("Enter the price", "0");

        if (productName === null || productPrice === null) break;

        arrProduct[i] = productName;

        if (isNaN(parseFloat(productPrice)) && !isFinite(productPrice)) {
            i--;
            continue;
        } else {
            arrPrice[i] = parseFloat(productPrice);
        }
    }

    for (let i = 0; i < arrPrice.length; i++) {
        if (arrPrice[i] < amountMoney) {
            console.log(arrProduct[i]);
        }
    }
}


// 1.	Дано масив розмірності N. Назвемо серією групу однакових елементів що йдуть поспіль, а довжиною серії - кількість цих елементів (довжина серії може дорівнювати 0. Вивести масив, що містить довжини всіх серій вихідного масиву.
{
    let n = parseFloat(prompt("Enter dimension 'N'", ""))
    let arr = [];
    let arrSeriesLength = [];

    for (let i = 0; i < n; i++) {
        let series = parseInt(prompt("Enter a series", "0"));
        arr[i] = new Array(series);
        arrSeriesLength[i] = arr[i].length;
    }
    console.log(arrSeriesLength);
}