// Enable tooltips

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// First screen hover effect ---------------------------------------------------

if (window.screen.width >= 1200) {

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

}

// Catalog accordion -----------------------------------------------------------

if (document.getElementById('catalog-accordion')) {

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

}

// Fetch local json for CATALOG

if (document.getElementById('catalog-content')) {

    let parentEl = document.querySelector('.catalog-content')

    $(function () {
        let data;

        fetch("catalog.json")
            .then(response => response.json())
            .then(json =>
                (
                    json.map(value => {
                        $('.catalog-content').prepend(`<div class="col-md-6 col-lg-6 col-xl-4 single-item-wrapper">
                                        <div class="single-item">
                                            <div class="upper-part" style="background-image: url('${value.image}'); height: 260px">
<!--                                                <img src=${value.image} alt="Illustration">-->
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

}

// Fetch local json for NEWS

if (document.getElementById('news-content')) {

    let parentEl = document.querySelector('.news-content')

    $(function () {
        let data;

        fetch("news.json")
            .then(response => response.json())
            .then(json =>
                (
                    json.map(value => {
                        $('.catalog-content').prepend(`<div class="col-md-12 col-lg-6 col-xl-4 single-item-wrapper">
                                        <div class="single-item">
                                            <div class="upper-part" style="background-image: url('${value.image}'); height: 350px">
<!--                                                <img src=${value.image} alt="Illustration">-->
                                            </div>
                                            <div class="lower-part">
                                                <h5>${value.header}</h5>
                                                <span class="description">${value.description}</span>
                                                <a class="learn-more" href="#">Подробнее</a>
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

}

// Ready-to-use page

if (document.getElementById('ready-to-use')) {

    let parentEl = document.querySelector('.ready-to-use-content')

    $(function () {
        let data;

        fetch("ready-to-use.json")
            .then(response => response.json())
            .then(json =>
                (
                    json.map(value => {
                        $('.ready-to-use-content').prepend(
                            `<div class="col-md-12 col-lg-6 col-xl-4 single-item-wrapper">
                                <div class="single-item">
                                    <div class="upper-part">
                                        <img src="${value.image}" alt="Illustration">
                                    </div>
                                    <div class="lower-part">
                                        <h5>${value.header}</h5>
                                        <div class="custom-block__property">
                                            <div class="inner-text-wrapper">
                                                <span>Длина периметра</span>
                                            </div>
                                            <span class="custom-block__property-value">${value.length}</span>
                                        </div>
                                        <div class="custom-block__property">
                                            <div class="inner-text-wrapper">
                                                <span>Цвет</span>
                                            </div>
                                            <span class="custom-block__property-value">
                                                <span class="color"
                                                      style="background-color: ${value.color}">&nbsp;</span>
                                            </span>
                                        </div>

                                        <div class="prices-block">
                                            <div class="custom-block__property">
                                                <div class="inner-text-wrapper">
                                                    <span>Общая стоимость</span>
                                                </div>
                                                <span class="custom-block__property-value">${value.totalValue + ' ' + value.currency}</span>
                                            </div>
                                            <div class="custom-block__property">
                                                <div class="inner-text-wrapper">
                                                    <span>Стоимость погонного метра</span>
                                                </div>
                                                <span class="custom-block__property-value">${value.meterCost + ' ' + value.currency}</span>
                                            </div>
                                        </div>

                                        <!-- Dropdown part -->
                                        <div class="bottom-wrapper">
                                            <div class="another-wrapper">
                                                <div class="dropdown-block-part">
                                                    <div class="custom-block__property">
                                                        <div class="inner-text-wrapper">
                                                            <span>Количество ворот</span>
                                                        </div>
                                                        <span class="custom-block__property-value">${value.gatesNum} шт.</span>
                                                    </div>
                                                    <div class="custom-block__property">
                                                        <div class="inner-text-wrapper">
                                                            <span>Количество калиток</span>
                                                        </div>
                                                        <span class="custom-block__property-value">${value.wicketsNum} шт.</span>
                                                    </div>
                                                    <div class="custom-block__property">
                                                        <div class="inner-text-wrapper">
                                                            <span>Высота</span>
                                                        </div>
                                                        <span class="custom-block__property-value">${value.height} мм.</span>
                                                    </div>
                                                </div>
    
                                                <div class="hover__more-block">
                                                    <div class="inner-wrapper">
                                                        <div class="custom-block__property">
                                                            <div class="inner-text-wrapper">
                                                                <span>Общая стоимость:</span>
                                                            </div>
                                                            <div class="nameless-inner-wrapper">
                                                                <span class="custom-block__property-value">${value.totalValue + ' ' + value.currency}</span>
                                                                <span class="custom-block__property-unit">штука</span>
                                                            </div>
                                                        </div>
                                                        <div class="custom-block__property">
                                                            <div class="inner-text-wrapper">
                                                                <span>Стоимость погонного метра:</span>
                                                            </div>
                                                            <div class="nameless-inner-wrapper">
                                                                <span class="custom-block__property-value">${value.meterCost + ' ' + value.currency}</span>
                                                                <span class="custom-block__property-unit">штука</span>
                                                            </div>
                                                        </div>
                                                        <a href="${value.link}" class="green-button">Подробнее <img
                                                                src="img/icons/ready-to-use/sm-arrow.png" alt="arrow"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!---->

                                    </div>
                                </div>
                            </div>`
                        )
                    })

                )
            )
            .then(() => {
                let cards = document.querySelectorAll('.single-item-wrapper')
                let index = 6;
                let zIndex = 1000;

                //
                function showCards(n, visible) {
                    $('.ready-to-use-content').prepend(`
                            <div id="overlay">
                                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                            </div>
                        `)
                    setTimeout(() => {
                        parentEl.removeChild(document.getElementById('overlay'))
                        if (!visible) {
                            for (let i = 0; i < n; i++) {
                                cards[i].style.display = "flex"
                                cards[i].classList.add("show-me")
                            }
                        } else {
                            for (let i = 6; i < n; i++) {
                                cards[i].style.display = "flex"
                                cards[i].classList.add("dropdown-single-item")
                                // cards[i].style.zIndex = zIndex - 1;
                                // zIndex -= 1;
                            }
                        }
                    }, 500)

                }


                let expand = document.querySelector('.expand-button')
                expand.addEventListener('click', () => {
                    // parentEl.style.backgroundColor = "#000000";
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

}

// About page

if (document.getElementById('about-page')) {

    let parentEl = document.querySelector('.protocols-content')

    $(function () {
        let data;

        fetch("protocols.json")
            .then(response => response.json())
            .then(json =>
                (
                    json.map(value => {
                        $('.protocols-content').prepend(
                            `<div class="protocol-card">
                                        <div class="img-wrapper">
                                            <div class="image-div"
                                                 style="background-image: url(${value.image})" 
                                                 onclick="openFullView('${value.image}')"
                                                 data-toggle="modal"
                                                 data-target="#fullViewModal">
                                            </div>
                                        </div>
                                        <span>${value.description}</span>
                                    </div>`
                        )
                    })

                )
            )
            .then(() => {
                let cards = document.querySelectorAll('.protocol-card')
                let index = 10;
                let zIndex = 1000;

                //
                function showCards(n, visible) {
                    $('.protocols-content').prepend(`
                            <div id="overlay">
                                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                            </div>
                        `)
                    setTimeout(() => {
                        parentEl.removeChild(document.getElementById('overlay'))
                        if (!visible) {
                            for (let i = 0; i < n; i++) {
                                cards[i].style.display = "block"
                                cards[i].classList.add("show-me")
                            }
                        } else {
                            for (let i = 10; i < n; i++) {
                                cards[i].style.display = "block"
                                cards[i].classList.add("dropdown-single-item")
                                // cards[i].style.zIndex = zIndex - 1;
                                // zIndex -= 1;
                            }
                        }
                    }, 500)

                }


                let expand = document.querySelector('.expand-button')
                expand.addEventListener('click', () => {
                    // parentEl.style.backgroundColor = "#000000";
                    if (index < cards.length) {
                        index += 10
                        showCards(index, true)
                    } else {
                        expand.style.display = 'none'
                    }
                })


                showCards(index, false)
            })
    })

}

// Summon modal

function openFullView(value) {
    // console.log(value)
    document.getElementById('modal-hook').innerHTML = `<img src="${value}" alt="Slider image" style="width: 100%">`
    // <img src="${value}" alt="Slider image" style="width: 100%">
}

// Contacts tabs

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('contacts-page')) {

        let tab = document.querySelectorAll('.btn-wrapper'),
            info = document.querySelector('.tab-buttons'),
            tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
                tab[i].classList.remove('active-tab');
            }
        }

        hideTabContent(1);
        tab[0].classList.add('active-tab');


        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
                tab[b].classList.add('active-tab');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('btn-wrapper')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });

    } else if (document.getElementById('direction1')) {

    }
})

