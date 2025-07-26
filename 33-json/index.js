// JSON = (JavaScript Object Notation) data-interchange format
//        used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1,value2,value3]

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object

// const names = ["spongebob","patrick","squidward","Sandy"];

// const jsonString = JSON.stringify(names);
// const person={
//     "name":"spongebob",
//     "age":30,
//     "isemployed":true,
//     "hobbies":["jellyfishing","karate","cooking"]
// }
// const people =[{
//     "name":"spongebob",
//     "age":30,
//     "isemployed":true
// },
// {
//     "name":"Patrick",
//     "age":34,
//     "isemployed":false
// },
// {
//     "name":"squidward",
//     "age":50,
//     "isemployed":true
// },{
//     "name":"sandy",
//     "age":27,
//     "isemployed":false
// }]

// const personString = JSON.stringify(person);

// const peopleString = JSON.stringify(people);

// console.log(personString);
// console.log(peopleString);
// console.log(jsonString);

// const jsonnames = `["spongebob","patrick","squidward","Sandy"]`;
// const jsonperson=`{
//     "name":"spongebob",
//     "age":30,
//     "isemployed":true,
//     "hobbies":["jellyfishing","karate","cooking"]
// }`
// const jsonpeople =`[{
//     "name":"spongebob",
//     "age":30,
//     "isemployed":true
// },
// {
//     "name":"Patrick",
//     "age":34,
//     "isemployed":false
// },
// {
//     "name":"squidward",
//     "age":50,
//     "isemployed":true
// },{
//     "name":"sandy",
//     "age":27,
//     "isemployed":false
// }]`;

// const parseData = JSON.parse(jsonpeople);
// console.log(parseData);

// we can provide an url or relative file path into fetch
// fetch returns a promise
fetch("person.json").then(response=> response.json())
                     .then(value =>console.log(value))

fetch("people.json").then(response=> response.json())
                     .then(values => values.forEach(
                        value => console.log(value.isemployed)
                     ));