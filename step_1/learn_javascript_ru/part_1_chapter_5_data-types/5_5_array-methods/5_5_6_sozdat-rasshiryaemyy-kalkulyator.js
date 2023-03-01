'use strict'
// Создать расширяемый калькулятор
// важность: 5

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей. Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
// в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
//     Метод должен понимать плюс + и минус -.

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
function Calculator()
{
    this.funcs = {}
    this.funcs['+'] = (a, b) => +a + +b
    this.funcs['-'] = (a, b) => +a - +b
    this.calculate = function(str)
    {
        let arrDivided = str.split(' ')
        let functionName = arrDivided[1]
        let a = arrDivided[0]
        let b = arrDivided[2]
        if (functionName in this.funcs) {
            for (let element in this.funcs) {
                if (functionName === element) {
                    console.log(`Выполним операцию: ${a} ${element} ${b}, ответ:`)
                    return this.funcs[element](a, b);
                }
            }
        }
        else return 'Неизвестная операция!';
        // if (functionName === '+')
        // {
        //     console.log(`Выполним операцию: ${a} ${functionName} ${b}, ответ:`)
        //     return +a + +b
        // }
        // else if (functionName === '-')
        // {
        //     console.log(`Выполним операцию: ${a} ${functionName} ${b}, ответ:`)
        //     return +a - +b
        // }
    }

    this.addMethod = function (name, func)
    {
        this.funcs[name] = func
    }
}

//Пример использования:
console.log('Обычный калькулятор:')
let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("7 - 3") ); // 4

console.log('Расширенный калькулятор:')
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("5 ** 2")); // 25
console.log(powerCalc.calculate("8 / 2")); // 4
console.log(powerCalc.calculate("2 * 3")); // 6
console.log(powerCalc.calculate("2 + 3"))  // 5
// console.log( calc.calculate("3 + 10") ); // 13
console.log(powerCalc.calculate("2 ! 3"))  //
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.









