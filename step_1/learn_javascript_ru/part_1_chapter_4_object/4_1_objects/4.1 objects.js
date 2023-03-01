// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.
console.log('Задача 1');
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

console.log('Задача 2');

function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}

emptyObj={};
notemptyObj={name: "John",
    age: 30,
    isAdmin: true};

console.log(isEmpty(emptyObj))
console.log(isEmpty(notemptyObj))

console.log('Задача 3');
const user_1 = {
    name: "John"
};
// это будет работать?
user_1.name = "Pete";
console.log(user_1.name);

console.log('Задача 4');
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let salaries_1 = {
    John: 100,
    Ann: 160,
}
let salaries_0 = {

}
sum = function(source)
{
    let res = 0
    for (let key in source) {
        res = res + source[key]
    }
    return res
}
console.log(sum(salaries));
console.log(sum(salaries_1));
console.log(sum(salaries_0));



console.log('Задача 5');
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект
// P.S. Используйте typeof для проверки, что значение свойства числовое.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj)
{
    for (let key in obj) {
        if (typeof(obj[key]) == "number") {obj[key]=obj[key]*2}
    }
}

multiplyNumeric(menu)
console.log(menu)
