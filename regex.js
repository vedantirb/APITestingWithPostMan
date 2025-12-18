let text = "Visit W3Schools";
let n = text.search(/w3schools/i); // /i define not to follow case insensitive
console.log(n); //return index first char found

//Search return first occurance


text = "Visit W3Schools W3schools";

let allTextFind = text.match(/w3schools/ig);  //search for all occurance g=>global i=>case insensitive
let firstTextFind = text.match(/w3schools/i);

console.log(allTextFind);
console.log(firstTextFind);


//replace


function replace(){
 let text1 = "Visit Microsoft microsoft !";
 let res = text1.replace(/Microsoft/gi, "W3School");
 console.log("Replace=>", res);
}

replace();


//RegEx \w metachar

text = "Give 100%!"; // \w return array of char
const pattern = /\w/g;
res = text.match(pattern);
console.log(res);

// \d for digit

//Quantifier
//x* match zero or more
//?
//+

