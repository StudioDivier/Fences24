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

// $.extend($.ui.slider.prototype.options, {
//     animate: 300
// });

$(".flat-slider")
    .slider({
        range: "min",
        min: 0,
        max: 500
    })
    .slider("pips", {
        rest: "label",
        step: 25,
        suffix: ' м.',
    })
    .slider("float", {});

$(".flat-slider-vertical-3")
    .slider({
        max: 2790,
        min: 530,
        step: 465,
        range: "min",
        value: 1860,
        orientation: "vertical"
    })
    .slider("pips", {
        rest: "label",
        // step: 465,
    })
    .slider("float", {});

if (document.querySelector('#calculator-page')) {

    $(".flat-slider")
        .slider({
            range: "min",
            min: 0,
            max: 500
        })
        .slider("pips", {
            rest: "label",
            step: 25,
            suffix: ' м.',
        })
        .slider("float", {});

    $(".flat-slider-vertical-3")
        .slider({
            max: 2790,
            min: 530,
            step: 465,
            range: "min",
            value: 1860,
            orientation: "vertical"
        })
        .slider("pips", {
            rest: "label",
            // step: 465,
        })
        .slider("float", {});

    $(".flat-slider-vertical-4")
        .slider({
            max: 2790,
            min: 0,
            step: 465,
            range: "min",
            value: 0,
            orientation: "vertical"
        })
        .slider("pips", {
            rest: "label",
            // step: 465,
        })
        .slider("float", {});

    $(".flat-slider-vertical-5")
        .slider({
            max: 5050,
            min: 0,
            step: 1010,
            range: "min",
            value: 0,
            orientation: "vertical"
        })
        .slider("pips", {
            rest: "label",
            // step: 465,
        })
        .slider("float", {});

    $(".flat-slider-vertical-6")
        .slider({
            max: 6000,
            min: 0,
            step: 1000,
            range: "min",
            value: 0,
            orientation: "vertical"
        })
        .slider("pips", {
            rest: "label",
            // step: 465,
        })
        .slider("float", {});

    $(".flat-slider-vertical-7")
        .slider({
            max: 2000,
            min: 0,
            step: 400,
            range: "min",
            value: 0,
            orientation: "vertical"
        })
        .slider("pips", {
            rest: "label",
            // step: 465,
        })
        .slider("float", {});

    $(".flat-slider-vertical-8")
        .slider({
            max: 2000,
            min: 0,
            step: 400,
            range: "min",
            value: 0,
            orientation: "vertical"
        })
        .slider("pips", {
            rest: "label",
            // step: 465,
        })
        .slider("float", {});

    $(".flat-slider-vertical-9")
        .slider({
            max: 2000,
            min: 0,
            step: 400,
            range: "min",
            value: 0,
            orientation: "vertical"
        })
        .slider("pips", {
            rest: "label",
            // step: 465,
        })
        .slider("float", {});

    $(function () {
        var sliderLength = $(".flat-slider"),
            inputLength = document.querySelectorAll('.tab1__length-input'),
            endValue = document.querySelectorAll('.tab1__lengthEndValue'),

            sliderHeight1 = $(".flat-slider-vertical-3"),
            inputHeight1 = document.querySelectorAll('.tab2__height-input'),
            endValue1 = document.querySelectorAll('.jesusChristPlsWork'),

            sliderHeight4 = $(".flat-slider-vertical-4"),
            inputHeight4 = document.querySelectorAll('.tab4__height-input'),
            endValue4 = document.querySelectorAll('.tab4__heightEndValue'),

            sliderHeight5 = $(".flat-slider-vertical-5"),
            inputHeight5 = document.querySelectorAll('.tab5__height-input'),
            endValue5 = document.querySelectorAll('.tab5__heightEndValue'),

            sliderHeight6 = $(".flat-slider-vertical-6"),
            inputHeight6 = document.querySelectorAll('.tab6__height-input'),
            endValue6 = document.querySelectorAll('.tab6__heightEndValue'),

            sliderHeight7 = $(".flat-slider-vertical-7"),
            inputHeight7 = document.querySelectorAll('.tab7__height-input'),
            endValue7 = document.querySelectorAll('.tab7__heightEndValue'),

            sliderHeight8 = $(".flat-slider-vertical-8"),
            inputHeight8 = document.querySelectorAll('.tab8__height-input'),
            endValue8 = document.querySelectorAll('.tab8__heightEndValue'),

            sliderHeight9 = $(".flat-slider-vertical-9"),
            inputHeight9 = document.querySelectorAll('.tab9__height-input'),
            endValue9 = document.querySelectorAll('.tab9__heightEndValue'),

            min,
            max;

        let autoLink = (a, b, c, min, max) => {

            $.map(a, (elem) => {
                // console.log(elem)
                $(elem).on("slide", function (e, ui) {

                    b.forEach(el => {
                        // console.log(el)
                        el.value = ui.value
                    })
                    c.forEach(el => {
                        el.innerHTML = ui.value;
                    })
                });
            })

            b.forEach(el => {
                el.addEventListener("input", function (e) {
                    // console.log(e.target);
                    var num = parseFloat(el.value),
                        isProblem = false;

                    if (num === num) {

                        if (num < min) {
                            num = min;
                        } else if (num > max) {
                            num = max;
                        }

                        // for (let i = 0; i < a.length; i++) {
                        //     $(a[i]).slider("value", num)
                        // }
                        a.slider("value", num);

                        b.forEach(el => {
                            el.value = num
                        })

                    } else {
                        alert("Введите число");
                    }
                })
            });
        }

        autoLink(sliderLength, inputLength, endValue, 0, 999999);
        autoLink(sliderHeight1, inputHeight1, endValue1, 0, 2790);
        autoLink(sliderHeight4, inputHeight4, endValue4, 0, 2000);
        autoLink(sliderHeight5, inputHeight5, endValue5, 0, 5050);
        autoLink(sliderHeight6, inputHeight6, endValue6, 0, 6000);
        autoLink(sliderHeight7, inputHeight7, endValue7, 0, 2000);
        autoLink(sliderHeight8, inputHeight8, endValue8, 0, 2000);
        autoLink(sliderHeight9, inputHeight9, endValue9, 0, 2000);

        document.querySelectorAll('.ui-slider-pip').forEach(el => {
            el.addEventListener('click', (e) => {
                // Change closest input value
                // let targetValue = e.target.innerHTML;
                let targetValue = el.querySelector('.ui-slider-label').innerHTML;
                let neededInput = el.closest('.input-outer-wrapper').parentElement.querySelector('.tab-section__header').querySelector('input')
                neededInput.value = targetValue;

                // Change associated span in tab footer
                let targetInputName = neededInput.name + 'EndValue';
                // console.log(document.querySelector(`.${targetInputName}`))
                document.querySelectorAll(`.${targetInputName}`).forEach(el => {
                    el.innerHTML = targetValue;
                })
            })
        })

        document.querySelectorAll('#flat-slider').forEach(elem => {
            elem.querySelectorAll('.ui-slider-pip').forEach(el => {
                el.addEventListener('click', (e) => {

                    // Change closest input value
                    // let targetValue = e.target.innerHTML;
                    let targetValue = el.querySelector('.ui-slider-label').innerHTML;
                    let neededInput = el.closest('.tab-section').querySelector('.tab-section__header').querySelector('input')
                    neededInput.value = targetValue;

                    // Change associated span in tab footer
                    let targetInputName = neededInput.name + 'EndValue';
                    // console.log(document.querySelector(`.${targetInputName}`))
                    document.querySelectorAll(`.${targetInputName}`).forEach(el => {
                        el.innerHTML = targetValue;
                    })
                })
            })
        })

    })

    document.querySelector('.tab2__height-input').addEventListener('input', e => {
        console.log(e.target.value)
    })

}