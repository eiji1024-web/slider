(function() {
    new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    })
})();