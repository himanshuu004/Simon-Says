
let  gameSeq  = [];
let userSeq = [];
let highestScore = [0];


let started = false;
let level = 0;

let btns = ['green','red','yellow','blue'];


let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
  if(started==false){
    console.log("started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn){
  btn.classList.add("white");
  setTimeout(function(){
    btn.classList.remove("white");
  },300);
  
}

function userFlash(btn){
  btn.classList.add("purple");
  setTimeout(function(){
    btn.classList.remove("purple");
  },300);
  
}


function levelUp(){
  userSeq=[];
  level++;
  h2.innerText = `Level ${level}`; 

  //random button
  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`)
  gameSeq.push(randColor);
  btnFlash(randBtn);


}


function checkAns(idx){
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);

    }
  }
  else{
   
    h2.innerHTML = `GAME OVER!! YOUR SCORE <b>${level} </b> <br>! TRY AGAIN!! `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor="white"
    },150);
    


    resetGame();
  }

}

function btnPress(){
  console.log(this);
  let btn = this;
  userFlash(this);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);

}


let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
  btn.addEventListener("click",btnPress);
}

function resetGame(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;

}