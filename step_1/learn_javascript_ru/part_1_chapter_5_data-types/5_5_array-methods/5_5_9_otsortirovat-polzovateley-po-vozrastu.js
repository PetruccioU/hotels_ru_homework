'use strict'
// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let jenia = { name: "Женя", age: 27 };
let slava = { name: "Слава", age: 19 };

let arr = [ vasya, petya, masha, jenia ,slava ];

function sortByAge(arrr)
{
    arrr.sort((a, b) => a.age - b.age)
}

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя
console.log(arr);