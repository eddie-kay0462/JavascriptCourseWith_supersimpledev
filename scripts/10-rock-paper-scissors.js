let score = JSON.parse(localStorage.getItem('score_')) || 
  { wins:0,
    losses:0,
    ties:0
  };
  
updateScoreElement();

//   console.log(score);


function playGame(playerMove)
{
let result = '';
const computerMove = pickComputerMove();
  if (playerMove === 'scissors')
  {
      if (computerMove === 'paper')
      {
      result = 'You win';
      }
      else if (computerMove === 'rock')
      {
      result = 'You lose';
      }
      else if (computerMove === 'scissors')
      {
      result = 'tie';
      }
  }

  else if (playerMove === 'paper')
  {
  if (computerMove === 'paper')
  {
      result = 'tie';
  }
  else if (computerMove === 'rock')
  {
      result = 'You win';
  }
  else if (computerMove === 'scissors')
  {
      result = 'You lose';
  }
  }

  else if (playerMove === 'rock')
  {
  if (computerMove === 'rock')
  {
      result = 'tie';
  }
  else if (computerMove === 'paper')
  {
      result = 'You lose';
  }
  else if (computerMove === 'scissors')
  {
      result = 'You win';
  }
  }

  if (result === 'You win')
  {
      score.wins +=1;
  }
  else if (result === 'You lose')
  {
      score.losses +=1;
  }
  else if (result === 'tie')
  {
      score.ties+=1;
  }
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML =  `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
  <img src="images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`
  // localStorage.setItem('message', 'hello');
  localStorage.setItem('score_', JSON.stringify(score));
//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins} Losses:${score.losses} Ties: ${score.ties}`)
};


function updateScoreElement()
{
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses:${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove()
{
let  computerMove = '';
const randomNumber = Math.random();
if (randomNumber >=0 && randomNumber <1/3)
{
computerMove = 'rock';
}
else if (randomNumber>=1/3 && randomNumber < 2/3)
{
 computerMove = 'paper';
}
else if (randomNumber >=2/3 && randomNumber <1)
{
 computerMove = 'scissors';
}
return computerMove;
}
