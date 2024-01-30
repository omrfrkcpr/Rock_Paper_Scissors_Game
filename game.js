//& Seçiciler
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");
const selectionArticle = document.querySelector(".selection");

const messagePar = document.querySelector(".message");

//& Score
const scoreCardSection = document.querySelector(".score-card");
const yourScoreSpan = document.getElementById("your-score");
const pcScoreSpan = document.getElementById("pc-score");
const domTopScore = document.getElementById("top-score");

//& Değişkenler
let userSelection;
let pcRandom;
let pcArr = [];
const userSelectImg = document.createElement("img");
const pcSelectImg = document.createElement("img");

// console.log(selectionArticle)

//& Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//& Event Listeners
selectionArticle.addEventListener("click", (e) => {
  // console.log(e.target.id)
  userSelection = e.target.id;
  // console.log(userSelection)

  if (userSelection) {
    userSelectImg.src = `./assets/${userSelection}.png`;
    userSelectImg.id = `you`;
    yourChoiceDiv.appendChild(userSelectImg);
  }
  createPcSelection(); // get random selection
});

//& Functions

const createPcSelection = () => {
  pcArr = ["rock", "paper", "scissor", "rock", "paper", "scissor"];
  pcRandom = pcArr[Math.trunc(Math.random() * 6)];
  //   console.log(pcRandom);
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.id = `pcs`;
  pcChoiceDiv.appendChild(pcSelectImg);

  calculateResult();
};

const calculateResult = () => {
  //   console.log(userSelection);
  //   console.log(pcRandom);
  if (userSelection == pcRandom) {
    draw();
  } else {
    if (userSelection === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelection === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    } else if (userSelection === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    }
  }
};

/* let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')


rock.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"/>`
})
paper.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/paper.png"/>`
})
scissor.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/scissor.png"/>`
})
 */
