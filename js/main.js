const swiper = new Swiper('.swiperBanner', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: '.slider-pagination',
        dynamicBullets: true,
        clickable: true,
    },
});

function sliderBanner() {
    console.log("asd")
    if (window.innerWidth <= 768) {
        const swiper = new Swiper('.swiperBrands', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            spaceBetween: 30,
            speed: 1000,
            pagination: {
                el: '.slider-pagination-brands',
                dynamicBullets: true,
                clickable: true,
            },
        });
    }
}
sliderBanner();
window.addEventListener('resize', function (event) {
    sliderBanner();
}, true);



var productButton = document.querySelectorAll('.footer-products .title');
productButton.forEach(function(btn){
    btn.addEventListener("click", function (e) {
        var parent = btn.closest(".footer-products");
        parent.classList.toggle("active");
    });
});