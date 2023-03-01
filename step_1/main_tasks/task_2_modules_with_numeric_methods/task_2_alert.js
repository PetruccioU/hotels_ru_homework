"use strict"
// Задача 2:
// Написать модуль, который способен выполнять операции с числами любой длины.
// 4 метода для сложения, умножения, вычитания и деления.
// 📁 task_2_alerts.js
export function BigSum()
{
    let a = prompt('Введите первое число произвольной длины, для сложения: ',0)
    let b = prompt('Введите второе число произвольной длины, для сложения: ',0)
    let BigA = BigInt(a)
    let BigB = BigInt(b)
    let resultBig = BigA + BigB
    if (resultBig > Number.MAX_SAFE_INTEGER||resultBig < Number.MIN_SAFE_INTEGER) {alert('Результат сложения BigInt: '+resultBig)}
    else alert('Результат сложения Number: '+Number(resultBig))
}

export function BigMul()
{
    let a = prompt('Введите первое число произвольной длины, для умножения: ',0)
    let b = prompt('Введите второе число произвольной длины, для умножения: ',0)
    let BigA = BigInt(a)
    let BigB = BigInt(b)
    let resultBig = BigA * BigB
    if (resultBig > Number.MAX_SAFE_INTEGER||resultBig < Number.MIN_SAFE_INTEGER) {alert('Результат BigInt: '+resultBig)}
    else alert('Результат Number: '+Number(resultBig))
}

export function BigDiff()
{
    let a = prompt('Введите первое число произвольной длины, для вычитания: ',0)
    let b = prompt('Введите второе число произвольной длины, для вычитания: ',0)
    let BigA = BigInt(a)
    let BigB = BigInt(b)
    let resultBig = BigA - BigB
    if (resultBig > Number.MAX_SAFE_INTEGER||resultBig < Number.MIN_SAFE_INTEGER) {alert('Результат BigInt: '+resultBig)}
    else alert('Результат Number: '+Number(resultBig))
}

export function BigDiv()
{
    let a = prompt('Введите первое число произвольной длины, для деления: ',0)
    let b = prompt('Введите второе число произвольной длины, для деления: ',0)
    let BigA = BigInt(a)
    let BigB = BigInt(b)
    let resultBig = BigA / BigB
    if (resultBig > Number.MAX_SAFE_INTEGER||resultBig < Number.MIN_SAFE_INTEGER) {alert('Результат BigInt: '+ resultBig)}
    else alert('Результат Number: '+ Number(resultBig))
}