// Object -> collection of related properties and/or methods
//           Can represent real world objects (people, products, places)
//           object = {key:value, function()}

// const person = {
//     firstName:"spongebob",
//     lastName:"squarepants",
//     age: 30,
//     isemployed: true,
//     sayHello:function(){console.log(`Hi! I am ${person.firstName}`)},
//     eat:()=>console.log("I am eating a crabby patty")
// }

// console.log(person.firstName);
// person.sayHello();
// person.eat();

// ----------------------THIS KEYWORD------------------------
// THIS -> REFERENCE TO THE OBJECT WHERE THIS IS USED
//           (the object depends on the immediate context)
//           person.name = this.name

// const person1 ={
//     firstName:"spongebob",
//     lastName:"squarepants",
//     age: 30,
//     isemployed: true,
//     sayHello:function(){console.log(`Hi! I am ${this.firstName}`)},
//     eat:()=>console.log("I am eating a crabby patty")
// }

// THIS KEYWORD DOES NOT WORK WITH ARROW FUNCTIONS -> because 
//                 the arrow function is tsill pointing to the 
//                 window function

// console.log(this); // WE ARE ALREADY INSIDE THE WINDOW FUNCTION

// -------------------Constructor-----------------
// special method for defining the properties and methods of objects

// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
//     this.drive =function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new Car("Ford","Mustang",2024,"red");
// const car2 = new Car("Chevrolet","Camaro",2025,"blue");

// console.log(car1.make);
// console.log(car1.model);

// car1.drive();
// car2.drive()

// --------------------------CLASS ---------------------------
// (ES6 feature) provides a more structured and cleaner way to work with 
// objects compared to traditional constructor function
// ex: static keyword, encapsulation, inheritance

//  class - blueprints

// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`price: ${this.price}`);
//     }

//     calculateTotal(salesTax){
//         return this.price +(this.price + salesTax);
//     }
// }

// const salesTax = 0.05;
// const product1 = new Product("Shirt",19.99);
// const product2 = new Product("Pants",22.50);

// product1.displayProduct();

// const total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`)

// ------------------STATIC KEYWORD----------------
// static keyword that defines properties or methods that belong
// to a class itself rather than the objects created from 
// that class (class owns anything static, not the object)

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius*2;
//     }

//     static getcircumference(radius){
//         return 2*this.PI*radius;
//     }
// }

// // we dont need to create an object to access static properties and methods
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getcircumference(5))


// class User{
//     static userCount =0;
//     constructor(userName){
//         this.username = userName;
//         User.userCount++;
//     }
//     static getUserCOunt(){
//         console.log(`There are ${User.userCount} users online`);
//     }
//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`);
//     }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");

// User.getUserCOunt();
// user1.sayHello();
// console.log(user1.username);
// console.log(User.userCount);

// ----------------INHERITANCE------------------------
// Inheritance = allows a new class to inherit properties and
// methods from an existing class (parent ->child)

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal{
//     name="Rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
//     name="Fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
//     name="Hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish;
// const hawk = new Hawk;

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep()
// rabbit.run()

// -----------------SUPER KEYWORD ------------------------
// super - keyword is used in classes to call the constructor
// or access the properties and methods of a parent (superclass)
//             this - this object
//             super - the parent


// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`The ${this.name} moves at speed of ${speed}mph`)
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`This ${this.name} can run.`);
//         super.move(this.runSpeed);
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }
//     swim(){
//         console.log(`This ${this.name} can swim.`);
//         super.move(this.swimSpeed);
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name,age);
//         this.flySpeed = flySpeed;
//     }
//     fly(){
//         console.log(`This ${this.name} can fly.`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit",1, 25);
// const fish = new Fish("fish",2,12);
// const hawk = new Hawk("hawk",3, 30);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed)

// rabbit.run();
// fish.swim();
// hawk.fly();

// ---------------GETTER & SETTER------------------
// getter = special method that makes a property readable
//setter = specialmethod that makes the property writable

// validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth>0){
//             this._width = newWidth;
//         }else{
//             console.error("Width must  be a positive number");
//         }
//     }
//     set height(newHeight){
//         if(newHeight>0){
//             this._height = newHeight;
//         }else{
//             console.error("Height must  be a positive number");
//         }
//     }

//     get width(){
//         return this._width.toFixed(1);
//     }
//     get height(){
//         return this._height.toFixed(1);
//     }

//     get area(){
//         return `${(this._width*this._height).toFixed(1)} cm^2`;
//     }
// }

// const rectangle1 = new Rectangle(-100000000, "pizza");
// const rectangle2 = new Rectangle(3, 4);

// rectangle1.width = 2;
// rectangle1.height = 3;

// console.log(rectangle1.width);
// console.log(rectangle1.height);

// console.log(rectangle2.width);
// console.log(rectangle2.height);
// console.log(rectangle2.area);

// class Person{

//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName=lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length>0){
//             this._firstName = newFirstName;
//         }else{
//             console.error("First name must be non-empty string");
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length>0){
//             this._lastName = newLastName;
//         }else{
//             console.error("Last name must be non-empty string");
//         }
//     }
//     set age(newAge){
//         if(typeof newFirstName === "number" && newAge<0){
//             this._age = newAge;
//         }else{
//             console.error("Age must be a non-negative number");
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get fullName(){
//         return this._firstName+this.lastName;
//     }
//     get age(){
//         return this._age;
//     }
// }

// const person1 = new Person("Nimmi","saha",22);

// console.log(person1.fullName);


// -----------------NESTED OBJECTS-----------------
//nested objects = objects inside of other objects.
//                 allows you to represent more complex data structures
//                 child object is enclosed by the parent object

//                 person{address{},contactInfo{}}

// const person ={
//     fullName: "SpongeBob Squarepants",
//     age : 30,
//     isStudent: true,
//     hobbies: ["karate","jellyfishing","cooking"],
//     address:{
//         street:"124 conch st.",
//         city: "highland",
//         country: "intinia"
//     }
// }

// console.log(person.fullName);
// console.log(person.hobbies[2]);
// console.log(person.address.country);

// for(const property in person.address){
//     console.log(person.address[property]);
// }


// class Person{
//     constructor(name,age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street,city,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("spongebob",30,
//     "124 conch st","Highland","initia");

// const person2 = new Person("Patrick", 37,
//     "125 conch st","Highland","initia",
// );

// console.log(person1.address.city);
// console.log(person2.address.street);

