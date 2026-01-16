const movingSection = document.querySelector('.move-down');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    movingSection.style.transform = `translateY(${scrollY * 0.2}px)`;
});
