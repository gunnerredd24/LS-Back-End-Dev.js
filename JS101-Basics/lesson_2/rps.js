const readline = require('readline-sync');
const LEGIBLE_CHOICES = ['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard'];
const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];
const WINNING_COMBOS = {
  r:  ['sc', 'l'],
  p:  ['r', 'sp'],
  sc: ['p', 'l'],
  l:  ['p', 'sp'],
  sp: ['r', 'sc'],
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt("You win!");
    playerRounds += 1;
  } else if (computerChoice === choice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
    computerRounds += 1;
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

let computerRounds = 0;
let playerRounds = 0;

prompt(`This game is a best of 5, first to 3 rounds wins.`);

while (computerRounds < 3 && playerRounds < 3) {
  prompt(`Score is currently player has ${playerRounds} and computer has ${computerRounds}. `);

  prompt(`Choose one: ${LEGIBLE_CHOICES.join(', ')}, but with ${VALID_CHOICES.join(', ')} 
  representing each of the choices.`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice} and the computer chose ${computerChoice}`
  );

  displayWinner(choice, computerChoice);

  if (computerRounds === 3 || playerRounds === 3) {
    prompt("Would you like to play again?");
    let again = readline.question().toLowerCase();

    while (again[0] !== 'n' && again[0] !== 'y') {
      prompt("Invalid input, please try again.");
      again = readline.question().toLowerCase();
    }

    if (again[0] === 'y') {
      computerRounds = 0;
      playerRounds = 0;
    } else {
      continue;
    }
  }
}