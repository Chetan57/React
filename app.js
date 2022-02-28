// 28/02/2022 Monday
//import { sellApple } from "./sell";
//sellApple();

import { customerName as s } from "./customer";

console.log(s);
// let and constant


import { person } from "./sell";
console.log(person);

// In java script var value can be changed
var names ="chetan dhiman";
names ="DHiman";
console.log(names);

// In new Es7 
let namesd ="React Tutorial";
namesd ="React";
console.log(namesd);

// arrow function

// simple function but we use arrow function in react with let then function name 
// then if we have one or more paramter then we use it in paramter if it 
// is single then we use it as single then we have the arrow which define the fucntion
// if we have more than one line in our code then we have to use curly braces 
// other we can use it in single line 
function sayName(){
    console.log("Chetan Dhiman");
}

sayName();

//  We can use this syntax when we have more than one paramter 
//and multiple lines in the function
let newFunction=() =>{
    console.log("Hello Chetan");
}

//  Arrow Function in single line when we have only one line of code we can define
// that function in one line for example
let doubleTheNumber = num => num*num;

console.log(doubleTheNumber(4));

newFunction();



//  Import and Export (Modules)



// Using here function of sell.js file this is known as import and export of modules from one class to
// another

