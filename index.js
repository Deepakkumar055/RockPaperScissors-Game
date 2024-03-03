let userScore =0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");




const draw = ()=>{
    console.log("match drawn")
    msg.innerText = "match drawn! play again"
    msg.style.backgroundColor = "brown";
}
  const showWin =(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice} `
        msg.style.backgroundColor = "green"; 
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost Your ${userChoice}  got beatan by computer's ${compChoice} `
        msg.style.backgroundColor = "red"; 
    }
    
  }

 const genCompChoice = ()=>{
 const options = ["rock" , " ppr", "scissors"];
 const randIdx = Math.floor(Math.random()*3);
 return options[randIdx]
 }

  
 const playgame = (userChoice)=>{
    const compChoice = genCompChoice();
   

    if(userChoice == compChoice){
        draw();
    }
     else{
     let userwin = true;
     if(userChoice == "rock"){
        //ppr scissors
        userwin = compChoice == "ppr" ?false:true
     }
     else if(userChoice=="ppr"){
          //rock scissors 
          userwin = compChoice=="scissors" ?false:true
     }
     else{
        // rock ppr
        userwin = compChoice =="rock" ?false:true
     }
     showWin(userwin,userChoice,compChoice)
     }
    

 }
choices.forEach((choice) =>{
    choice.addEventListener("click" ,() =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})