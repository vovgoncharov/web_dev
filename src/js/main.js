$(document).ready(function () {
    $(".menu__own").on("click", function () {
        $(".menu__open").toggleClass("none");
        $(".menu__close").toggleClass("active");
        $(".menu").toggleClass("menu__active");
    });
    $('.slider').slick({
        appendArrows: ".arrows",
        dots: true,
        appendDots: ".circle"
    });
});