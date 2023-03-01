'use strict'

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
     let strInLow = str.toLowerCase()
     return strInLow.indexOf('viagra') == -1 && strInLow.indexOf('xxx') == -1;
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))