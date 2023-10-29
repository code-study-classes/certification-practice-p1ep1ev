//### Задача 1
//Напишите и экспортируйте функцию `calculateDistance()`, которая находит расстояние между двумя точками на числовой оси с заданными координатами x1 и x2.

function calculateDistance(x1, x2) {
    return (x2 - x1);
}

//### Задача 2
//Даны три точки A, B, C на числовой оси. Точка C расположена между точками A и B.
//Напишите и экспортируйте функцию `calculateSegmentProduct()`, которая находит произведение длин отрезков AC и BC.

function calculateSegmentProduct(A, B, C) {
    const AC = (C - A);
    const BC = (B - C);
    return AC * BC;
}

//### Задача 3
//Дан размер файла в байтах. Напишите и экспортируйте функцию `calculateKilobytes()`, которая,
//используя операцию деления нацело, находит количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).

function calculateKilobytes(fileSizeInBytes) {
    return Math.floor(fileSizeInBytes / 1024);
}
//использует операцию деления нацело (Math.floor())

//### Задача 4
//Даны целые положительные числа A и B (A > B). Напишите и экспортируйте функцию `calculateSegments()`,  
//которая, используя операцию деления, находит количество отрезков B, размещенных на отрезке A.
function calculateSegments(lengthA, lengthB) {
    if (lengthA > lengthB) {
    return Math.floor(lengthA / lengthB);
    }
}

//### Задача 5
//Дано двузначное число. Напишите и экспортируйте функцию `calculateDigitSum()`,
//которая находит сумму цифр данного двузначного числа.
function calculateDigitSum(twoDigitNumber) {
    if (twoDigitNumber >= 10 && twoDigitNumber <= 99) {
        const tens = Math.floor(twoDigitNumber / 10);
        const ones = twoDigitNumber % 10;
        return tens + ones;
    } else {
        return '';
    }
}

//### Задача 6
//Дано трехзначное число. Напишите и экспортируйте функцию `swapHundredsAndTens()`, которая возвращает число,
//полученное при перестановке цифр сотен и десятков исходного числа.
function swapHundredsAndTens(twoDigitNumber) {
    if (twoDigitNumber >= 100 && twoDigitNumber <= 999) {
    const hund = Math.floor(twoDigitNumber / 100);//9
    const ten = Math.floor((twoDigitNumber % 100) / 10);//8
    const one = twoDigitNumber % 10;//7 остаток!!!
    return (ten * 100) + (hund * 10) + one;
    } else {
        return '';
    }
}

//### Задача 7
//Дано целое число, большее 999. Напишите и экспортируйте функцию `getHundredsDigit()`, которая,
//используя одну операцию деления нацело и одну операцию взятия остатка от деления, находит цифру, 
//соответствующую разряду сотен в записи этого числа. Если число не соответствует условию, функция возвращает 0.
function getHundredsDigit(number) {
    if (number >= 1000) {
        return Math.floor((number / 100) % 10);
    } else {
        return 0;
    }
}

//### Задача 8
//С начала суток прошло N секунд. Напишите и экспортируйте функцию `getFullHours()`,
//которая находит количество полных часов, прошедших с начала суток.
function getFullHours(seconds) {
    return Math.floor(seconds / 3600);
}

//### Задача 9
//Дни недели пронумерованы следующим образом: 0 — воскресенье, 1 — понедельник, 2 — вторник, ..., 6 — суббота. Дано целое число K, лежащее в диапазоне 1–365. Напишите и экспортируйте функцию `getDayOfWeek()`,
//которая определяет номер дня недели для K-го дня года, если известно, что в этом году 1 января (первый день) было понедельником.
function getDayOfWeek(dayOfYear) {
    if (dayOfYear >= 1 && dayOfYear <= 365) {
      return (((dayOfYear + 1) % 7) - 1);
    } else {
      return '';
    }
  }

//### Задача 10
//Даны целые положительные числа A, B, C. Напишите и экспортируйте функцию `countSquares()`, которая на прямоугольнике размера A × B
//размещает максимально возможное количество квадратов со стороной C (без наложений) и возвращает их количество.
function countSquares(A, B, C) {
    return Math.floor(A / C) * Math.floor(B / C);
}


export {calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum, swapHundredsAndTens, getHundredsDigit, getFullHours, getDayOfWeek, countSquares};