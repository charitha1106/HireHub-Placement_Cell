const slidingPage = document.getElementById('sliding-page');

window.onload = function () {
  setTimeout(function () {
    slidingPage.classList.add('active');
  }, 1000); // Delay animation by 1 second
}

const openButton = document.getElementById('open-button');
const openButton1 = document.getElementById('open-button1');
const frame = document.getElementById('frame');
const frame1 = document.getElementById('frame1');
const closeButton = document.getElementById('close-button');
const closeButton1 = document.getElementById('close-button1');
const overlay = document.getElementById('overlay');

function disableScrolling() {
  document.body.style.overflow = 'hidden';
}

function enableScrolling() {
  document.body.style.overflow = '';
}

openButton.addEventListener('click', function () {
  frame.classList.add('visible'); // Show frame
  overlay.classList.add('visible'); // Show overlay
  disableScrolling(); // Disable background scrolling
});

openButton1.addEventListener('click', function () {
  frame1.classList.add('visible'); // Show frame1
  overlay.classList.add('visible'); // Show overlay
  disableScrolling(); // Disable background scrolling
});

closeButton.addEventListener('click', function () {
  frame.classList.remove('visible'); // Close frame
  overlay.classList.remove('visible'); // Hide overlay
  enableScrolling(); // Enable background scrolling
});

closeButton1.addEventListener('click', function () {
  frame1.classList.remove('visible'); // Close frame1
  overlay.classList.remove('visible'); // Hide overlay
  enableScrolling(); // Enable background scrolling
});

overlay.addEventListener('click', function () {
  frame.classList.remove('visible'); // Close frame
  frame1.classList.remove('visible'); // Close frame1
  overlay.classList.remove('visible'); // Hide overlay
  enableScrolling(); // Enable background scrolling
});

window.addEventListener('DOMContentLoaded', function() {
  var cdp = document.getElementById('cdp');
  var clg = document.getElementById('clg');
  var navBar = document.getElementById('nav-bar');

  function updateNavbarPosition() {
      var isLogoPresent = cdp || clg;
      if (!isLogoPresent && window.pageYOffset > navBar.offsetTop) {
          navBar.classList.add('fixed-navbar');
      } else {
          navBar.classList.remove('fixed-navbar');
      }
  }

  window.addEventListener('scroll', function() {
      updateNavbarPosition();
  });

  // Call the function once to set the initial state
  updateNavbarPosition();
});

document.getElementById('pdf-link').addEventListener('click', function() {
  window.open('C:\BTP PROJECT\brochure.pdf', '_blank');
});