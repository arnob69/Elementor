document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50% 0px', // Trigger when top edge hits 50vh
      threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
  });