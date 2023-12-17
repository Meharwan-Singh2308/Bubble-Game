var timer = 60;
var hitrn = 0;
var score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function GetNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn; 
}

function makeBubble()
{
    var Clutter = "";

for(i=1;i<=75;i++){
    var rn = Math.floor(Math.random()*10);
    Clutter += `<div class = "bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = Clutter;
}

function runTimer()
{
   var timerInt = setInterval(function(){
        if(timer>=0){
            document.querySelector("#timing").innerHTML = timer;
            timer--;
        }else{
            document.querySelector("#pbtm").innerHTML = "GAME OVER";
            clearInterval(timerInt);
        }
    },1000)
}

function MatchNumber(){

    document.querySelector("#pbtm")
    .addEventListener("click",function(dets){
       var ClickedNumber = Number(dets.target.textContent);
        if(hitrn === ClickedNumber)
        {
            increaseScore();
            GetNewHit();
            makeBubble();
        }
    })
}

GetNewHit();
runTimer();
makeBubble();
MatchNumber();