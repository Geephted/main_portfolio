// Contact Me
const emailBtn = (document.querySelector ('.email-btn'));
const phoneBtn = (document.querySelector('.phone-btn'));

function emailButton() {
    if (emailBtn.innerHTML === 'Email' ) {emailBtn.innerHTML = 'gift.joweigha@gmail.com' }
    else {emailBtn.innerHTML = 'Email'}
};

function phoneButton () {
    if (phoneBtn.innerHTML === 'Phone Number') { phoneBtn.innerHTML = '+2347034646934'}
    else {phoneBtn.innerHTML = 'Phone Number'}
};


// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});