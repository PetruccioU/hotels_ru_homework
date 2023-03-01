'use strict'
// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
function ucFirst(str) {
    return str = str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"))