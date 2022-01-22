const btn = document.querySelector(".button");

btn.addEventListener('click', ({ target }) => {
    const { classList } = target;

    classList.add("buttonLoading");

    setTimeout(() => {
        btn.classList.remove("buttonLoading");
    }, 2000);
});

/*
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const btn = document.querySelector(".button");

btn.addEventListener("click", async function(){

    btn.classList.add("loading");
    btn.classList.remove("loading");

    await timeout(5000);
});
*/