'use strict'
// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

    let user = {
        name: 'John',
        age: 30
    };

function count(salaries)
{
    return Object.keys(salaries).length
}

console.log(count(user)); // 2
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».