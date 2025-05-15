const buttons = document.querySelectorAll('.btn')
const playerElement = document.getElementById('player_score');
const computerElement = document.getElementById('computer_score');
const resultElement = document.getElementById('result');


let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  
  button.addEventListener('click', () => {
    const result = playRound(button.id, computerPlay())
    resultElement.innerHTML = result
  })
})

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors']
  const choice = Math.floor(Math.random() * choices.length)
  return choices[choice]
}

function playRound(player, computer) {
  console.log(player, computer);
  
  if ( player === computer) {
    return 'Draw'
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++
    playerElement.textContent = playerScore
    return `You win! ${player} beats ${computer}`
  } else {
    computerScore++
    computerElement.textContent = computerScore
    return `You lose! ${computer} beats ${player}`
  }

}
