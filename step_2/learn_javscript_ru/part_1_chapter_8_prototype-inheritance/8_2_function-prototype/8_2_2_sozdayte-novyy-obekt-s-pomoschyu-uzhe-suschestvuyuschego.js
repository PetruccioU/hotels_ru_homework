'use strict'
// Создайте новый объект с помощью уже существующего
// важность: 5
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
// но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример
// функции-конструктора, с которой такой код поведёт себя неправильно.


function Func(prop) {
    this.prop = prop;
}

let obj = new Func('sayHi');
let obj2 = new obj.constructor('it works');

console.log( obj2.prop );


function Func2(prop) {
    this.prop = prop;
}
Func2.prototype = {};
let obj3 = new Func2('sayHi');
let obj4 = new obj3.constructor('will it work');

console.log( obj4.prop );
