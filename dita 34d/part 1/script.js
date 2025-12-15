//function printNames (){
//    document.write("John");
//    document.write("<br>");
//    setTimeout(function(){document.write("Ana");0 } , 3000);
//    document.write("Bob")
//}
//printNames()//

var color = ['red','green','blue','purpule'];

function changeBgColor(){
    document.querySelector('body').style.background =
    color[Math.floor(Math.random()*color.length)];
}

changeBgColor();

var names = ['John','Ana','Bob','Mark'];

function changeNames(){
    document.querySelector('p').innerHTML =
    names[Math.floor(Math.random()*names.length)];
}

changeNames();

setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);