const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const socialLinks = document.querySelector('.social-links');
//Toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        //Animate links

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        socialLinks.style.animation = 'navLinkFade 0.5s ease forwards 1.2s';
    });
    //Burger animation
    burger.classList.toggle('toggle');

});

}
navSlide();

// Timeline animations

var tl = new TimelineMax();

tl.from('.landing-page .slider', 0.5, {
    opacity: 0,
    x: 20,
    ease: Power2.ease
}, 0);
tl.from('.description', 0.5, {
    opacity: 0,
    x: 10,
    ease: Power2.ease
}, .3) ;
tl.from('.cta', 0.5, {
    opacity: 0,
    x: 10,
    ease: Power2.ease
}, 0.3);
tl.from('.social-links', 0.5, {
    opacity: 0,
    x: 10,
    ease: Power2.ease
}, 0.6);
tl.from('.wrapper .title-section', 0.8, {
    opacity: 0,
    y: -30,
    ease: Power2.ease
}, 0.2);
tl.from('.wrapper .hero', 0.5, {
    opacity: 0,
    x: -30,
    ease: Power2.ease
}, 0.4);
tl.from('.wrapper .hero .artist', 0.5, {
    opacity: 0,
    x: 30,
    ease: Power2.ease
}, 0.6);



const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;



const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }     
    setTimeout(() => current.classList.remove('current')); 
    
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for previous slide
    if(current.previousElementSibling) {
        //Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to last
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

