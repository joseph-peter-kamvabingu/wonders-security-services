const swiper = new Swiper('.testimonial-slider', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});
