// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scopes of the outer function.
//  Allow for private variables and state maintenance
//  Used frequently in JS frameworks: React, Vue, Angular

// any variable inside the outer function is considered private
// using closures we can encapsulate variables and make them private.
// function outer(){
//     let message="Hello!";

//     function inner(){
//         console.log(message);
//     }
//     inner();
// }

// outer();

// function createCounter(){
//     let count = 0;
//     function increment(){
    
//         count++;
//         console.log(`Count increased to ${count}`);
//     }
//     function getCount(){
//         return count;
//     }
//     //return {increment:increment}; // we return an object having property 
//                         // increment and its associated value 
//                         // will be a reference to increment
//     // or use shorthead version where we use function name as property.
//     return {increment,getCount};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();

// counter.count =0;
// console.log(count);


function createGame(){
    let score = 0;

function increaseScore(points){
    score+=points;
    console.log(`+${points}pts`);
}
function decreaseScore(points){
    score-=points;
    console.log(`-${points}pts`);
}
function getScore(){
    return score;
}
return {increaseScore,decreaseScore,getScore};
}

const game = createGame();
game.increaseScore(5);
game.decreaseScore(4);
game.getScore();
