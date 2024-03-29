'use strict'
// Декоратор-шпион
// важность: 5
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

function spy(func) {
    // функция-обертка
    function wrapper(...args) {
        wrapper.calls.push(args);     // сохраняем в массив-свойство функции результаты вызовов func
        return func.apply(this, args); // вызывает func
    }
    wrapper.calls = []; // массив
    return wrapper;
}

function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.