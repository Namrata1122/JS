// Callback Hell -> Situation in JS where callbacks are nested 
//                  with other callbacks to the degree where the
//                  code is difficult to read.
//                  Old pattern to handle asynchronous functions.
//                  use promises +async/await to avaoid Callback Hell

// function task1(callback){
//     setTimeout(()=>{console.log("task 1 complete")
//             callback();        
//     },2000);
// }
// function task2(callback){
//     setTimeout(()=>{
//         console.log("Task 2 complete");
//         callback();}
//         ,1000);
// }
// function task3(callback){
//     setTimeout(()=>{console.log("Task 3 Complete");
//         callback()},
//         3000)
// }
// function task4(callback){
//     setTimeout(()=>{console.log("Task 3 Complete");
//         callback()},
//         3000)
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All tasks complete");
//             })
//         })
//     })
// })

// Promise = an object that manages asynchronous operations.
//           wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//            PENDING -> RESOLVED or REJECTED
//            new Promise((resolve, reject)=>{asynchronous code})

// DO these chores in order
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

// -----------------using callback hell----------------
// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("You walk the dog.");
//         callback();
//     },1500);
// }
// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("You clean the kitchen");
//         callback();
//     },2500);
// }
// function TakeOutTrash(callback){
//     setTimeout(()=>{
//         console.log("You take out the trash");
//         callback();
//     },5000);
// }

// walkDog(()=>{
//     cleanKitchen(()=>{
//         TakeOutTrash(()=>console.log("You finished all the chores!"));
//     })
// })

// ------------using promises-------------
// function walkDog(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const dogwalked = true;
//             if(dogwalked){
//                 resolve("You walk the dog.");
//             }else{
//                 reject("You DID'NT walk the dog");
//             }
//         },1500);
//     });
// }
// function cleanKitchen(callback){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const kitchenCleaned = true;
//             if(kitchenCleaned){
//                 resolve("You clean the kitchen");
//             }else{
//                 reject("You did'nt clean the kitchen");
//             }
//     },2500);
//     })
// }
// function TakeOutTrash(){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const trashtakenout = false;
//             if(trashtakenout){
//                 resolve("You take out the trash");
//             }else{
//                 reject("You didn't take out trash");
//             }
        
//     },5000);
//     })
// }

// // with promises we use method chaining
// walkDog().then(value=>{console.log(value);return cleanKitchen()})
//           .then(value=>{console.log(value);return TakeOutTrash()})
//           .then(value=>{console.log(value); console.log("You finished all the chores");})
//           .catch(error=>console.error(error));

// async/await  = Async -> makes a function return a promise
//              = Await -> makes an async function wait for a promise

//              Allows you to write asynchronous code in a 
//              synchronous manner
//              async doesn't have resolve or reject prameters
//              everything after await is placed in an event queue

function walkDog(){

    try{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const dogwalked = false;
            
            if(dogwalked){
                resolve("You walk the dog.");
            }else{
                reject("You DID'NT walk the dog");
            }
        },1500);
    });}
    catch(error){
        console.error(error);
    }
}
function cleanKitchen(callback){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }else{
                reject("You did'nt clean the kitchen");
            }
    },2500);
    })
}
function TakeOutTrash(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashtakenout = false;
            if(trashtakenout){
                resolve("You take out the trash");
            }else{
                reject("You didn't take out trash");
            }
        
    },5000);
    })
}

async function doChores(){

    const walkDogResult = await waitDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await TakeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");
}

doChores();