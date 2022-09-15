const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Заполни пустое поле!");
    }
    const userInfo = { email: email.value, Password: password.value };

    console.log(userInfo);
    event.currentTarget.reset();
}
