


const sliderInsights = () =>{
    $('.insights__list').slick({
        dots:true,
        arrows : true,
        slidesToShow: 3,
        slidesToScroll: 1, centerMode: true,
        centerPadding: '10rem',
        prevArrow: '<button class="insights-prev"></button>',
        nextArrow: '<button class="insights-next"></button>'
    });
}
$(document).ready(function(){
    sliderInsights();
})





//
// let $carousel = $('.insights__list');
//
// let settings = {
//     dots: false,
//     arrows: false,
//     slide: '.insights__item',
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: '14rem',
// };
//
// function setSlideVisibility() {
//     //Find the visible slides i.e. where aria-hidden="false"
//     let visibleSlides = $carousel.find('.insights__item[aria-hidden="false"]');
//     //Make sure all of the visible slides have an opacity of 1
//     $(visibleSlides).each(function() {
//         $(this).css('opacity', 1);
//     });
//
//     //Set the opacity of the first and last partial slides.
//     $(visibleSlides).first().prev().css('opacity', 0);
// }
//
// $carousel.slick(settings);
// $carousel.slick('slickGoTo', 1);
// setSlideVisibility();
//
// $carousel.on('afterChange', function() {
//     setSlideVisibility();
// });





// const sliderBlog = () =>{
//     if (window.innerWidth <= 666) {
//         $(".blog__list").addClass('slider__blog');
//         $('.slider__blog').slick({
//             dots: true,
//         });
//     }
// }
// const openMenu = () => {
//     $(".header__burger").toggleClass("header__burger-close");
//     $(".header__menu").toggleClass("header__menu-open");
//     $("body").toggleClass('no-scroll');
// }
// const validateForm = () => {
//     $('#modal').fancybox();
//     $('#signin__form').validate({
//         rules: {
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         messages: {
//             email: {
//                 required: "Please enter your email address."
//             }
//         },
//         submitHandler: function (form) {
//             $("#modal").trigger('click');
//             $('#signin__form')[0].reset();
//         }
//     });
//
// }
//
// $(document).ready(function(){
//     sliderReview();
//     sliderBlog()
// })
//
// $( window ).on( "load", function() {
//     validateForm()
//     $(".header__mob").on("click", openMenu);
// });
