let galleryImages = document.querySelectorAll('.gallery .img');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

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

tl.from('.wrapper .title-section', 0.5, {
    opacity: 0,
    x: 30,
    ease: Power2.ease
}, 0.2);
tl.from('.wrapper .hero', 0.5, {
    opacity: 0,
    x: 30,
    ease: Power2.ease
}, 0.4);
tl.from('.wrapper .hero .gallery', 0.5, {
    opacity: 0,
    x: 30,
    ease: Power2.ease
}, 0.6);

if(galleryImages) {
    galleryImages.forEach(function(image,index) {
        image.addEventListener('click', () => {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue('background-image');
            let getImgUrlPos = getFullImgUrl.split('IMG/sally-thumb');
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window');
            newImgWindow.setAttribute('onclick', 'closeImg()' );

            let newImg = document.createElement('img');
            newImgWindow.appendChild(newImg); 
            newImg.setAttribute('src', '../IMG/sally-img' + setNewImgUrl);
            newImg.setAttribute('id', 'current-img');

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth -imgWidth) / 2) - 80;

                newImg.style.animation = `navLinkFade 0.7s ease forwards`;
                let newPrevBtn = document.createElement('a');
                let btnPrevText = document.createTextNode('Prev');
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute('class', 'img-btn-prev');
                newPrevBtn.setAttribute('onclick', 'changeImg(0)');
    
                let newNextBtn = document.createElement('a');
                let btnNextText = document.createTextNode('Next');
                newPrevBtn.style.animation = `navLinkFade 0.7s ease forwards`;

                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute('class', 'img-btn-next');
                newNextBtn.setAttribute('onclick', 'changeImg(1)');
                newNextBtn.style.animation = `navLinkFade 0.7s ease forwards`;
            };
 
        });
    });
}

function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();

}
function changeImg(changeDir) {
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement('img');
    getImgWindow.appendChild(newImg);
    newImg.style.animation = `navLinkFade 0.7s ease forwards`;

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }
    newImg.setAttribute('src', '../IMG/sally-img/img' + calcNewImg + '.png');
    newImg.setAttribute('id', 'current-img');

    getLatestOpenedImg = calcNewImg;


}