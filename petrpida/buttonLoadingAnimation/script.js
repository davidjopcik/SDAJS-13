const loginButton = document.querySelector(".login");
console.log(loginButton)

function timeout (ms) {
    return new Promise (resolve => setTimeout(resolve,ms))
}

loginButton.addEventListener ("click", async function () {
    loginButton.classList.add ("loading");

    await timeout (5000);

    loginButton.classList.remove ("loading");
   
});