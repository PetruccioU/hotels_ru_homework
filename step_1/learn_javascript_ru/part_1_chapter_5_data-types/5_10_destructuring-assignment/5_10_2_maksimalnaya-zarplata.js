'use strict'
// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:
let salariesEmpty = {
    // "John": 100,
    // "Pete": 300,
    // "Mary": 250
};
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries)
{
    let count =0
    let res=null
    for (let [key, value] of Object.entries(salaries))
    {
        if(value > count){count=value; res=key}
    }
    return res
}

console.log(topSalary(salaries))
console.log(topSalary(salariesEmpty))




