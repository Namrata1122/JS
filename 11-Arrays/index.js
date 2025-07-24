// array = a variable like structure that can hold more than 1 value

// let fruits = ["apple","orange","banana"];

// fruits[2]="coconut";

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

// let numOfFruits = fruits.length;
// console.log(numOfFruits);

// let index = fruits.indexOf("mango");
// console.log(index);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// console.log(fruits.sort().reverse());

// for(let fruit of fruits){
//     console.log(fruit);
// }

// 2D array = multi-dimensional array that stores a matrix
//            of data in rows and columns
//            useful for games, spreadsheets, or representing images

// const matrix = [[1,2,3],
//                 [4,5,6],
//                 [7,8,9],
//                 ['*',0,'#']];

// matrix[0][0] = 'x';
// matrix[0][1] = 'o';

// for(let row of matrix){
//     const rowString = row.join(' ');
//     console.log(rowString);
// }


// -------Arrays of Objects-----------------

// const fruits=[{name:"apple",color:"red",calories:95},
//     {name:"orange",color:"orange",calories:45},
//     {name:"banana",color:"yellow",calories:105},
//     {name:"coconut",color:"white",calories:159},
//     {name:"pineapple",color:"yellow",calories:37},
// ]

// fruits.push({name:"grapes",color:"green",calories:34});
// fruits.pop();

// console.log(fruits[0].name)
// console.log(fruits)

// fruits.forEach(fruit => console.log(fruit.name));

// const fruitNames = fruits.map(fruit=> fruit.name);
// console.log(fruitNames);

// const yellowFruits = fruits.filter(fruit => fruit.color ==="yellow");
// console.log(yellowFruits);

// const maxFruit = fruits.reduce((max, fruit)=> 
//     fruit.calories >max.calories?fruit:max);
// const minFruit=fruits.reduce((min,fruit)=>
//     fruit.calories <min.calories?fruit:min);

// console.log(maxFruit)
// console.log(minFruit);

// -----------------sort()---------------
// sort() - method used to sort elements of an array in place.
//          sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet+numbers+symbols) as strings.

// let fruits = ["apple","orange","banana","coconut","pineapple"];

// fruits.sort();

// console.log(fruits);

// let numbers = [1,10,9,3,2,4,5,6,9,7,8];
// numbers.sort((a,b)=>a-b);
// console.log(numbers);
// numbers.sort((a,b)=>b-a);
// console.log(numbers);


// const people=[{name:"spongebob",age:30,gpa:3.0},
//     {name:"Patrick",age:37,gpa:1.5},
//     {name:"Squidward",age:51,gpa:2.5},
//     {name:"Sandy",age:27,gpa:4.0},
// ]

// people.sort((a,b)=>a.age-b.age);
// console.log(people);

// people.sort((a,b)=>b.name.localeCompare(a.name));
// console.log(people)

// ---------------Shuffle an array---------------

const cards = ['A',2,3,4,5,6,7,8,9,10,'j','q','k'];

console.log("Using sort() method");
cards.sort(()=>Math.random() -0.5);
console.log(cards);

// time complexity of sorting : O(n logn)
// while shuffling can be done in O(n)

//  using Fisher-Yates algorithm
shuffle(cards);
console.log(cards);

function shuffle(array){
    for(let i= array.length -1;i>0;i--){
        const random = Math.floor(Math.random() *(i+1) );

       [ array[i], array[random] ]= [array[random],array[i]];
    }
    return array;
}
