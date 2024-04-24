'use strict';

// faux database

var users = [];

users.push(new User('Tobi', 2, 'ferret'));
users.push(new User('Loki', 1, 'ferret'));
users.push(new User('Jane', 6, 'ferret'));
users.push(new User('Luna', 1, 'cat'));
users.push(new User('Manny', 1, 'cat'));

//Faux model
function User(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
}

User.all = (fn) => {
    // process.nextTick makes sure this function API
    // behaves in an asynchronous manner, like if it was a real DB query to read all users
    process.nextTick(function() {
        fn(null, users)
    })
}

User.count = (fn) => {
    process.nextTick(() => {
        fn(null, users.length);
    })
}

module.exports = User;
