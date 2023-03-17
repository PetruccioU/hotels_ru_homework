'use strict'
// Перепишите, используя async/await
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

async function loadJson(url) {
    try {
        let response = await fetch(url);
        return response.json();
    }
    catch(err) {
        console.log(err);
    }
}
//
// function loadJson1(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }


loadJson('no-such-user.json') // (3)
    .catch(console.log); // Error: 404

