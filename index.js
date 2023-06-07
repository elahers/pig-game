'use strict'
const rollBtn=document.querySelector('.roll-dice');
const hold=document.querySelector('.hold');
const restartBtn=document.querySelector('.new-game');


const image1=document.querySelector('.img1');
const image2=document.querySelector('.img2');
const image3=document.querySelector('.img3');
const image4=document.querySelector('.img4');
const image5=document.querySelector('.img5');
const image6=document.querySelector('.img6');

let currentScore1=document.querySelector('.current-score-1')
let currentScore2=document.querySelector('.current-score-2')
let totalScore1=document.querySelector('.total-score-1')
let totalScore2=document.querySelector('.total-score-2')

currentScore1.textContent=0
currentScore2.textContent=0

let currScore_1=0
let currScore_2=0

let totalScore_1=0
let totalScore_2=0

var isFirstActive=true;

function rollDice() {
    let number=Math.floor(Math.random() *6)+1;
    
    if(number== 1){
        image1.classList.remove('hidden1');
        image2.classList.add('hidden2');
        image3.classList.add('hidden3');
        image4.classList.add('hidden4');
        image5.classList.add('hidden5');
        image6.classList.add('hidden6');
        

        if(isFirstActive){
            isFirstActive=false;
            // totalScore1.textContent=totalScore_1
            currScore_1 = 0;
            currentScore1.textContent=currScore_1
        }
        else{
            isFirstActive=true;
            // totalScore_2+=totalScore_2;
            // totalScore_2=currScore_2;
            // totalScore2.textContent=totalScore_2
            currScore_2 = 0;
            currentScore2.textContent=currScore_2
        }
        
       
    }
    else if(number== 2){
        image1.classList.add('hidden1');
        image2.classList.remove('hidden2');
        image3.classList.add('hidden3');
        image4.classList.add('hidden4');
        image5.classList.add('hidden5');
        image6.classList.add('hidden6');
        currentScore1.style.backgroundColor='grey'

        if(isFirstActive){
            currScore_1 += number;
            currentScore1.textContent=currScore_1
        }
        else{
            currScore_2 += number;
            currentScore2.textContent=currScore_2
        }
       
       
    }
    else if(number== 3){
        image1.classList.add('hidden1');
        image2.classList.add('hidden2');
        image3.classList.remove('hidden3');
        image4.classList.add('hidden4');
        image5.classList.add('hidden5');
        image6.classList.add('hidden6');
       
        if(isFirstActive){
            currScore_1 += number;
            currentScore1.textContent=currScore_1
        }
        else{
            currScore_2 += number;
            currentScore2.textContent=currScore_2
        }
    }
    else if(number== 4){
        image1.classList.add('hidden1');
        image2.classList.add('hidden2');
        image3.classList.add('hidden3');
        image4.classList.remove('hidden4');
        image5.classList.add('hidden5');
        image6.classList.add('hidden6');
        if(isFirstActive){
            currScore_1 += number;
            currentScore1.textContent=currScore_1
        }
        else{
            currScore_2 += number;
            currentScore2.textContent=currScore_2
        }
    }
    else if(number== 5){
        image1.classList.add('hidden1');
        image2.classList.add('hidden2');
        image3.classList.add('hidden3');
        image4.classList.add('hidden4');
        image5.classList.remove('hidden5');
        image6.classList.add('hidden6');
        if(isFirstActive){
            currScore_1 += number;
            currentScore1.textContent=currScore_1
        }
        else{
            currScore_2 += number;
            currentScore2.textContent=currScore_2
        }
    }
    else{
        image1.classList.add('hidden1');
        image2.classList.add('hidden2');
        image3.classList.add('hidden3');
        image4.classList.add('hidden4');
        image5.classList.add('hidden5');
        image6.classList.remove('hidden6');
        if(isFirstActive){
            currScore_1 += number;
            currentScore1.textContent=currScore_1
        }
        else{
            currScore_2 += number;
            currentScore2.textContent=currScore_2
        }
    }
}

function holdDice(){
    if(isFirstActive){
        isFirstActive=false;
        totalScore_1+=currScore_1;
        // totalScore_1=currScore_1;
        totalScore1.textContent=totalScore_1
        currScore_1 = 0;
        currentScore1.textContent=currScore_1
    }
    else{
        isFirstActive=true;
        totalScore_2+=currScore_2;
        // totalScore_2=currScore_2;
        totalScore2.textContent=totalScore_2
        currScore_2 = 0;
        currentScore2.textContent=currScore_2
    }
    
}

function resetScore(){
    currScore_1=0
    currScore_2=0
    totalScore_1=0
    totalScore_2=0

    image1.classList.add('hidden1');
    image2.classList.add('hidden2');
    image3.classList.add('hidden3');
    image4.classList.add('hidden4');
    image5.classList.add('hidden5');
    image6.classList.add('hidden6');

    currentScore1.textContent=currScore_1
    currentScore2.textContent=currScore_2
    totalScore1.textContent=totalScore_1
    totalScore2.textContent=totalScore_2
}

rollBtn.addEventListener('click', rollDice)
hold.addEventListener('click', holdDice)
restartBtn.addEventListener('click', resetScore)