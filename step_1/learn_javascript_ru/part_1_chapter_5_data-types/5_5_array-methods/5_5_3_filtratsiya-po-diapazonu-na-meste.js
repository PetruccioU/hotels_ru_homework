'use strict'
// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения
// кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
function filterRangeInPlace(arrr, a, b)
{
    for (let i = 0; i <= arrr.length-1; i++)
    {
        let el = arrr[i];
        if (el < a || el > b)
        {
            arrr.splice(i, 1);
            i -= 1;
        }
    }
}

//let arr = [5, 3, 8, 1];
let arr = [5, 0, 2, -4, 2, 10, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]