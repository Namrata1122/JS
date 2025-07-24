// Date(year,month,day,hour,minute,second,ms)

const date = new Date(2025,0,1,2,3,4,5);
console.log(date);

const date2 = new Date("2025-01-02T12:00:00Z");
console.log(date2);

const date3 = new Date(0);
console.log(date3);

const date4 = new Date(1700000000000);
console.log(date4);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

const date5 = new Date();
date5.setFullYear(2025);
date5.setMonth(0);
date5.setDate(1);
date5.setHours(2);
date5.setMinutes(3);
date5.setSeconds(7);
console.log(date5);

const date6 = new Date("2025-12-31");
const date7 = new Date("2025-12-30");

if(date7<date6){
    console.log("HAPPY NEW YEAR");
}