function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const inputField = document.querySelector("input");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
let amount = [];
console.log(amount);


function createBoxes(amount) {
  const box = document.createElement("div");
  box.style.backgroundColor =  "red";
  box.style.width = "30px";
  box.style.height = "30px";
  container.style.display = "flex";
  container.style.gap = "44px"
  container.style.marginTop = "16px";
  container.prepend(box);
}

inputField.addEventListener("input", handleInput);
function handleInput(event) {
  amount.push(event.target.value);
  // inputField.reset();
};

btnCreate.addEventListener("click", handleCreate);

function handleCreate(event) {
  amount.forEach(element => {
    createBoxes(element);
  })
  
};

btnDestroy.addEventListener("click", handleDestroy);
function handleDestroy(event) { };
