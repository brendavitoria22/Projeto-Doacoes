document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.banner .slides li');
    const indicatorsContainer = document.querySelector('.slide-indicators');

    slides.forEach((slide, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('slide-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    let currentSlide = 0;

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        indicatorsContainer.querySelector('.slide-indicator.active').classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        indicatorsContainer.querySelectorAll('.slide-indicator')[currentSlide].classList.add('active');
    }

    const slideInterval = setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        goToSlide(nextSlide);
    }, 5000);

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        updateIndicators();
    }

    function updateIndicators() {
        indicatorsContainer.querySelector('.slide-indicator.active').classList.remove('active');
        indicatorsContainer.querySelectorAll('.slide-indicator')[currentSlide].classList.add('active');
    }
});
