function showMessage(){
    alert("This message is inside the function")
}
//showMessage();

function sum(number1, number2){
    return number1 + number2
}

console.log(sum(25, 5));
console.log(sum(50, 50));

function toCelsius(f){
    return (5/9) * (f-32);
}

console.log("54 fahrenheit is equal to "+toCelsius(54)+" ceslsius");

//var arrowFunction = () => alert("Hello World");
var arrowFunction = name => alert(`Hello ${name}`);
//arrowFunction("John Doe");

function dsFunction(){
    var localVar = "Digital School";
    alert(localVar)
}

//dsFunction();

//alert(localVar);

//Create a function to convert minutes into seconds
//Create a function to calculate the area of triangle

//Objects

var car = {
    name: "Mercedes", 
    color: "red", 
    year: 2020, 
    km: 0,
    startEngine: function (){
        alert("Vrooom!!")
    },
    get getKilometers(){
        return 
this.km
;
    },
    set setKilometers(km){
        
this.km
 = km;
    }
}

var school = {
    name: "Digital School",
    subjects: "programming",
    students: 1500,
    year: 2016
};

//alert(
car.name

//alert(car['color']);

car.startEngine();

var computer = new Object()
computer.name
 = "Lenovo"
computer.CPU = "Intel core i7"
computer.RAM = "16GB"
computer.GPU = "GeForce RTX 40"
computer.type = function(){
    return 
this.name
 + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;
}
console.log(computer.type())
//delete computer.GPU;

console.log(car.getKilometers);

car.setKilometers = 100;
console.log(car.getKilometers)

//Constructors
function Computer(name, CPU, RAM, GPU){
    
this.name
 = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("MacBook Pro","M1 8 core", "8GB", "5600m GPU")
var computer2 = new Computer("Lenovo", "Intel core i7", "16GB", "GeForce RTX 40")

//functions, parameters, arguments, local and global variable, objects, attributes, methods, constructors 