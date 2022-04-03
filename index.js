// Import stylesheets
import './style.css';

// Consructor function
// ****************************************

//They are named with capital letter first.
// They should be executed only with "new" operator.
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user1 = new User('Jack');
console.log(user1.name); //Jack
console.log(user1.isAdmin); //false

user1.isAdmin = true;
// So let user = new User("Jack") gives the same result as:
/*
let user = {
  name: "Jack",
  isAdmin: false
};
*/
// Now, we can create several other users
let user2 = new User('Lulu');
let user3 = new User('Zachary');

// new function() { … }
// --------------------------------------

// If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:
// create a function and immediately call it with new
let myUser = new (function () {
  this.name = 'John';
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();

console.log(myUser); // {name: "John", isAdmin: false}
// This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.
