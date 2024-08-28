let values = ["rock", "paper", "scissor"];
let computerscore = 0;
let userscore = 0;

function computerGuess(){
    let randomguess = Math.floor(0+Math.random()  * 3);
    return values[randomguess];
}



function userInput(){
    let userguess = prompt("enter 1.rock 2.paper 3.scissor");
    if(userguess == "rock" || userguess == "paper" || userguess == "scissor"){
        return userguess;
    }
    else{
        throw new Error("invalid value entered by user!");
    }
}


function playRound(roundnum){
    let computerguess = computerGuess();
    let userguess;
    try{
        userguess = userInput();
    }
    catch(e){
        console.error(e.message);
    }

    if(computerguess == "rock" && userguess == "rock"){
        console.log(`Draw! round ${roundnum}`);
    }
    else if(computerguess == "paper" && userguess == "paper"){
        console.log(`Draw! round ${roundnum}`);
    }
    else if(computerguess == "scissor" && userguess == "scissor"){
        console.log(`Draw! round ${roundnum}`);
    }
    else if(computerguess == "rock" && userguess == "scissor"){
        console.log(`computer won! round ${roundnum}`);
        computerscore++;
    }
    else if(computerguess == "scissor" && userguess == "paper"){
        console.log(`computer won! round ${roundnum}`);
        computerscore++;
    }
    else if(computerguess == "paper" && userguess == "rock"){
        console.log(`computer won! round ${roundnum}`);
        computerscore++;
    }
    else{
        console.log(`You won! round ${roundnum}`);
        userscore++;
    }
}


function playtGame(){
    for(let i=0; i<5; i++){
        playRound(i+1);
    }
    if(computerscore > userscore){
        console.log("Computer Won the game!");
    }
    else if(userscore > computerscore){
        console.log("User Won the game!");
    }
    else{
        console.log("Game is Draw!");
    }
}

playtGame();
