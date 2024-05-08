function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerBox = document.querySelector("#boxes");
const inputField = document.querySelector("input");
console.log(inputField);
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
let amount;

function createBoxes(amount) {
  let boxBeggin = 30;
  for (let i = 1; i <= amount; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxBeggin}px`;
    box.style.height = `${boxBeggin}px`;
    boxBeggin += 10;
  }
  }


btnCreate.addEventListener("click", handleCreate);

function handleCreate(event) { 
  amount = parseInt(inputField.value)
  createBoxes(amount);
 }


btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes(event) { containerBox.innerHTML = " " };

