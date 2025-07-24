// while loop - repeat some code while some condition is true

// let username = "";

// while(username ==="" || username === null){
//     username = window.prompt("Enter your name");
// }
// console.log(`Hello ${username}`);

// do{
//     username = window.prompt("Enter your name");
// }while(username ==="" || username === null)

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your pasword");

//     if(username=== "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in");
//     }
//     else{
//         console.log("Invalid credentials");
//     }
// }

// for loop = repeat some code a limited amout of times

for(let i = 0; i<=20; i++){

    if(i==13){
        continue;
    }else{
        console.log(i);
    }
    
}

// continue - we can skip an iteration
// break - come out of the loop