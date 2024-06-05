const slidingPage = document.getElementById('sliding-page');

window.onload = function () {
  setTimeout(function () {
    slidingPage.classList.add('active');
  }, 1000); // Delay animation by 1 second
}


