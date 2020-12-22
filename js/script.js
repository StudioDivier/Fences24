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

// Enable tooltips

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// First screen hover effect ---------------------------------------------------

let absoluteBlock = document.querySelectorAll('.first-type-block');
let absoluteBlockSM = document.querySelectorAll('.second-type-block');
let hoverBlock = document.querySelectorAll('.first-type-block-hover');
let hoverBlockSM = document.querySelectorAll('.second-type-block-hover');
for (let i = 0; i < hoverBlock.length; i++) {
    absoluteBlock[i].addEventListener('mouseenter', function () {
        absoluteBlock[i].classList.add("hide");
    })
    hoverBlock[i].addEventListener('mouseleave', function () {
        absoluteBlock[i].classList.remove("hide");
    })
}
for (let i = 0; i < hoverBlockSM.length; i++) {
    absoluteBlockSM[i].addEventListener('mouseenter', function () {
        absoluteBlockSM[i].classList.add("hide");
    })
    hoverBlockSM[i].addEventListener('mouseleave', function () {
        absoluteBlockSM[i].classList.remove("hide");
    })
}

// Catalog accordion -----------------------------------------------------------

$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }


    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');
        setTimeout(() => {
            $this.parent().toggleClass('click');
        }, 100)

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            $el.find('.submenu').not($next).slideUp().parent().removeClass('click');
        }
    }

    var accordion = new Accordion($('#catalog-accordion'), false);
});

// Fetch local json\


let parentEl = document.querySelector('.catalog-content')

$(function () {
    let data;

    fetch("test.json")
        .then(response => response.json())
        .then(json =>
            (
                json.map(value => {
                    $('.catalog-content').prepend(`<div class="col-md-6 col-lg-6 col-xl-4 single-item-wrapper">
                                        <div class="single-item">
                                            <div class="upper-part">
                                                <img src=${value.image} alt="Illustration">
                                            </div>
                                            <div class="lower-part">
                                                <h5>${value.header}</h5>
                                                <span class="description">${value.description}</span>
                                                <div class="diameter">
                                                    <div class="inner-text-wrapper">
                                                        <img src="img/catalog/icons/green-diameter.png" alt="Diameter">
                                                        <span>Диаметр</span>
                                                    </div>
                                                    <span>${value.diameter}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`)
                })

            )
        )
        .then(() => {
            let cards = document.querySelectorAll('.single-item-wrapper')
            let index = 6;
            let zIndex = 1000;

            function showCards(n, visible) {
                if (!visible) {
                    for (let i = 0; i < n; i++) {
                        // cards[i].style.display = "flex"
                        cards[i].classList.add("show-me")
                    }
                } else {
                    for (let i = 6; i < n; i++) {
                        // cards[i].style.display = "flex"
                        cards[i].classList.add("dropdown-single-item")
                        cards[i].style.zIndex = zIndex - 1;
                        zIndex -= 1;
                    }
                }

            }


            let expand = document.querySelector('.expand-button')
            expand.addEventListener('click', () => {
                if (index < cards.length) {
                    index += 6
                    showCards(index, true)
                } else {
                    expand.style.display = 'none'
                }
            })


            showCards(index, false)
        })
})



