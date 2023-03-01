'use strict'
// Хранение отметок "не прочитано"
// важность: 5
// Есть массив сообщений:

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let notReadMessagesWeakSet = new WeakSet(); // выберем WeakSet для хранения непрочитанных сообщений

function storeNotReadMassage(message)
{
    notReadMessagesWeakSet.add(message);
}
for (let message of messages)
{
    storeNotReadMassage(message)
}
console.log(notReadMessagesWeakSet.has(messages[0]))
messages[0] = null
console.log(notReadMessagesWeakSet.has(messages[0]))

// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые
// сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.
// Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для
// ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы
// можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.
// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры
// данных.
// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства.
//     Если сообщения принадлежат какому-то другому коду, то это может привести к плохим
// последствиям.