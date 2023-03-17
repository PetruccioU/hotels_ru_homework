'use strict'
// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListRecursion(list)
{
    if(list.next !== null)
    {
        printListRecursion(list.next)
    }
    console.log(list.value)
}

printListRecursion(list)

console.log(' ')

function printListForCycle(list)
{
    let arr=[]
    let obj = list
    while(obj) {
        arr.push(obj.value);
        obj = obj.next;
    }
    for (let elem of arr.reverse()){console.log(elem)}
}

printListForCycle(list)

