//### Задача 1
//Дано целое число A. Напиши функцию `isPositive()`, 
//которая проверяет истинность высказывания: «Число A является положительным».
function isPositive(A) {
    return A > 0;
}

//### Задача 2
//Дано целое число A. 
//Напиши функцию `isOdd()`, которая проверяет истинность высказывания: «Число A является нечетным».
function isOdd(A) {
    return A % 2 !== 0;
}

//### Задача 3
//Даны два целых числа: A и B. Напиши функцию `checkInequality()`, 
//которая проверяет истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3».
function checkInequality(A, B) {
    return A > 2 && B <= 3;
}

//### Задача 4
//Даны два целых числа: A и B. Напиши функцию `checkInequality2()`, 
//которая проверяет истинность высказывания: «Справедливы неравенства A ≥ 0 или B < –2».
function checkInequality2(A, B) {
    return A >= 0 || B < -2;
}

//### Задача 5
//Даны три целых числа: A, B, C. Напиши функцию `checkBetweenNumbers()`, 
//которая проверяет истинность высказывания: «Значение числа B находится между числами A и C».
function checkBetweenNumbers(A, B, C) {
    return A < B && B < C;
}

//### Задача 6
//Дано целое число. Напиши функцию `checkOddThreeDigitNumber()`, 
//которая проверяет истинность высказывания: «Данное число является нечетным трехзначным».
function checkOddThreeDigitNumber(number) {
    return ((number >= 100 && number <= 999) || (number <= -100 && number >= -999)) && number % 2 !== 0;
}

//### Задача 7
//Дано трехзначное число. Напиши функцию `checkUniqueDigits()`, 
//которая проверяет истинность высказывания: «Все цифры данного числа различны».
function checkUniqueDigits(number) {
    if ((number < 100 || number > 999) && (number > -100 || number < -999)) {
      return false;
    }
    const numberStr = Math.abs(number).toString();
  
    for (let i = 0; i < numberStr.length; i += 1) {
      for (let j = i + 1; j < numberStr.length; j += 1) {
        if (numberStr[i] === numberStr[j]) {
          return false;
        }
      }
    }
  
    return true;
}