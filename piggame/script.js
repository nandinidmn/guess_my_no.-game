const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

let currentscore=0;

btnRoll.addEventListener('click',()=>{
    const dice=Math.trunc(Math.random()*6)+1;

    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice!==1){
    currentscore+=dice;
    current0El.textContent=currentscore;
    }else{

    }
});