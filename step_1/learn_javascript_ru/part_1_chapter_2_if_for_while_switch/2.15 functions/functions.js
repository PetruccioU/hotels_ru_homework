'use strict'
console.log('Задача 1:')
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return console.log('Родители разрешили?');
    }
}
function checkAgeAgain(age)
{
    return (age > 18) || console.log('Родители разрешили?');
}
let call = checkAge(15)
let call_again = checkAgeAgain(15)

console.log('')
console.log('Задача 2: min')

function min(a,b)
{
    if (a < b) {return a}
    else {return b}
}
let res = min(4,6)
console.log(res)

console.log('')
console.log('Задача 2: pow')
function pow(x,n)
{
   for (let i=1;i<n;i++)
   {
       x = x * x
   }
   return x
}

let res_pow = pow(3,2)
console.log(res_pow)
