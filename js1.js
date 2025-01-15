let userScore=0;
let compScore=0;

let scoreUser=document.querySelector("#user_score")
let scoreComp=document.querySelector("#comp_score")

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const compIndex=Math.floor(Math.random()*3);
    return options[compIndex];
}
const draw=()=>{
    console.log("MATCH DRAW");
    msg.innerText="MATCH DRAW . PLAY AGAIN!!";
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        scoreUser.innerText=userScore;
        // console.log("YOU WON!");
        msg.innerText=`YOU WON!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        scoreComp.innerText=compScore;
        // console.log("YOU LOSE");
        msg.innerText=`YOU LOSS!!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userChoice)=>{
    console.log("userchoice: ",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice: ",compChoice);

    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            //paper,scissor
            userWin= compChoice==="scissor"?true:false;
        }
        else if(userChoice==="paper"){
            // rock,scissor
            userWin=compChoice==="rock"?true:false;
        }
        else{
            // rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})
