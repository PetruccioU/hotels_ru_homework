'use strict'

console.log('задача 1')
let i = 3;
while (i) {
    console.log( i-- );
}

console.log('задача 2')

let q = 0;
while (++q < 5) console.log( q );
console.log('')
let w = 0;
while (w++ < 5) console.log( w );

console.log('задача 3')
for (let q = 0; q < 5; ++q) console.log( q );
console.log('')
for (let e = 0; e < 5; e++) console.log( e );

console.log('задача 4')
for (let r = 1; r < 11; ++r)
    if ( r % 2 === 0) {
        console.log(r)
    }

console.log('задача 5')
let b = 0
while (b < 3) {
    console.log(`number ${b}!`)
    b++
}

console.log('задача 6')
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить
// ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена
// (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче
// необязательно.

let cycle_ = 0
while (cycle_ < 100)
{
   cycle_ = prompt('введите число больше 100',0);
}

console.log('задача 7')

for (let num=2; num <= 10; num++)
{
    let count = 1
    for (let div = 2; div < num; div++)
    {
        if (num % div === 0) {count--}
    }
    // console.log(num)
    if (count===1) {console.log(num)}
}
