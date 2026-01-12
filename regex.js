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

console.log("****************************************")
function match() {
    let text = "Visit  W3Schools   W3Schools";
    let allOccurrences = text.match(/w3schools/ig);  //greedy search for all occurrences of "W3Schools", case insensitive
    let firstOccurence = text.match(/w3schools/i);  //search for first occurrence of "W3Schools", case insensitive
    console.log(allOccurrences); // Outputs: 6
}
match();

function search() {
    let text = "Give 100%!";
    const result = text.match(/1|2|3|4|5|0/g); //search for any digit between 1 and 5
    const result1 = text.match(/\d/g); //search for any digit
    const result2 = text.match(/d/g); //search for the letter 'd'

    console.log(result1); // Outputs: 4
}

//replace all whitespace characters with a single space
function replace() {
    let text1 = "Visit Microsoft    Microsoft !";
    let result = text1.replace(/Microsoft/gi, "W3Schools");
    console.log(result); // Outputs: Visit W3Schools!
}
search();

