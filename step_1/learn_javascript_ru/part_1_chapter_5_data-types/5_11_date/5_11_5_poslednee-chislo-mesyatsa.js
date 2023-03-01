'use strict'
// Последнее число месяца?
// Важность: 5
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
//
//     year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month)
{
    return 32 - new Date(year,month,32).getDate()
}
console.log(getLastDayOfMonth(2008, 1))
console.log(getLastDayOfMonth(2009, 1))
console.log(getLastDayOfMonth(2010, 1))
console.log(getLastDayOfMonth(2011, 1))
console.log(getLastDayOfMonth(2012, 1))  // = 29 (високосный год, февраль)
console.log(' ')
console.log(getLastDayOfMonth(2022, 0))