'use strict'
// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:

// -С использованием цикла.
// -Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// -С использованием формулы арифметической прогрессии.

// Пример работы вашей функции:

//     function sumTo(n) { /*... ваш код ... */ }
// alert( sumTo(100) ); // 5050

// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?


let date0 = new Date()
function sumToForCycle(n)
{
    let sum = 0
    for (let i = 0; i <= n; i++)
    {
        sum +=i;
    }
    return sum
}
console.log(sumToForCycle(100))
console.log(date0-Date.now())


let date1 = Date.now()
function sumToRecursion(n)
{
    if (n == 1) {return n}
    else {
        let sum =0;
        sum = n + sumToRecursion(n-1)
        return sum
    }
}
console.log(sumToRecursion(100))
console.log(date1-Date.now())

let date2 = Date.now()
function sumToArithmeticProgression(n)
{
    return n*(n+1)/2
}
console.log(sumToArithmeticProgression(100))
console.log(date2-Date.now())



