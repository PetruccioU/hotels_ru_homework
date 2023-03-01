'use strict'
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
function getAverageAge(arr)
{
    let sumAge = arr.reduce((acc,item) => acc + Number(item.age),0);
    return +sumAge/arr.length;
}
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



