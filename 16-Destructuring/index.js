// DESTRUCTURING = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {}  = to perform object destructuring

// --------example1------
// swap the value of two variables
let a =1;
let b=2;

// on L.H.S we are using destructuring 
// and on the R.H.S we are creating an array
[a,b] =[b,a];

console.log(a);
console.log(b);

// swap two elements in an array
const colors = ["red","green","blue","black","white"];

[colors[0],colors[4]] = [colors[4],colors[0]];

console.log(colors);

// assign array elements to variables

const [firstcolor,secondcolor,thirdcolor,...extracolors] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({firstName,lastName,age,job = "unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

//extract values from objects
const person1 = {
    firstName : "spongebob",
    lastName : "squarepants",
    age: 30,
    job: "cook",
}
const person2 = {
    firstName : "Patrick",
    lastName : "sandy",
    age: 34,
}
const {firstName, lastName, age, job="unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


displayPerson(person2);