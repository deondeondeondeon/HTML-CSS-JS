//for loop
for (i = 0; i < 5; i++){
    console.log( "The number is " + i);
}

//the number is 0
//the number is 1
//the number is 2
//the number is 3
//the number is 4

//for/in

var person={
    firstname: "John",
    lastname: "Doe",
    age : 26
};

var text = '';
var x;
for(x in person){
    console.log(text+=person[x]);
}

// for/of

//looping over a list
 var names =['Steve','Bill','Mark'];
 var x;

 for(x of names ){
    //console.log(x);
    document.write(x+"<br>");
 }

 ///looping over a sring
 var txt = "javascript";
 var x;
 for (x of txt){
    document.write(x+ "<br>");
 }

 // do/while
 let j = 0;
 do{
    j =+ 1;
    console.log(j);
 } while (j<5)

//while


//try to reacreate a for loop to be repeated based on the length of an array

var students = ["John","Mark",ana]

for (i=0; i<students.length; i++){
    document.write(students[i] + 'br')
} 

