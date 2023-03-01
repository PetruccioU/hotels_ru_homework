'use strict'

// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?
console.log('Задача 1:')
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name );


console.log(' ')
console.log('Задача 2:')
// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
    read(one,two)
    {
        this.one = [one];
        this.two = [two];
    },
    sum()
    {
            return 1*this.one + 1*this.two;
    },
    mul()
    {
        return this.one * this.two;
    }
};
calculator.read(2,4);
console.log('Состав объекта:');
console.log(calculator);
console.log('Сумма: ' + calculator.sum() );
console.log('Произведение: ' + calculator.mul() );


console.log(' ')
console.log('Задача 3:')
// Цепь вызовов
// важность: 2
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript.

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;     // возвращает контекст
    },
    down() {
        this.step--;
        return this;     // возвращает контекст
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
        return this;     // возвращает контекст
    }
};

ladder.up().up().down().showStep().down().showStep();



