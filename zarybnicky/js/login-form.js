const form = document.querySelector(".card");
const nameField = document.querySelector(".card input[name='name']")
const passField = document.querySelector(".card input[name='pass']")
const button = document.querySelector(".card button");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!checkValidForm()) {  // validation
        return;
    }

    // set state to loading
    button.className = "loading";
    button.disabled = true;

    // send to backend
    await timeout(2000);

    // const response = await fetch("/login", {});
    // const data = await response.json();
    // { status: "error | ok" }

    button.classList.remove("loading");
    button.disabled = false;

    // process the response
    if (true) {  // data.status === "error"
        // set state to error
        button.classList.add("error");
    } else {
        // set state to success
        button.classList.add("success");
    }
});

function checkValidForm() {
    let isValid = true;
    nameField.classList.remove("error");
    passField.classList.remove("error");
    if (!nameField.value) {
        isValid = false;
        nameField.classList.add("error");
    }
    if (!passField.value) {
        isValid = false;
        passField.classList.add("error");
    }
    return isValid;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}