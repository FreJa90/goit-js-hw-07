const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 
    const eventEmail = event.currentTarget.email.value;
    const eventPass = event.currentTarget.password.value;
    const obj = {
        email: eventEmail.trim(),
        password: eventPass.trim()
    };
    if (eventEmail && eventPass !== ' ') {console.log(obj);} else {
        alert('All form fields must be filled in');
    }

    form.reset();
}
