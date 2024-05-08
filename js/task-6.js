function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector("#boxes");
const input = document.querySelector("input");
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", () => {
  box.innerHTML = "";
  sizes = 30;
})

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    alert("Error!")
    return;
  }
  createBoxes(input.value)
 };

function createBoxes(amount) {
  const arr = [];
  input.value = "";
  box.innerHTML = "";
  sizes = 30;
  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    sizes += 10;
    arr.push(myBox);
  }
  box.append(...arr);
}
