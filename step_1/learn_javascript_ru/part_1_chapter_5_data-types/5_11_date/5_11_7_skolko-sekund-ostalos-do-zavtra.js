'use strict'
// Сколько секунд осталось до завтра?
// важность: 5
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
function getSecondsToTomorrow()
{
    let now = new Date()
    let tomorrowStarts = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0,0)
    return (+tomorrowStarts - now)/1000
}
console.log('Количество секунд, до наступления завтрашнего дня равно: '+getSecondsToTomorrow()) //== 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения
// сегодняшней даты.