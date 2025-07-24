// console.log(`Hello`);
// console.log(`I like Pizza.`)

// window.alert(`This is an alert`);
// window.alert(`I like Pizza`);

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myp").textContent = `I like pizza`;

// This is a comment

/* 
This is a comment
*/

//variables - a container that stores avalue,
//            behaves as if it were the value it contains

//1. declaration let x;
// 2. assignment x-100;

// NUMBERS
// let  x = 123;
// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(age);
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`your gpa is: ${gpa}`);

// STRINGS
// let firstName = "Sis";
// console.log(typeof firstName);
// console.log(`Your firstname is ${firstName}`);

// BOOLEAN
// let online = true;
// console.log(`Sis is online: ${online}`);

// let fullName ="Sis Code";
// let age = 22;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your Name is ${fullName}`;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = isStudent;

// arithmetic operators - operands (CSSFontFeatureValuesRule, variables, etc)
//                        operators (+ - * /)
//                        ex- 11-x +5;

// augmented assignment operators += -= *= /= **= %=

/* operator precedence 
           1. paranthesis
           2. exponents
           3. multiplication division and modulo
           4. addition & subtraction*/

// let result = 1+2*3 +4**2;
// console.log(result);

//How to accept user input in  JS
// 1. easy way-window prompt

// let username;

// username = window.prompt("What is your name?");

// console.log(username);

// 2. professional way - html textbox
// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
//     console.log(username);
// }

// Type conversion = change the datatype of a value to another (strings, numbers, booleans)

// let age = window.prompt(`How old are you?`);
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//const = a variable that can't be changed
//Capitalizing constants is usually done with primitive datatypes such as numbers and booleans
// reference data types such as strings do not follow this rule.
const PI = 3.14;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle.");
// radius = Number(radius);

// circumference = 2 * PI *radius;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2* PI * radius;
//     document.getElementById("myH3").textContent = circumference +"cm";
// }

// Math = built in object that provides a collection of properties and methods

let x = 3;
let y = 2;
let z = 1;

//z =  Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x,y);
// z= Math.sqrt(x);
// z= Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x,y,z);
// let min = Math.min(x, y, z);

// console.log(z);

//If statements =if a condition is true, execute some code if not,
//               do something else

// let age = 13;
// if(age>=18){
//     console.log("You are old enough to enter this site");
// }
// else{
//     console.log("you are not old enough to enter this site");
// }

// const myText = document.getElementById("myText");
// const mysubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;
// mysubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);
//     if(age>=16){
    
//         resultElement.textContent = "You are old enough to drive";
//     } 
//     else{
//         resultElement.textContent = "You are not old enough to drive";
//     }
// }

// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR = ||
//                     NOT = !

// const temp = -100;

// if(temp>0 && temp<=30){
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("The weather is BAD")
// }

// = assignment operator
// == comaprison operator (Compares if values are equal)
// === strict equality operator(compares if values & datatype are equal)
// != inequality operator
// !== strict inequality operator