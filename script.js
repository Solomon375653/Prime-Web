// PRIME WEBSITE ANIMATIONS

const animatedElements = document.querySelectorAll(
    '.hero-text, .hero-image, .service-card, .about-image, .about-text, .contact'
);

// Prepare elements for animation
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(35px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

// Reveal elements when they enter the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

// Watch all selected elements
animatedElements.forEach(element => {
    observer.observe(element);
});

// Welcome message in the browser console
console.log('Welcome to PRIME Website Design!');