//### Задача 1
//Дана строка. Напиши и экспортируй функцию `countUppercaseLetters()`, 
//которая подсчитывает количество прописных латинских букв в данной строке.
function countUppercaseLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
        count++;
        }
    }

    return count;
}

//### Задача 2
//Даны целые положительные числа N1 и N2 и строки S1 и S2. Напишите и экспортируйте функцию `combineStrings()`, 
//которая создает новую строку, содержащую первые N1 символов строки S1 и последние N2 символов строки S2 (в указанном порядке).
function combineStrings(N1, N2, S1, S2) {
    return S1.slice(0, N1) + S2.slice(-N2);
}
//console.log(combineStrings(2, 4, 'JavaScript', 'Coding'));

//### Задача 3
//Даны строки S и S0. Напиши функцию `containsSubstring()`, которая проверяет, содержится ли строка S0 в строке S. 
//Если содержится, то функция возвращает true, если не содержится, то false. INCLUDES
function containsSubstring(S, S0) {
    return S.includes(S0);
}

//### Задача 4
//Даны строки S, S1 и S2. 
//Напиши функцию `replaceSubstring()`, которая заменяет в строке S первое вхождение строки S1 на строку S2. REPLACE
function replaceSubstring(S, S1, S2) {
    return S.replace(S1, S2);
}

//### Задача 5
//Дана строка, состоящая из английских слов, разделенных пробелами. Напиши функцию `countWordsWithSameLetters()`, 
//которая находит количество слов, начинающихся и заканчивающихся одной и той же буквой.
function countWordsWithSameLetters(sentence) {
    const words = sentence.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.charAt(0).toLowerCase() === word.charAt(word.length - 1).toLowerCase()) {
        count++;
      }
    }
    return count;
}

//### Задача 6
//Дана строка, состоящая из слов. Напиши функцию `countWordsWithA()`, 
//которая находит количество слов, содержащих хотя бы одну букву «A».
function countWordsWithA(sentence) {
    const words = sentence.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.toLowerCase().includes("a")) {
        count++;
      }
    }
    return count;
}

//### Задача 7
//Дана строка-предложение с избыточными пробелами между словами. Напиши функцию `normalizeSpaces()`, 
//которая преобразует строку так, чтобы между словами был ровно один пробел.
function normalizeSpaces(sentence) {
    return sentence.replace(/\s+/g, ' ').trim();
}

//### Задача 8
//Дана строка, содержащая полное имя файла, то есть имя диска, список каталогов (путь), собственно имя и расширение. 
//Напиши функцию `extractFileName()`, которая выделяет из этой строки имя файла (без расширения).
function extractFileName(fullFileName) {
    const parts = fullFileName.split('/');
    const fileNameWithExtension = parts[parts.length - 1];
    const fileNameParts = fileNameWithExtension.split('.');
    const fileName = fileNameParts[0];
    return fileName;
}

//### Задача 9
//Дана строка-предложение. Напиши функцию `encryptSentence()`, которая зашифровывает ее, помещая в начало все символы, 
//расположенные на четных позициях строки, а затем, в обратном порядке, все символы, расположенные на нечетных позициях.
function encryptSentence(sentence) {
    let evenChars = '';
    let oddChars = '';
  
    for (let i = 0; i < sentence.length; i += 1) {
      if (i % 2 === 0) {
        evenChars += sentence[i];
      } else {
        oddChars = sentence[i] + oddChars;
      }
    }
    const retr = evenChars + oddChars;
    return retr.split('').reverse().join('');
}

export {countUppercaseLetters, combineStrings, containsSubstring, replaceSubstring, countWordsWithSameLetters, countWordsWithA, normalizeSpaces, extractFileName, encryptSentence};