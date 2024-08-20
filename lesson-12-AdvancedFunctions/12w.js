let score = JSON.parse(localStorage.getItem('score_')) || 
  { wins:0,
    losses:0,
    ties:0
  };
  
updateScoreElement();

//   console.log(score);

let isautoplaying = false;
let intervalID;


function autoplay()
{
    if (!isautoplaying)
    {
        intervalID = setInterval(() =>
        {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isautoplaying = true;
        document.querySelector(".auto-play-button").innerHTML = "Stop autoplay";
    }
    else{
        clearInterval(intervalID);
        isautoplaying = false;
        document.querySelector(".auto-play-button").innerHTML = "AutoPlay";
    }
    
}
document.querySelector(".autoplay-btn").addEventListener("click", ()=>{
    autoplay();
})
document.querySelector(".js-rock-button").addEventListener("click", ()=>{
    playGame("rock");
} );

document.querySelector(".js-paper-button").addEventListener("click", () =>{
    playGame("paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () =>{
    playGame("scissors");
});

document.querySelector(".reset-score-btn").addEventListener("click", ()=>{
    score.wins = 0;
    score.losses =0;
    score.ties = 0;
    localStorage.removeItem('score_');
    updateScoreElement();
})
document.body.addEventListener("keydown", (event) =>{
    if (event.key==="r"){
        playGame("rock");
    }else if (event.key==="s"){
        playGame("scissors");
    }else if (event.key==="p"){
        playGame("paper")
    }else if (event.key==="a"){
        autoplay();
    }else if (event.key==="Backspace"){
        score.wins = 0;
        score.losses =0;
        score.ties = 0;
        localStorage.removeItem('score_');
        updateScoreElement();
    }

});
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
  document.querySelector('.js-moves').innerHTML =  `You <img src="/lesson-10/images/${playerMove}-emoji.png" alt="" class="move-icon">
  <img src="/lesson-10/images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`
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
