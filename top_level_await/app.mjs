//app.js
// Khi 1 module import 1 module ma co top level await, no phai cho module do execute xong moi thuc thi code ben trong no
import {users} from "./user.mjs";

function render(users) {
    if (!users) {
        throw 'The user list is not available';
    }

    const list = users.map((user) => {
        return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
    })
        .join('');

    return `<ol>${list}</ol>`;
}

const container = document.querySelector('.container');
try {
    container.innerHTML = render(users);
} catch (e) {
    // show ra loi vi user.mjs dang pending khi call api nen bien users bi undefined
    // Sau khi sua user.mjs thanh top level await thi se chay dc
    container.innerHTML = e;
}


// import promise, { users } from './user.mjs';
// function render(users) {
//     if (!users) {
//         throw 'The user list is not available';
//     }
//     let list = users
//         .map((user) => {
//             return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
//         })
//         .join('');
//     return `<ol>${list}</ol>`;
// }
//
// promise.then(() => {
//     let container = document.querySelector('.container');
//     try {
//         container.innerHTML = render(users);
//     } catch (error) {
//         container.innerHTML = error
//     }
// })
