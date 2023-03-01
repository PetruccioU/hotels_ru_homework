"use strict"
// Задача 5:
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:

function getMaxSubSum(arr)
{
    let arrRes = []
    let sum = 0;
    for (let item of arr)
    {
        sum += item;
        arrRes.push(+sum);
        if (sum < 0) sum = 0;
    }
    let result = 0
    for (let elem of arrRes)
    {
        if (elem > result) {result=elem}
    }
    return result
}

console.log(getMaxSubSum([-1, 2, 3, -9]))          //== 5 (сумма выделенных элементов)
console.log(getMaxSubSum([2, -1, 2, 3, -9]))       //== 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))      //== 11
console.log(getMaxSubSum([-2, -1, 1, 2]))          // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]))    //== 100
console.log(getMaxSubSum([1, 2, 3]))                //== 6 (берём все)

//Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:







