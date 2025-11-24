var programmingLanguages = ["JavaScript", "Python", "Java", "C#", "Ruby"];

console.log("Original array:", programmingLanguages);
console.log(programmingLanguages[1]);

console.log(programmingLanguages.length);

console.log(programmingLanguages[programmingLanguages.lenght -1]);

programmingLanguages.push("Go");
console.log("After push:", programmingLanguages);

programmingLanguages.pop();
console.log("After pop:", programmingLanguages);

programmingLanguages.unshift("TypeScript");
console.log("After unshift:", programmingLanguages);

programmingLanguages.shift();
console.log("After shift:", programmingLanguages);

//Splice
programmingLanguages.splice(0, 2, "C++");
console.log("After shift:", programmingLanguages);

//Random Number
console.log("Random number between 0 and 1:", Math.random()*5);
console.log("Random number between 0 and 4:", Math.floor(Math.random()*5));

//Array Destructuring
var students = ["Alice", "Bob", "Charlie"];
var [student1, student2, student3] = students
console.log("Dastructured students;", student1, student2, student3);
console.log("First student:", student1);
console.log("Second student:", student2);
console.log("Third student:", student3);

var numbers = [1,2,3,4,5,6,7,8,9,10];
var [num1, num2, num3, ...otherNumbers] = numbers;
console.log("Dastructured numbers:", num1,num2,num3, otherNumbers);
console.log("First number:", num1);
console.log("Third number:", num2);
console.log("Fifth number:", num3);
console.log(otherNumbers, toString());