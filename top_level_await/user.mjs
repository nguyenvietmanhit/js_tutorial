//user.mjs
// Xu ly kieu nay se bi undefined bien users
// let users;
// (async () => {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const response = await fetch(url);
//     users = await response.json();
// })();
//
// export {users};

//
// let users;
//
// export default (async () => {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const response = await fetch(url);
//     users = await response.json();
// }) ();
//
// export {users};

// Top level await
const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
let users = await response.json();

export {users};
