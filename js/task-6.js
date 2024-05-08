function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerBox = document.querySelector("#boxes");
const inputField = document.querySelector("input");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
let boxBeggin =  30;
let amount = [];


inputField.addEventListener("input", handleInput);

function handleInput(event) {
  amount.push(event.target.value);
};

function createBoxes(amount) {
  destroyBoxes();
   return amount.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxBeggin}px`;
    box.style.height = `${boxBeggin}px`;
    boxBeggin += 10;
   containerBox.prepend(box);
  })

}

btnCreate.addEventListener("click", handleCreate);

function handleCreate(event) { 
  createBoxes(amount);
 }


btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes(event) { containerBox.innerHTML = " " };

