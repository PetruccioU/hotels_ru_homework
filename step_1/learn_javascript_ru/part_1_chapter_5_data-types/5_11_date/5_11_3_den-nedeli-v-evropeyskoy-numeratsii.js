'use strict'
// День недели в европейской нумерации
// важность: 5

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник
// (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date),
// которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay(date)
{
    let daysOfWeak ={
        0: '7',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6'
    };
    let numDay=date.getDay()
    for (let [key, value] of Object.entries(daysOfWeak))
    {
        if(+key=== +numDay){return value}
    }
}


console.log(getLocalDay(date));       // вторник, нужно показать 2