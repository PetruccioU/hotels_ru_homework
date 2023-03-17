'use strict'
// Числа Фибоначчи
// важность: 5
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
//
//     Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
//
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
//
//     Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
//
//     Пример работы:
//
//     function fib(n) { /* ваш код */ }
//
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

function fibRec(n)
{
    if (n == 1||n == 2) {return 1}
    else {
        let fibi = fibRec(n-2) + fibRec(n-1)
        return fibi
    }
}

console.log(fibRec(3))
console.log(fibRec(4))
console.log(fibRec(5))
console.log(fibRec(6))
console.log(fibRec(7))
console.log(fibRec(8))
// console.log(fibRec(60))

function fibFor(n)
{
    let a= 0
    let b = 1
    for (let i = 0; i <= n; i++)
    {
        let c = b
        b = a + c;
        a = c
    }
    return b
}

console.log('!!!')

console.log(fibFor(3))
console.log(fibFor(4))
console.log(fibFor(5))
console.log(fibFor(6))
console.log(fibFor(7))
console.log(fibFor(8))
console.log(fibFor(75))
//alert(fib(77)); // 5527939700884757

