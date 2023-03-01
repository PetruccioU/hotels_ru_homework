'use strict'
// Класс расширяет объект?
// Важность: 3
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.
// Пример:

// class Rabbit {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// let rabbit = new Rabbit("Rab");
// console.log( rabbit.hasOwnProperty('name') ); // true


// метод hasOwnProperty от Object.prototype
// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться
// от обычного "class Rabbit"?
// В чем разница?
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); // Ошибка
console.log( rabbit.name);