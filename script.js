let guesses=[];
let correctNumber = getNumber();
console.log("Correct no is: " , correctNumber);
window.onload = function() {
    document.getElementById('sub-btn').addEventListener('click',playgame );
    
    document.getElementById('res-btn').addEventListener('click',initGame ); 
    //showYouWon();   
}

function playgame() {
    const guessNumber = document.getElementById('nofield').value;
    console.log("Number guessed: " + guessNumber);
    displayResult(guessNumber);
    saveGuessHistory(guessNumber );
    displayHistory();
} 
function resetgame() {
    console.log("reset");
} 
function getNumber(){
    let randomNumber = Math.random();
    let wholeNumber = ((randomNumber)*100)+1;
   // console.log(randomNumber);
    return(Math.floor(wholeNumber));
   // console.log(wholeNumber);
}

function displayResult(guessNumber){

    if (guessNumber > correctNumber){
       showNumberAbove();
        console.log(correctNumber , guessNumber);
    }
    else if(guessNumber< correctNumber){
        showNumberBelow();
        console.log(correctNumber , guessNumber);
        console.log("The number is low");
    }
    else {
        console.log("Congrats! Number matched.");
    showYouWon();
    }
}
function displayHistory(){
    //console.log(guesses);
    let index = guesses.length-1;
    let list = " <ul class='list-group'>";
    while(index>=0){
        list += "<li class='list-group-list'>"+ "You guessed " + guesses[index] +"<br>" + "</li>" ;
        index -=1;
        console.log(guesses[index]);
    }
    list += "</ul>";
    document.getElementById("history").innerHTML= list;
}
function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog= "<div class='alert alert-warning' role='alert'>"
            break;
            case "won":
                dialog= "<div class='alert alert-success' role='alert'>"
                break;
    }
            dialog += text;
            dialog +="</div>"
            return dialog;
    
}

function showYouWon(){
    const text = "Awesome job you got it"
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
    console.log(dialog)
}
function showNumberAbove(){
    const text = "Your guess is too high!"
    let dialog = getDialog('warning', text) 
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
    const text = "Your guess is too low!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
    console.log(dialog);
}
function saveGuessHistory(guess){
        guesses.push(guess);
        console.log(guesses);
        
}
function initGame(){
   correctNumber = getNumber();
    document.getElementById("result").innerHTML = '';
    guesses=[];
    displayHistory();
}
