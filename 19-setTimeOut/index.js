// setTimeout() = function in javascript that allows you to schedule
//                the execution of a function after an amount 
//                of time (milliseconds)
//                Times are approximate (varies based on the workload
//                 of the javascript runtime env.)

//                 setTimeout(callback,delay);

// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello,3000);

//                  anonymous function
// setTimeout(function(){window.alert("Hello")},4000);

//                   arrow function
// setTimeout(()=>window.alert("Goodbye!"), 5000);

// clearTimeOut(timeoutId) = can cancel a timeout before it triggers
// const timeoutId = setTimeout(()=>window.alert("Goodbye!"), 3000);
// console.log(timeoutId);
// clearTimeout(timeoutId);

let timeoutId;
function startTimer(){
    timeoutId= setTimeout(()=>window.alert("Hello"),3000);
    console.log("start");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("clear");
}