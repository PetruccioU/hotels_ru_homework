'use strict'
// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//
// Сделайте два варианта решения.

// Используя setInterval.
function printNumbers(from, to)
{
    let fro = from;
    let timer = setInterval(function() {
        console.log(fro);
        if (fro == to) {
            clearInterval(timer);
        }
        fro++;
    }, 1000);
}
// printNumbers(1, 10)

// Используя рекурсивный setTimeout.
function printNumbersRec(from, to)
{
    let fro = from;
    console.log(fro)
    fro++;
    if (fro == to)
    {console.log(fro)}
    else {setTimeout(()=>printNumbersRec(fro, to),1000)}
}

printNumbers(1, 10)
setTimeout(()=>{printNumbersRec(1, 10)},11000)

