'use strict'
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с
// любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
let styles = ['Джаз', 'Блюз'];
console.log(styles)
styles.push('Рок-н-ролл');
console.log(styles)
let indexMidle = Math.ceil(styles.length/2)
styles[indexMidle-1] = 'Классика'
console.log(styles)
console.log(styles.shift())
console.log(styles)
styles.unshift('Рэп', 'Регги');
console.log(styles)



