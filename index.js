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

//Constructor mode test: new.target
// -------------------------------------

function Listing() {
  console.log(new.target);
}

//without 'new' keyword;
Listing(); //// undefined

//with 'new' keyword;
new Listing(); //// function User { ... }
//That can be used inside the function to know whether it was called with new, “in constructor mode”, or without it, “in regular mode”.

function Listing1(name) {
  if (!new.target) {
    // // if you run me without new
    return new Listing1(name); //// ...I will add new for you
  }

  this.name = name;
}

let johana = Listing1('Johana'); //// redirects call to new User
console.log(johana.name); //Johana
//This approach is sometimes used in libraries to make the syntax more flexible. So that people may call the function with or without new, and it still works.

// Return from constructors
// *****************************************

//Usually, constructors do not have a `return` statement. Their task is to write all necessary stuff into `this`, and it automatically becomes the result.

//But if there is a `return` statement, then the rule is simple:

// (i) If return is called with an object, then the object is returned instead of `this`.
// (ii) If return is called with a primitive, it’s ignored.

//In other words, return with an object returns that object, in all other cases `this` is returned.
function BigUser() {
  this.name = 'John';

  // return { name: 'Godzilla' }; // <-- returns this object
  return; // <-- returns this
}

console.log(new BigUser().name); // Godzilla, got that object
// John --> with just `return`;

// *** Usually constructors don’t have a return statement.***

// Omitting parentheses
// ------------------------------------

// Omitting parentheses here is not considered a “good style”
// if constructor has no arguments, we can omit parentheses after new:
let big1 = new BigUser(); // <-- no parentheses

// big1 is same as:
let big2 = new BigUser();
console.log(big1); //{name: "Godzilla"}
console.log(big2); //{name: "Godzilla"}

// Methods in constructor
// ***********************************************

// The constructor function may have parameters that define how to construct the object, and what to put in it.

// Of course, we can add to this not only properties, but methods as well.

function MyUser(name) {
  this.name = name;

  this.sayHi = function () {
    console.log(`My name is: ${this.name}`);
  };
}

let myUser1 = new MyUser('James');
myUser1.sayHi(); //My name is: James

console.log(myUser1);
/* 
myUser1 = {
   name: "James",
   sayHi: function() { ... }
}
*/

// TASKS
// *************************************

//1. Two functions – one object
// -----------------------------------

// Is it possible to create functions A and B so that new A() == new B()?
let obj = {};

function A(){ return obj;}
function B(){ return obj;}

console.log(new A() == new B());  //true
// If a function returns an object then new returns it instead of this.

