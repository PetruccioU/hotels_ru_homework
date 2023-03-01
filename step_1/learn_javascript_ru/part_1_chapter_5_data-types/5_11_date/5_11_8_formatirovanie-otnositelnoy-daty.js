'use strict'
// Форматирование относительной даты
// важность: 4
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//
//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
//
// Например:
function twoDigits(num)
{
    if(String(num).length === 1){return `0${num}`}
    else{return String(num)}
}
//console.log(twoDigits(1))
//console.log(twoDigits(12))
function formatDate(date)
{
    let agoSec = (new Date() - date)/1000
    if(agoSec<1){return 'прямо сейчас'}
    else if(agoSec<60){return `${agoSec} сек. назад`}
    else if(agoSec<60*60){return `${agoSec/60} мин. назад`}
    else{return `${date.getFullYear()}.${twoDigits(date.getMonth()+1)}.${twoDigits(date.getDate())} ${date.getHours()}:${date.getMinutes()}`}
}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
// console.log( formatDate(new Date(new Date - 24 * 60 * 60 * 1000)) );