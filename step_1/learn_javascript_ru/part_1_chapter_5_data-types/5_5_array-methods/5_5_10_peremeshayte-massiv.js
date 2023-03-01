'use strict'
// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным
// образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям
// элементов. Например:

// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3]
// может быть переупорядочено
// как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
let arr = [1, 2, 3];
console.log(arr)
let count = 0
function shuffle(arrr)
{
    count++
    if (count%2 === 0)
    {

        let firstOutOne = arrr.shift()
        let firstOutSec = arrr.shift()
        arrr.unshift(firstOutOne)
        arrr.unshift(firstOutSec)
        return arrr
    }
    else
    {
        let lastOutOne = arrr.pop()
        let lastOutSec = arrr.pop()
        arrr.push(lastOutOne)
        arrr.push(lastOutSec)
        return arrr
    }
}

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]
// ...
