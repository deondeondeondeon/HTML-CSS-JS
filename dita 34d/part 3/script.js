var nrSelect = document.getElementById('nrSelect');
var btnGuess = document.getElementById('btnGuess');

var count = 1;
var guessNummber = false;

btnGuess.onclick = function(){
    count = 1;
    guessNumber = false;

    while(guessNUmber == false){
        var random = Math.floor(Math.random()*6);
        console.log(random);

        if(nrSelect.value == random){
            guessNumber = true;
            console.log("Guess within: "+count+"times");
        }else{
            count = count + 1;
        }
    }
}