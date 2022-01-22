const clickButton = document.getElementById("buttonClick");
const loading = document.querySelector(".circle");

clickButton.addEventListener("click", function spusti() {
    const originalText = clickButton.innerText;
    clickButton.innerText = "Loading...";

    loading.classList.add("progress");
    loading.classList.add("loading");
    clickButton.classList.add("loadingButton");

    // <button disabled>Tlačítko</button>
    clickButton.disabled = true;

    setTimeout(() => {
        clickButton.innerText = originalText;
        loading.classList.remove("progress");
        loading.classList.remove("loading");
        clickButton.classList.remove("loadingButton");

        clickButton.disabled = false;
    }, 2000);
});
