'use strict'
// Бесконечный цикл по ошибке
// важность: 4
// Этот цикл – бесконечный. Он никогда не завершится, почему?

    let i = 0;
while (i != 10)
{
    i += 0.2;
    if (i < 15)
    {
        console.log( i );
    }
    else break
}