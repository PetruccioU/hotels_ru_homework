'use strict'
// Преобразуйте объект в JSON, а затем обратно в обычный объект
// важность: 5
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

    let user = {
    name: "Василий Иванович",
    age: 35
};
console.log(user)
let userJSON = JSON.stringify(user)
console.log(userJSON)
let userJSONtoObject=JSON.parse(userJSON)
console.log(userJSONtoObject)








