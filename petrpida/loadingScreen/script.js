const loadingScreen = document.querySelector('.loading');
console.log(loadingScreen)
const firstPage = document.querySelector('.container');
console.log(firstPage)

firstPage.classList.add('loading');

/* loadingScreen.addEventListener('loadeddata', async function () {
  console.log('loading data');
  
  firstPage.classList.add('loading');
  loadingScreen.classList.add('loading');

  await timeout (5000)

  firstPage.classList.remove('loading');
  loadingScreen.classList.remove('loading');

}); */

firstPage.addEventListener('animationend', () => {
    firstPage.classList.remove('loading')
  });
  
