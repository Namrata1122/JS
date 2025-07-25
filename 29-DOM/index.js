// DOM - Document Object MOdel
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JS can access the DOM to dynamically
//       change the content, structure, and style of a web page

// document.title = "MyWEbsite"
// document.body.style.backgroundColor = "grey"

// const username = "Sis Code";
// const welcomemsg = document.getElementById("welcome-msg");

// welcomemsg.textContent+= " " + username===""?`Guest` :username;

// console.log(document);
// console.dir(document);

// Element selectors in JS -
// Methods used to target and manipulate HTML elements.
//They allow you to select one or multiple HTML element
// from the Dom (DOcument Object Model)

// 1. document.getELementById()        //Element or null
// 2. document.getElementsByClassName() //HTML collection // live, gets updated in DOm automatically
// 3. document.getElementsByTagName()  //HTML collection
// 4. document.querySelector()        // Element or null //we can select a class or a tag name
// 5. document.querySelectorAll()     //Nodelist // static, has its built-in methods, do not update automatically in DOM

// const myHeading = document.getElementById("myH1");
// myHeading.style.backgroundColor = "yellow";

// const fruits = document.getElementsByClassName("fruits") ;
// console.log(fruits);
// console.log(fruits[0]);
// fruits[2].style.backgroundColor = "yellow";

// for(let fruit of fruits){
//     fruit.style.backgroundColor ="Orange";
// }

// Array.from(fruits).forEach(fruit =>{
//     fruit.style.backgroundColor="red";
// })
// const h4Elements = document.getElementsByTagName("h4");
// console.log(h4Elements)

// h4Elements[0].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow"
// }

// const foods = document.querySelectorAll("li");
// console.log(foods)

// DOM Navigation = The process of navigating through the 
//                  structure of an HTML document using JS

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// -------------- .firstElementChild----------

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor ="yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement =>{
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor ="yellow";
// })

// ----------------.lastElementChild------------
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor ="orange";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement=>{
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "orange";
// })

// ---------------.nextElementSibling---------------
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// const element = document.getElementById("veggies");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// ------------------.previuosElementSibling------------
// const element = document.getElementById("onions");
// const previousSibling = element.previousElementSibling;
// console.log(previousSibling);

// ---------------.parentElement--------------

// --------------.children------------------

// ----------------ADD/CHANGE HTML using JS--------------

// step 1 : create the element
// const newH1 = document.createElement("h1");

// step 2 : add attributes/properties
// newH1.textContent="I like Pizza";
// newH1.id = "myH1";
// newH1.style.color ="tomato";
// newH1.style.textAlign ="center";

// step 3 : append element to DOM
// document.body.append(newH1);
//document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1,box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);

// Remove HTML element
// document.body.removeChild(newH1);


const newListItem = document.createElement("li");
newListItem.textContent = "cocunut";
newListItem.id="coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="lightgreen";
// document.body.append(newListItem);
//document.getElementById("fruits").prepend(newListItem);
// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem,listItems[1]);

document.getElementById("fruits").removeChild(newListItem);