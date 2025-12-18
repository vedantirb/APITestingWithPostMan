let a=1;
a="hello";
console.log(typeof a);

//functions

function add(x, y){
    return (x + y);
}

// operator overloading
console.log(add('foo', 'bar'));// foobar
console.log(add(4, 'bar'));// 4bar

//objects


const person = {
    name: 'Vedanti',
    age: 30,
    isEmployed: true
};

//person=1; error
console.log(person.name);
person.age= 31;
console.log(person.age);
person.salary = 50000;
console.log(person);


// loop

const num = [1,2,3];

for (let i=0; i< num.length; i++)
{
    console.log(num[i]);
}


///while loop
let index=0;
while (index<num.length)
{
    console.log(num[index]);
    index++;
}


//conditional

const age = 20;
if (age >= 18)
{
    console.log("age is greater than 18, Person is Adult");
}
else
{
    console.log("Person is Minor");
}
// even no


index=0;
while (index<num.length)
{
    if (num[index] % 2 == 0)
    {
    console.log("No is even");
    console.log(num[index]);
    }
    index++;
}

//Arrays operation

num.push(6);
console.log("push", num.push(9));
num.push("Vedanti");
console.log(num);

// remove last element
num.pop();
console.log("pop:", num);

console.log(num[2]);

// non exist index
res = console.log(num[9]); // does not give error return undefined

console.log(typeof res); // undefined
if (res==undefined)
{
console.log("Undefined value");
}
num.push(43);
num.push(11);
console.log("Before sorted:", num);
num.sort();
console.log("After sort:", num);
/*
Before sorted:
Array(7) [ 1, 2, 3, 6, 9, 43, 11 ]
basics.js:99:9
After sort:
Array(7) [ 1, 11, 2, 3, 43, 6, 9 ]
*/

//Default sort treat all element as string to fix this need to use callback function to treat as number
//callback function or comparator function

function sorting()
{
  const num = [1,2,11,33,3,98,89];
  num.sort();
  num.sort(function(a,b){
    return a-b;
  });
  console.log(num);
}

sorting();


function sortingDescending()
{
  const num = [1,2,11,33,3,98,89];
  num.sort();
  num.sort(function(a,b){
    return b-a;
  });
  console.log(num);
}
// practice map reduce slice

