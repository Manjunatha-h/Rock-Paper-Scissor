const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScore = 0;
let compScore = 0;

let userScoreBoard = document.querySelector("#user-score");
let compScoreBoard = document.querySelector("#comp-score");

compSelect = () => {
    let choiceList = ["rock","paper","scissor"];
    return choiceList[Math.floor(Math.random() * 3)];
}

playGame = (userSel) =>{
    let compSel = compSelect();
    if(userSel === compSel){
        drawMessage();
    }
    else{
        let userWon = true; 
        if(userSel === "rock"){
            //paper , scoissor
            userWon = compSel === "paper"? false : true;
        }
        else if(userSel === "paper"){
            //rock,scissor
            userWon = compSel === "rock"?true : false;
        }
        else{
            userWon = compSel === "paper"?true:false;
        }

        showResult(userWon,userSel,compSel);
    }

}

showResult = (userWon,userSel,compSel) =>{
    if(userWon){
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You Won !!! Your ${userSel} Beats ${compSel}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";      
    }
    else{
        compScore++;
        compScoreBoard.innerText = compScore;
        msg.innerText = `You Lost ! Computer's ${compSel} Beats Your ${userSel}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

drawMessage = () =>{
    msg.innerText = "It was a Draw  ! 😁😁";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
}


choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        playGame(choice.getAttribute("id"));
    })
});



