const sliderInsights = () =>{
    $('.insights__list').slick({
        dots:true,
        arrows : true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '10rem',
        prevArrow: '<button class="insights-prev"></button>',
        nextArrow: '<button class="insights-next"></button>'
    });
    if ($(window).width() < 666) {
        $(".insights__list").slick('slickSetOption', 'slidesToShow', 1);
    }
}

const validateForm = () => {
    $('#modal').fancybox();
    $('.subs__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits : true,
            }
        },
        messages: {
            name: {
                required: "Please specify your name",
                minlength: "Name can't be shorter than 2 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter valid email address"
            }
        },
        submitHandler: function () {
            $("#modal").trigger('click');
            $('.subs__form')[0].reset();
        }
    });
}


const accordion  = () =>{
    $('.culture__item-toggle').click(function(e) {
        e.preventDefault();
        let $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(400);
        } else {
            $this.parent().parent().find('li .culture__item-inner').removeClass('show');
            $this.parent().parent().find('li .culture__item-inner').slideUp(400);
            $this.next().toggleClass('show');
            $this.next().slideToggle(0);
        }
    });
}
const openMenu  = () =>{
    $(".header__burger").click(function() {
        if ($("#header__burger-content").hasClass("header__burger-hidden")) {
            $("#header__burger-content").attr("class", "header__burger-visible animated header__burger-menu");
            // $('body').css('overflow','hidden')
            $('.header__burger-wrap').css({'background-color':'white','position':'relative'})
        } else {
            $("#header__burger-content").attr("class", "header__burger-hidden animated");
            // $('body').css('overflow','visible')
            $('.header__burger-wrap').css({'background-color':'transparent','position':'absolute'})
        }
        $(this).toggleClass("header__burger-open");
    });
};


$(document).ready(function(){
    sliderInsights();
})

$( window ).on( "load", function() {
    accordion();
    openMenu();
    validateForm()
});




