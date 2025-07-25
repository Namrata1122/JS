// synchronous - executes line by line consecutively in a sequential manner
//               code that waits for an operation to complete

// asynchronous - allows multiple operations to be 
//                performed concurrently without waiting
//                doesn't block the execution flow and 
//                allows the program to continue
//                (I/O operations, network requests. fetching data)
//                handled with : Callback, promises, asych/await


function func1(callback){
    setTimeout(()=>{console.log("Task1");
        callback();
    },3000);
}

function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
}

func1(func2);