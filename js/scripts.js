$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout: 2000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:4
            }
        }
    });
});
const hamburgerButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
function toggleMenu(){
    console.log('toggle');
    menu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}
hamburgerButton.addEventListener('click', toggleMenu);