//ternary operator - shortcut to if() and else() statements 
//                   helps to assign a variable based on a condition 
//                   condition ? codeIfTrue : codeIfFalse;

// let age = 21;
// let message = age>=18?"You're an adult" : "You're a minor";
// console.log(message);


// SWITCH-CASE - can be an efficient replacement to many if-else statements

let day = 1;

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}