// functions = a section of reusable code
//             declare code once, use it whenever you want
//             call the function to execute that code

// function happyBirthday(username, age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}` );
//     console.log("Happy Birthday to you!");
//     console.log(`you are ${age} years old`);
// }

// happyBirthday("Nimmi", 22);

// function add(x, y){
//     return x+y;
// }

// console.log(add(3,4));


// variable scope - where a variable is recognized
//                  and accessible (local vs global)

// function2();

// function function1(){
//     let x= 1;
//     console.log(x);
// }

// function function2(){
//     let y =2;
//     console.log(y);
// }

// ---------------CALLBACK FUNCTIONS-------------------------
// a function that is passed as an argument to another function

// used to handle asynchronous operations
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

//  "Hey when you are done call this next"
// hello(goodbye);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }
// function goodbye(){
//     console.log("Goodbye!");
// }

// sum(displayPage,1,2);

// function sum(callback, x, y){
//     let result=x+y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

// ----------------forEach()-----------------------
// method used to iterate over the elements of an array and apply a 
// specified function (callback) to each element

// array.forEach(callback);

// let numbers=[1,2,3,4,5];

// numbers.forEach(square);
// // numbers.forEach(double);
// numbers.forEach(display);

// // function double(element, index, array){
// //     array[index] = element *2;
// // }

// function square(element, index, array){
//     array[index]=Math.pow(element,2);
// }

// function display(element){
//     console.log(element);
// }

// let fruits =["apple","orange","banana","coconut"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element,index,array){
//     array[index] = element.toUpperCase();
// }

// function capitalize(element,index,array){
//     array[index]= element.charAt(0).toUpperCase()+element.slice(1);
// }

// function display(element){
//     console.log(element);
// }

// ------------------map() method------------------
// accepts a callback and applies that function to each element
// of an array, then return a new array

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element){
//     return Math.pow(element,2);
// }

// const students = ["spongebob","patrick","squidward","sandy"];

// const studentsUpper = students.map(uppercase);

// console.log(studentsUpper);

// function uppercase(element){
//     return element.toUpperCase(element);
// }

// const dates = ["2024-1-10","2025-2-20","2026-3-30"];
// console.log(dates.map(formatDates));

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// ------------------filter() method----------------
// creates a new array by filtering out elements

// let numbers=[1,2,3,4,5,6,7];

// let evenNums = numbers.filter(isEven);

// console.log(evenNums);

// function isEven(element){
//     return element%2 ===0;
// }

// const ages = [16,17,18,19,20,60];

// console.log(ages.filter(isAdult));

// function isAdult(element){
//     return element>=18;
// }

// const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];

// console.log(words.filter(getShortWords));
// console.log(words.filter(getLongWords));

// function getShortWords(element){
//     return element.length<=6;
// }

// function getLongWords(element){
//     return element.length>=6;
// }

// ----------------------reduce() method-----------------
// reduce the elements of an array to a single value

// const prices =[102,123,45,78,89];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element){
//     return accumulator+element;
// }

// function sum1(prevElement, nextElement){
//     return prevElement+nextElement;
// }

// const grades = [75,50,90,80,65,95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(maximum);
// console.log(minimum);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }
// function getMin(accumulator, element){
//     return Math.min(accumulator, element);
// }

// ----------------FUNCTION EXPRESSIONS---------------
// function declarations -> define a reusable block of code
//                          that performs a specific task
// function sum(x,y){
//     return x+y;
// }

// function expressions -> a way to define functions as 
//                         values or variables

// 1.Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures 
// 4. Event Listeners

// const hello = function(){
//     console.log("Hello!");
// }

// setTimeout(function(){
//     console.log("Hello!");
// },3000)

// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map(function(element){
//     return Math.pow(element,2);
// });
// console.log(squares);

// const evenNums = numbers.filter(function(element){
//     return element%2===0;
// })

// const total = numbers.reduce(function(accumulator,element){
//     return accumulator+element;
// })
// console.log(total);

// arrow functions -> a concise way to write function expressions 
//                   good for simple functions that you use only once
//                   (parameters)=> some code

// const hello=(name) => console.log(`Hello ${name}`);

// const hello=(name,age) => {console.log(`Hello ${name}`);
//                         console.log(`You are ${age} years old`)}

// hello("Bro",22);

// setTimeout(()=>console.log("Hello"),3000);

const numbers =[1,2,3,4,5,6];

const squares = numbers.map((element)=>Math.pow(element,2));
console.log(squares);

