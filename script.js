// script.js

// Function to implement smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Event listeners for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Function for parallax effect
function parallax() {
    const scrollPosition = window.scrollY;
    document.querySelector('.parallax').style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
}

window.addEventListener('scroll', parallax);

// Function for interactive animations on load
window.addEventListener('load', function() {
    document.querySelector('.animate-me').classList.add('fade-in');
});
