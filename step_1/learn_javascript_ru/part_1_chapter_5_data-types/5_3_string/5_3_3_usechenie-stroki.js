'use strict'
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит
// maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
function truncate(str, maxlength)
{
    if (str.length>maxlength) {
        let index=maxlength - 1
        return str.slice(0,index) + "…"
    } else return str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate("Всем привет!", 3))
console.log(truncate("Всем привет!", 20))

