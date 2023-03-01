'use strict'
// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть дефисы удаляются, а все слова после них получают заглавную букву.
//Примеры:

function camelize(str)
{
    let strRes = '';
    let arrDiv = str.split('-');
    let oneLow = arrDiv[0].toLowerCase();
    strRes += oneLow;
    for (let nextWords of arrDiv.slice(1))
    {
        let nextLow = nextWords.toLowerCase();
        let nextLowFirstHi = nextLow[0].toUpperCase() + nextLow.slice(1);
        strRes += nextLowFirstHi;
    }
    return strRes
}


console.log(camelize("background-color")); //== 'backgroundColor';
console.log(camelize("list-style-image")); //== 'listStyleImage';
console.log(camelize("-webkit-transition")); //== 'WebkitTransition';
//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.