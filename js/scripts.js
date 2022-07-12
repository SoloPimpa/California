$(document).ready(function () {

    $('.slide-two').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['', ' '],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.slide-one').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['', ' '],
        responsive: {
            0: {
                items: 1
            },
        }
    });
});
const hamburgerButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

function toggleMenu() {
    console.log('toggle');
    menu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

hamburgerButton.addEventListener('click', toggleMenu);