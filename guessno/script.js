
// let co=0;
  
   
   
// const c=document.getElementById("counter");



// const bt=document.getElementById("button");

// bt.addEventListener('click',()=>{
//     co++;
//     c.innerHTML=co;
// });
//  document.querySelector("p").textContent ="gren";
const sn=Math.trunc(Math.random() *20)+1;

let score=20;
let highscore=0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click',()=>{
    const guess=Number(document.querySelector('.guess').value);
    if(sn===guess){
        document.querySelector('.message').textContent="correct";
        document.querySelector('.number').textContent=sn;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(!guess){
        displayMessage('no num');
    }
    else if(sn!==guess){
        if(score>1){
            displayMessage(guess> sn ? 'too high' : "too low");
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('lost game');
            document.querySelector('.score').textContent=0;
        }
    }
    
});

document.querySelector('.again').addEventListener('click',()=>{
    const sn=Math.trunc(Math.random() *20)+1;
    let hs=0;
    if(highscore>hs){
        hs=highscore;
    }
let score=20;
    document.querySelector('.highscore').textContent=hs;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='start gues';
    document.querySelector('body').style.backgroundColor='#222';

})
