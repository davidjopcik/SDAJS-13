
const clickButton = document.getElementById("buttonClick")
const loading = document.querySelector(".circle")


clickButton.addEventListener("click", function spusti() {
    loading.classList.add("progress")
    loading.classList.add("loading")
    clickButton.classList.add("loadingButton")

    setTimeout(() => {
        loading.classList.remove("progress")
        loading.classList.remove("loading")
        clickButton.classList.remove("loadingButton")
    }, 2000);


})


