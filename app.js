let timer = 60;
let score = 0;
let rn;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function hitt(){
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = rn;
}

function makeBubble(){
    let clutter = "";

    for(let i=1; i<=96; i++){
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector(".bott").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#tiimer").innerHTML = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".bott").innerHTML = `<h1>Game Over!!</h1>`;
        }
    },1000);
}

document.querySelector(".bott").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === rn){
        increaseScore();
        makeBubble();
        hitt();
    }
})

makeBubble();
hitt();
runTimer();
