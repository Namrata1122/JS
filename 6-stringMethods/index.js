// string methods = allow you to manipulate and work with text (strings)

// let userName = "sis Code";

// console.log(userName.charAt(0));
// console.log(userName.length);
// console.log(userName.trim())
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(3));
// console.log(userName.startsWith(" "));
// console.log(userName.endsWith(" "));
// console.log(userName.includes(" "));

// let phoneNumber = "123-456-7890";

// console.log(phoneNumber.replaceAll("-",""));
// console.log(phoneNumber.replaceAll("-","/"));
// console.log(phoneNumber.padStart(15,"0"));
// console.log(phoneNumber.padEnd(15,"0"));

// STRING SLICING = creating a new substring
//                  from a portion of another string

//                 string.slice(start,end)

// const fullName = "Sis Code";

// let firstName = fullName.slice(0,3);
// let lastName = fullName.slice(4,8);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1)

// let firstName = fullName.slice(0,fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1,);

// console.log(firstName);
// console.log(lastName);

//Method Chaining = calling one method after another in one 
//                  continuous line of code

// ---------------NO METHOD CHAINING----------
// let userName = window.prompt("Enter Your username : ");

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter +extraChars;

// console.log(userName);

// ------------------METHOD CHAINING---------------
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);