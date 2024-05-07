function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const button = document.querySelector(".change-color");
let textColor = document.querySelector(".color");

button.addEventListener("click", handleClick);

function handleClick(event) {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = `${color}`;
  textColor.textContent = color;

}