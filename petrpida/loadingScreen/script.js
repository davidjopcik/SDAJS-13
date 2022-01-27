const loadingScreen = document.querySelector('.loading');
const firstPage = document.querySelector('.container');

firstPage.addEventListener('animationend', () => {
    firstPage.classList.remove('loading')
    loadingScreen.remove();
});
 