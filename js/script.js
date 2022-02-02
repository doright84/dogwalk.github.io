$(document).ready(function () {
    AOS.init();
    // ---gotop----
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
    $(".gotop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.gotop').slideDown();

        } else {
            $('.gotop').slideUp();

        }

    });
    // 
    
// main -swiper-
let main_phone = new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 500,
});
 
});