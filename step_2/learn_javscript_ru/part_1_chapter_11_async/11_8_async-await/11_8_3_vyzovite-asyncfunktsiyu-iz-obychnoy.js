'use strict'
// Вызовите async–функцию из "обычной"
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        return 10;
    }

    function f() {
        //if(!wait()){wait().then((r) => {return r})}
        wait().then((r) => {console.log(r)})
        // ...что здесь написать?
        // чтобы вызвать wait() и дождаться результата "10" от async–функции
        // не забывайте, здесь нельзя использовать "await"
    }
// P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await.

f();
