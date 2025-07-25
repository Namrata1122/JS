// Error is an object that is created to represent a problem 
//       that occurs
//       Occurs often with user input or establishing a connection.

// Handling Errors : 
// try{ } = Encloses code that might potentially cause an error
// catch{ } = catch and handle any thrown errors from try{ }
// finally { } = (optional) always executes. used mostly for cleanup
//               ex. close files, close connections, release resources

// eg: TypeError - it happens when we try to access something with 
//                 an object that does not exist
//    Uncaught error interrupts the normal flow of the program
// Reference

// When error objects are created : 
//                          1. Network Errors
//                          2. Promise Rejection
//                          3. Security Errors

try{
    console.log("Hello");
}
catch(error){
    console.log(error);
}
finally{
    console.log("Always executes");
}

try{
const dividend = window.prompt("Enter a dividend: ");
const divisor = window.prompt("Enter a divisor: ");

if(divisor == 0){
    throw new Error("You can't divide by zero");
}
if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("Values must be numbers")
}

const result = dividend/divisor;
console.log(result);}
catch(error){
    console.log(error);
}

console.log("ENd");