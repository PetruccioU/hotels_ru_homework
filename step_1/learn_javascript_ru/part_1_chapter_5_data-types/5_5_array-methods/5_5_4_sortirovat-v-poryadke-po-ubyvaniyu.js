'use strict'
// Сортировать в порядке по убыванию
// важность: 4
// ... ваш код для сортировки по убыванию
function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
}
let arr = [1, 5, 2, 4, 2, 1, -10, 8];
arr.sort(compareNumeric);
console.log( arr ); // 8, 5, 2, 1, -10