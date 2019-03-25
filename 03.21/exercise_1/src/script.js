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
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let arr = [];
    let arrSeries = [];
    let seriesLength = 0;
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*5 + 1));
    }
    console.log(arr);

    next:for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                seriesLength++;
            } else {
                arrSeries.push(seriesLength);
                seriesLength = 0;
                continue next;
            }
        }
    }
    console.log(arrSeries);
}

// 2.	Дано масив розмірності N. Назвемо серією групу однакових елементів що йдуть поспіль, а довжиною серії - кількість цих елементів (довжина серії може дорівнювати 0.  Перетворити масив так, щоб замість кожної серії йшов один елемент, що утворює серію, а її довжину.
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*10 + 1));
    }
    console.log(arr);

    next:for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            } else {
                continue next;
            }
        }
    }
    console.log(arr);
}

// 4.	Дано масив розмірності N і число k ( k<N). Здійснити циклічний зсув елементів масиву вліво на k позицій. Наприклад для масиву [1,2,3,4,5,6] та k=2 після виконання зсуву отримуємо [3,4,5,6,1,2].
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let k = parseInt(prompt("Enter value 'k' (k < N)", ""))
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*100 + 1));
    }
    console.log(arr);
    
    for (let i = 0; i < k; i++) {
        arr.push(arr[i]);
    }

    for (let i = 0; i < k; i++) {
        arr.shift(arr[i]);
    }
    console.log(arr);
}

// 5.	Дано числовий масив розмірності N. Знайти кількість його локальних мінімумів. Локальним мінімумом називається елемент, значення якого менше від сусідів
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let arr = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*100 + 1));
    }
    console.log(arr);
    
    if (arr[0] < arr[1]) {
        count++;
    }

    for (let i = 1; i < arr.length - 1; i++) {

        if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
            count++;
        }

    }

    if (arr[arr.length - 1] < arr[arr.length - 2]) {
        count++;
    }
    console.log(count);
}

// 6.	Дано масив розмірності N.  Визначити максимальну кількість його однакових елементів.
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let arr = [];
    let count = 1;
    let countMax = 0;

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*10 + 1));
    }

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                count++;
                if (count > countMax) {
                    countMax = count;
                }
            }
        }

        count = 1;
    }
    console.log(`countMax = ${countMax}`);
}

// 7.	Дано масив розмірності N і число k ( k <N). Здійснити циклічний зсув елементів масиву вправо на k позицій. Наприклад для масиву [1,2,3,4,5,6] та k=2 після виконання зсуву отримуємо [5,6,1,2,3,4].
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let k = parseInt(prompt("Enter value 'k' (k < N)", ""))
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*100 + 1));
    }
    console.log(arr);
    
    for (let i = 1; i <= k; i++) {
        arr.unshift(arr[arr.length - i]);
    }

    for (let i = 0; i < k; i++) {
        arr.pop();
    }
    console.log(arr);
}

// 8.	Дано числовий масив розмірності N.  Вважати, що його елементи утворюють числову послідовність,  утворити новий масив що містить найдовшу зростаючу підпослідовність.
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*100 + 1));
    }
    console.log(arr);

    function rule(item1, item2) {
        if (item1 > item2) {
            return 1;
        } else if (item1 < item2) {
            return -1;
        } else {
            return 0;
        }
    }

    arr.sort(rule);
    console.log(arr);
}

// 9.	Дано числовий масив розмірності N. Знайти кількість його локальних максимумів.
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let arr = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*100 + 1));
    }
    console.log(arr);
    
    if (arr[0] > arr[1]) {
        count++;
    }
    
    for (let i = 1; i < arr.length - 1; i++) {

        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            count++;
        }

    }
    
    if (arr[arr.length - 1] > arr[arr.length - 2]) {
        count++;
    }
    console.log(count);
}

// 10.	Дано масив розмірності N. Назвемо серією групу однакових елементів що йдуть поспіль, а довжиною серії - кількість цих елементів (довжина серії може дорівнювати. Додати після кожної серії елемент з текстом «серія k», де k – порядковой номер серії
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let arr = [];
    let series = 0;
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*5 + 1));
    }
    console.log(arr);

    next:for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                series++;
                for (let k = j + 1; k < arr.length; k++) {
                    if (arr[i] == arr[k]) {
                        continue;
                    } else {
                        arr.splice(k, 0, `series ${series}`);
                        i = k - 1;
                        continue next;
                    }
                }
            } else {
                continue next;
            }
        }
    }
    console.log(series);
}

// 11.	Дано числовий масив розмірності N. Знайти кількість елементі, що більші за перший.
{
    let n = parseInt(prompt("Enter dimension 'N'", ""))
    let arr = [];
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*100 + 1));
    }
    console.log(arr);

    for (let i = 1; i < arr.length; i++) {
        if (arr[0] < arr[i]) {
            count++;
        }
    }
    console.log(count);
}