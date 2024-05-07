function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const inputField = document.querySelector("input");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
let boxBeggin =  30;
let amount = [];
console.log(amount);


function createBoxes(amount) {
  const box = document.createElement("div");
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = `${ boxBeggin }px`;
  box.style.height = `${boxBeggin}px`;
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap = "44px"
  container.style.marginTop = "16px";
  container.prepend(box);
}

inputField.addEventListener("input", handleInput);
function handleInput(event) {
  amount.push(event.target.value);
  // input.reset();
};

btnCreate.addEventListener("click", handleCreate);

function handleCreate(event) {
  amount.forEach(element => {
    createBoxes(element)
    boxBeggin += 10;
  })
  
};

btnDestroy.addEventListener("click", handleDestroy);
function handleDestroy(event) { };
