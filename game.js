//& Seçiciler
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");
const selectionArticle = document.querySelector(".selection");

//& Değişkenler
let userSelection;
let pcRandom;
let pcArr = [];
const userSelectImg = document.createElement("img");
const pcSelectImg = document.createElement("img");

// console.log(selectionArticle)

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
  console.log(pcRandom);
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.id = `pcs`;
  pcChoiceDiv.appendChild(pcSelectImg);
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
