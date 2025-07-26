// NodeList : Static collection of HTML elements by (id,class,element)
//               Can be created by using querySelectorAll()
//            Similar to an array, but no(map, filter,reduce)
//            Nodelist won't update to automatically reflect changes

// let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// buttons.forEach(button =>{
//     button.style.backgroundColor = "green"
// })

// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.style.backgroundColor = "tomato";
//     })
// })

// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event=>{
//         event.target.style.backgroundColor="rgb(2, 87, 87)"
//     })
// })
// buttons.forEach(button=>{
//     button.addEventListener("mouseout",event=>{
//         event.target.style.backgroundColor="green";
//     })
// })

// Add an element
// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);
// console.log(buttons);
// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

// remove an element
// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.remove();
//         buttons= document.querySelectorAll(".myButtons");
//         console.log(buttons);
//     })
// })

// classlist = element property in JS used to interact with an 
//               element's list of classes (CSS classes)
//               allows you to make reusable classes for many elements
//               across your webpage

// add()
// remove()
// toggle(Remove if present, add if not)
// replace(oldClass,newClass)
// contains()

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover",event =>{
//     event.target.classList.add("hover");
// })

// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.remove("hover");
// })

// myButton.addEventListener("mouseover",event =>{
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("click",event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent+= "!!!";
//     }
//     else{
//     event.target.classList.replace("enabled","disabled");}
// })

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button=>{
    button.classList.add("enabled");
})

buttons.forEach(button =>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover");
    })
})
buttons.forEach(button =>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover");
    })
})
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent+="!!!";
        }
        else{
            event.target.classList.replace("enabled","disabled");
        }
    })
})