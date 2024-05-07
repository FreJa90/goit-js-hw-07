const userName = document.querySelector("#name-input");
let textNew = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);

function handleInput(event) {
    console.log(event);
    let currentText = event.target.value.trim();

    if (currentText !== ' ') { textNew.textContent = currentText }
    else {textNew.textContent = 'Anonymous'}
}
