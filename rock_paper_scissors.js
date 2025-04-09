const score=JSON.parse(localStorage.getItem('score')) ||{
    Wins:0,
    Losses:0,
    Ties:0
};
update_score();
function playerGame(playerMove){
const computerMove=pickComputerMove();
let result='';
if(playerMove==='rock'){
    if(computerMove==='rock'){
        result='TIE';
    }
    else if(computerMove==='paper'){
        result='DEFEAT';
    }
    else{
        result='VICTORY';
    }
}
else if(playerMove==='paper'){
    if(computerMove==='rock'){
        result='VICTORY';
    }
    else if(computerMove==='paper'){
        result='TIE';
    }
    else{
        result='DEFEAT';
    }
}
else{
    if(computerMove==='rock'){
        result='DEFEAT';
    }
    else if(computerMove==='paper'){
        result='VICTORY';
    }
    else{
        result='TIE';
    }
}
if(result==='VICTORY'){
    score.Wins=score.Wins+1;
}
else if(result==='DEFEAT'){
    score.Losses=score.Losses+1;
}
else{
    score.Ties=score.Ties+1;
}
document.querySelector('.js-result').innerHTML=`${result}!!!`;
document.querySelector('.js-yourMove').innerHTML=`Your Move:<img src="${playerMove}-emoji.png" class="emoji">`;
document.querySelector('.js-computerMove').innerHTML=`Computer Move:<img src="${computerMove}-emoji.png" class="emoji">`;
localStorage.setItem('score', JSON.stringify(score));
update_score();
alert(`Your Move is ${playerMove},Computer's Move is ${computerMove},so it's a ${result}.
Wins:${score.Wins},Losses:${score.Losses},Ties:${score.Ties}`);
}
function update_score(){
document.querySelector('.js-score').innerHTML= `Wins: ${score.Wins},Losses: ${score.Losses},Ties: ${score.Ties}`;
}
function pickComputerMove(){
let computerValue='';
const value=Math.random();
if(value>=0 && value<1/3){
    computerValue='rock';
}
else if(value>=1/3 && value<2/3){
    computerValue='paper';
}
else if(value>=2/3 && value<1){
    computerValue='scissor';
}
return computerValue;
}