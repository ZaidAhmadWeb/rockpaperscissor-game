let values = ["rock", "paper", "scissor"];
let computerscore = 0;
let userscore = 0;
let totalRound = 0;

function computerGuess() {
  let randomguess = Math.floor(0 + Math.random() * 3);
  return values[randomguess];
}

function userInput() {
  let userguess = prompt("enter 1.rock 2.paper 3.scissor");
  if (userguess == "rock" || userguess == "paper" || userguess == "scissor") {
    return userguess;
  } else {
    throw new Error("invalid value entered by user!");
  }
}

function playRound(userchoise) {
  const div = document.querySelector(".result");
  const content = document.createElement("div");
  content.style.cssText =
    "color:white; background-color:gray; border:2px solid green; margin-top:10px; padding:2px; width:20%; font-size:20px;";
  totalRound++;
  let computerguess = computerGuess();
  let userguess;
  try {
    userguess = userchoise.value;
  } catch (e) {
    console.error(e.message);
  }

  if (computerguess == "rock" && userguess == "rock") {
    content.innerText = `Draw! round ${totalRound}`;
  } else if (computerguess == "paper" && userguess == "paper") {
    content.innerText = `Draw! round ${totalRound}`;
  } else if (computerguess == "scissor" && userguess == "scissor") {
    content.innerText = `Draw! round ${totalRound}`;
  } else if (computerguess == "rock" && userguess == "scissor") {
    content.innerText = `computer won! round ${totalRound}`;
    computerscore++;
  } else if (computerguess == "scissor" && userguess == "paper") {
    content.innerText = `computer won! round ${totalRound}`;
    computerscore++;
  } else if (computerguess == "paper" && userguess == "rock") {
    content.innerText = `computer won! round ${totalRound}`;
    computerscore++;
  } else {
    content.innerText = `You won! round ${totalRound}`;
    userscore++;
  }
  div.appendChild(content);
}

const div = document.querySelector(".result");
const content = document.createElement("div");
content.style.cssText =
  "color:white; background-color:blue; border:2px solid green; padding: 4px; margin-top:10px; margin-bottom:10px; padding:2px; width:20%; font-size:25px;";

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.style.cssText = "padding:4px; radius:5px; border:2px solid gray; background-color:lightblue; margin:10px; font-size:30px;"
  btn.addEventListener("click", () => {
    if(totalRound == 0){while (div.firstChild) {
        div.removeChild(div.firstChild);
    }}
    playRound(btn.classList);
    if (totalRound == 5) {
      if (computerscore > userscore) {
        content.innerText = "Computer Won the game!";
        console.log(computerscore);
        console.log(userscore);
      } else if (userscore > computerscore) {
        content.innerText = "User Won the game!";
      } else {
        content.innerText = "Game is Draw!";
      }
      totalRound = 0;
      userscore = 0;
      computerscore = 0;
      div.appendChild(content);

    }
  });
});
