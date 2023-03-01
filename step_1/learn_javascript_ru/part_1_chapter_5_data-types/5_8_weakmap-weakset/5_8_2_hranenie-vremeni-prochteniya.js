'use strict'
// Хранение времени прочтения
// важность: 5
// Есть массив сообщений такой же, как и в предыдущем задании.

    let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let dateReadMessagesWeakMap = new WeakMap(); // выберем WeakSet для хранения непрочитанных сообщений

function storeDateReadMassage(message)
{
    dateReadMessagesWeakMap.set(message, new Date());
}
for (let message of messages)
{
    storeDateReadMassage(message)
}
console.log(dateReadMessagesWeakMap.get(messages[0]))
console.log(dateReadMessagesWeakMap.get(messages[1]))
console.log(dateReadMessagesWeakMap.get(messages[2]))
messages[0] = null
console.log(dateReadMessagesWeakMap.has(messages[0]))
console.log(dateReadMessagesWeakMap.has(messages[1]))
console.log(dateReadMessagesWeakMap.has(messages[2]))
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения
// информации о том, когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь
// же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора»
// сообщения.
// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы
// разберём позднее.