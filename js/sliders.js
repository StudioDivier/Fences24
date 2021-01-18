// Slick sliders init --------------------------------------------------------------

$('.promo-slider').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    prevArrow: `<img src="../img/second-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 25px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/second-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 25px; z-index: 999999999"/>`,
});

$('.how-to-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.how-to-slider2'
});

$('.how-to-slider2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.how-to-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 10px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 10px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        }
    ]
});

$('.how-to-slider3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.how-to-slider4'
});

$('.how-to-slider4').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.how-to-slider3',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 10px; z-index: 999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 10px; z-index: 999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        }
    ]
});

$('.how-to-slider5').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.how-to-slider6'
});

$('.how-to-slider6').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.how-to-slider5',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 10px; z-index: 999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 10px; z-index: 999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        }
    ]
});

$('.how-to-slider7').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.how-to-slider8'
});

$('.how-to-slider8').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.how-to-slider7',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 10px; z-index: 999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 10px; z-index: 999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        }
    ]
});

$('.about__production__step4-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    dots: false,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: -2px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: -2px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {}
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
})

$('.about__production__step5-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    dots: false,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: -2px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: -2px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {}
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
})

$('.about__production__step6-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    dots: true,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: -2px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: -2px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
})

document.querySelectorAll('.slick-dots li button').forEach(el => {
    el.innerHTML = ''
})

$('.more-products').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    dots: false,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: -50px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: -50px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
})

$('.more-products1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    dots: false,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: -50px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: -50px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
})

$('.useful-materials').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    dots: false,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: -50px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: -50px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
})

$('.lower-block__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 0px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 0px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        }
    ]
});

$('.schemes-and-drawings__slider-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: `<img src="../img/third-screen/left-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; left: 12px; z-index: 999999999"/>`,
    nextArrow: `<img src="../img/third-screen/right-arrow.svg" alt="arrow" style="cursor: pointer; position: absolute; right: 12px; z-index: 999999999"/>`,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});