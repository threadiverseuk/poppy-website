// script.js

// Parallax scrolling
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const layers = document.querySelectorAll('.parallax');
    layers.forEach(layer => {
        const depth = layer.getAttribute('data-depth');
        const translateY = scrolled * depth;
        layer.style.transform = `translateY(${translateY}px)`;
    });
});

// Animated counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = Math.abs(Math.floor(2000 / target));
        const updateCount = () => {
            count += 1;
            counter.innerText = count;
            if (count < target) {
                setTimeout(updateCount, speed);
            }
        };
        updateCount();
    });
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    // Proceed with form submission
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

// Scroll-triggered animations using Intersection Observer API
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
});
