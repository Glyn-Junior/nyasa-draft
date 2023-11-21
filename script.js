var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.header .navbar');
 console.log('btn clicked');
   
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    console.log('btn clicked');
   
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".Home-slider",{
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".Room-slider",{
    spaceBetween: 20,   
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clikable: true,
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".Gallery-slider",{
    spaceBetween: 10,  
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clikable: true,
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".Review-slider",{
    spaceBetween: 10,   
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clikable: true,
    },

});