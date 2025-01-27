// Header shrink effect on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Logo hover animation
document.querySelector('.logo').addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.logo').addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
});

// Input focus animation
const searchInput = document.querySelector('input');
searchInput.addEventListener('focus', function () {
    searchInput.style.backgroundColor = '#ffe6e8';
    searchInput.style.transition = 'background-color 0.3s ease';
});

searchInput.addEventListener('blur', function () {
    searchInput.style.backgroundColor = 'white';
    searchInput.style.color = 'black';
});

// Placeholder for search functionality
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert(`Searching for: ${searchInput.value}`);
        searchInput.value = ''; // Clear the input field
    }
});

// Smooth scroll for all links (add smooth scroll to navigation links when needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Footer slide-in animation on page load
window.addEventListener('load', function () {
    const footer = document.querySelector('footer');
    footer.classList.add('footer-slide-in');
});

// Fade-in sections on scroll (Advanced scroll animations)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
