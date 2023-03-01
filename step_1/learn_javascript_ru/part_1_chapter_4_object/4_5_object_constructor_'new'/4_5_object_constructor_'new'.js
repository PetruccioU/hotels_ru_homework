"use strict"
console.log('Задача 1:')
let obj = {name:'obj'}
function A() { return obj; }
function B() { return obj; } // возвращаем один и тот же объект obj

let a = new A();
let b = new B();

console.log( a === b ); // true

console.log('Задача 2:')
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
function Calculator()
{
    this.read = function(one,two)
    {
        this.one = [one];
        this.two = [two];
    };
    this.sum = function()
    {
        return 1*this.one + 1*this.two;
    };
    this.mul = function()
    {
        return this.one * this.two;
    }
}
let calculator = new Calculator();
calculator.read(4,6);

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

console.log('Задача 3:')
// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:
function Accumulator(startingValue)
{
    this.value = startingValue;
    this.read = function(add)
    {
        this.value = this.value + add
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(6); // прибавляет значение "2" к текущему значению.
accumulator.read(16); // прибавляет значение "4" к текущему значению.

console.log(accumulator.value); // выведет сумму этих значений
