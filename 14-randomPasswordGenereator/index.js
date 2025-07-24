// Random Password Generator
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowercaseChars ="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars ="0123456789";
    const symbolChars ="!@#$%^&*()_+-=";

    let allowedChars ="";
    let password = "";

    allowedChars +=includeLowerCase?lowercaseChars:"";
    allowedChars +=includeUpperCase?uppercaseChars:"";
    allowedChars +=includeNumbers?numberChars:"";
    allowedChars +=includeSymbols?symbolChars:"";

    if(length<=0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length ===0){
        return `(Atleast onse set of charecters needs to be selected)`;
    }

    for(let i=0; i<length;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password +=allowedChars[randomIndex];
    }

    return password;
}
const passwordLength = 10;
const includeLowerCase = true;
const includeUpperCase = false;
const includeNumbers = true;
const includeSymbols = false;

const password = generatePassword(passwordLength, includeLowerCase,
                                  includeNumbers,includeSymbols
                                  ,includeUpperCase );

console.log(`Generated password : ${password}`);