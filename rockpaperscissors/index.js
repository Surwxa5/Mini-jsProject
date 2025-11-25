function playGame(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = `You: ${playerChoice}  Computer: ${computerChoice} = Draw!`;
  }
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = `You: ${playerChoice}  Computer: ${computerChoice} =You Win!`;
  } 
  else {
    resultText = `You: ${playerChoice}  Computer: ${computerChoice} =You Lose!`;
  }

  document.getElementById("result").textContent = resultText;
}

function cancelGame() {
  document.getElementById("result").textContent = "";
}
