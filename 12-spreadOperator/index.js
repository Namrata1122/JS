// spread operator represented by ...
//                 ... allows an iterable such as an array 
//                 or string to be expanded
//                 into separate elements
//                 (unpacks the elements)

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// console.log(maximum);
// let minimum = Math.min(...numbers);
// console.log(minimum);
// console.log(numbers);

// let username = "Bro Code";
// let letters = [...username].join(' ');

// console.log(letters);

// let fruits = ["apple","orange","Banana"];
// let veggies = ["carrots","celery","potatoes"];
// let newFruits = [...fruits, ...veggies, "eggs","milk"];

// console.log(newFruits);

// rest parameters = (...rest) allow a function work with a variable
//                    number of arguments by bundling them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 ="Pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1,food2,food3,food4,food5);

const foods = getFood(food1,food2,food3,food4,food5);

console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result;
}

const total = sum(1,2,3,4,5);
console.log(total)