'use strict'
// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются
// в другом порядке.

// Например:
//
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
function a_clean(arrr)
{
    let sortWords = []
    for (let elem of arrr)
    {
        sortWords.push(elem.toLowerCase().split('').sort().join(''))
    }
    //console.log(arrr)
    //console.log(sortWords)
    let mapWords = new Map()
    for (let i = 0; i <= arrr.length-1; i++)
    {
        mapWords.set(sortWords[i],arrr[i])
    }
    //console.log(mapWords)
    return Array.from(mapWords.values())
}
// Например:
//
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(a_clean(arr))
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
