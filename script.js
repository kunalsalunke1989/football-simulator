//Rate two teams out of 5
//Generate a random number from 0 to rating for each team after every second
//If for three consecutive seconds, one is greater than the other, then update score
//At the end of ninety seconds, team with most goals wins.

var team1 = teams[0].rating;
var team2 = teams[1].rating;
var team1Chance = 0;
var team2Chance = 0;
var team1ScoreCount = 0;
var team2ScoreCount = 0;
var team1FinalScore = 0;
var team2FinalScore = 0;
var count = 1;

var team1Name = document.getElementById("team1Name");
var team2Name = document.getElementById("team2Name");
var team1Score = document.getElementById("team1Score");
var team2Score = document.getElementById("team2Score");
var timer = document.getElementById("timer");

team1Name.textContent = teams[0].name; 
team2Name.textContent = teams[1].name;

var interval = setInterval(function(){
    if(count >= 10)
        timer.textContent = count + ":00";
    else
        timer.textContent = "0"+count + ":00";
    console.log(count++);
    team1Chance = Math.floor(Math.random() * team1) + 1;
    team2Chance = Math.floor(Math.random() * team2) + 1;
    if(team1Chance > team2Chance)
        team1ScoreCount++;
    else if (team1Chance < team2Chance)
        team2ScoreCount++;
    if(team1ScoreCount!==0 && team1ScoreCount%10===0){
        team1ScoreCount=0;
        team2ScoreCount=0;
        team1FinalScore++;
        console.log(teams[0].name + " " + team1FinalScore);
        team1Score.textContent = team1FinalScore;
    }
    if(team2ScoreCount!==0 && team2ScoreCount%10===0){
        team1ScoreCount=0;
        team2ScoreCount=0;
        team2FinalScore++;
        console.log(teams[1].name + " " + team2FinalScore);
        team2Score.textContent = team2FinalScore;
    } 
}, 1000);


setTimeout(function(){
    clearInterval(interval);
    if(team1FinalScore > team2FinalScore)
        console.log(teams[0].name + " wins!");
    else if(team1FinalScore < team2FinalScore)
        console.log(teams[1].name + " wins!");
    else
        console.log("Match drawn!");
},90000);