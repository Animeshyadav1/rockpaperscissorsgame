let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice, computerchoice) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        computerScorePara.innerText = computerscore;
        msg.innerText = `You lost. ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    //Generate computer choice
    const computerChoice = gencomputerchoice();
    

    if(userChoice === computerChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice)  => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    });
});