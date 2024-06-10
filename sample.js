document.addEventListener('DOMContentLoaded', () => {
  const events = document.querySelectorAll('.event');

  const showEvents = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      events.forEach(event => {
          const eventTop = event.getBoundingClientRect().top + scrollTop;
          if (scrollTop + windowHeight > eventTop) {
              event.classList.add('visible');
          }
      });
  };

  window.addEventListener('scroll', showEvents);
  showEvents(); // Initial check on load
});
