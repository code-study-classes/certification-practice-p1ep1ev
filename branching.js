//### Задача 1
//Дано целое число. Если оно является положительным, то прибавь к нему 1; в противном случае не изменяй его. 
//Напиши функцию `incrementIfPositive()`, которая принимает целое число и возвращает полученное число.
function incrementIfPositive(number) {
    if (number > 0) {
        return number + 1;
    } else {
        return number;
    }
}

//### Задача 2
//Даны два числа. Вывести порядковый номер меньшего из них. 
//Напиши функцию `getIndexOfSmallerNumber()`, которая принимает два числа и возвращает порядковый номер меньшего числа.
function getIndexOfSmallerNumber(number1, number2) {
    if (number1 > number2) {
        return 2;
    } else if (number1 < number2) {
        return 1;
    } else {
        return 1;
    }
}

//### Задача 3
//Даны три числа. Найти среднее из них (то есть число, расположенное между наименьшим и наибольшим). 
//Напиши функцию `findMiddleNumber()`, которая принимает три числа и возвращает среднее из них.
function findMiddleNumber(number1, number2, number3) {
    if ((number1 >= number2 && number1 <= number3) || (number1 >= number3 && number1 <= number2)) {
      return number1;
    } else if ((number2 >= number1 && number2 <= number3) || (number2 >= number3 && number2 <= number1)) {
      return number2;
    } else {
      return number3;
    }
  }