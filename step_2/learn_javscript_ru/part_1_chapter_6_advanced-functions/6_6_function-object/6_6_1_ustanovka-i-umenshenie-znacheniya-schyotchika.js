'use strict'
// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

//     counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика,
// можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

function makeCounterProperty()
{
    function counter()
    {
        return counter.count++;
    }

    counter.set = function (value)
    {
        return counter.count = value;
    }

    counter.decrease = function ()
    {
        return counter.count--;
    }

    return counter;
}

let counterA = makeCounterProperty();

counterA.count = 10
counterA.decrease()
console.log(counterA())
counterA.set(5)
console.log(counterA())
console.log(counterA())

console.log(' ')

function makeCounterClosure()
{
    let count = 0
    function counter()
    {
        return count++;
    }

    counter.set = function (value)
    {
        return count = value;
    }

    counter.decrease = function ()
    {
        return count--;
    }
    return counter;
}

let counterB = makeCounterClosure();

counterB.count = 10  // свойство count - недоступно при замыкании
counterB.decrease()
console.log(counterB())
counterB.set(5)
console.log(counterB())
console.log(counterB())



