//eventListener = listen for specific events to create interacive web pages
//                mouse events: click, mouseover, mouseout
//                .addEventListener(event, callback);

// const myBox=document.getElementById("myBox");
// const myBtn=document.getElementById("myBtn");

// function changeColor(event){ //event is an object that is provided by web browser
//     // console.log(event);
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent ="Ouch!";
// }

// myBox.addEventListener("click",changeColor);

// myBox.addEventListener("click", event=>{
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent ="Ouch!";
// })

// myBox.addEventListener("mouseover",event=>{
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent ="Don't do it!";
// })

// myBox.addEventListener("mouseout",event=>{
//      event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent ="click me ";
// })

// myBtn.addEventListener("click", event=>{
//     myBox.style.backgroundColor = "tomato";
//     myBox.textContent ="Ouch!";
// })

// myBtn.addEventListener("mouseover",event=>{
//     myBox.style.backgroundColor = "yellow";
//     myBox.textContent ="Don't do it!";
// })

// myBtn.addEventListener("mouseout",event=>{
//     myBox.style.backgroundColor = "lightgreen";
//     myBox.textContent ="click me ";
// })

// key events: keydown, keyup

// document.addEventListener("keydown",event => {
//     console.log(event.key);
// });
// document.addEventListener("keyup",event=>{
//     console.log(event.key);
// });

const myBox =document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown",event => {

    
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})