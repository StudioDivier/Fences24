// Calculator page ------------------------------------

if (document.getElementById('calculator-page')) {

    let installationCheck = document.getElementById('installation-check-hook');
    let deliveryCheck = document.getElementById('delivery-check-hook');

    let fencePrice = document.getElementById('fence-price');
    let fencePriceData = fencePrice.getAttribute('data-fencePrice');
    let installationPrice = document.getElementById('installation-price');
    let installationPriceData = installationPrice.getAttribute('data-installationPrice');
    let deliveryPrice = document.getElementById('delivery-price');
    let deliveryPriceData = deliveryPrice.getAttribute('data-deliveryPrice');
    let finalPrice = document.getElementById('final-price');
    let finalPriceData = finalPrice.getAttribute('data-finalPrice');
    let currency = ' руб.'

    // Set initial price
    document.getElementById('final-price').innerHTML = parseInt(fencePriceData).toLocaleString() + ' руб.'

    // Check installation to be included in total price
    document.querySelectorAll('.label-container')[0].addEventListener('click', (e) => {
        installationCheck.checked = !installationCheck.checked;

        if (e.target.id === 'installation-check-hook') {
            if (installationCheck.checked) {
                document.getElementById('installation-hook').style.opacity = 1;

                finalPriceData = parseInt(finalPriceData) + parseInt(installationPriceData);
                document.getElementById('final-price').innerHTML = parseInt(finalPriceData).toLocaleString() + currency;
            } else {
                document.getElementById('installation-hook').style.opacity = 0.3;

                finalPriceData = parseInt(finalPriceData) - parseInt(installationPriceData);
                document.getElementById('final-price').innerHTML = parseInt(finalPriceData).toLocaleString() + currency;
            }
        }
    })

    // Check delivery to be included in total price
    document.querySelectorAll('.label-container')[1].addEventListener('click', (e) => {
        deliveryCheck.checked = !deliveryCheck.checked;

        if (e.target.id === 'delivery-check-hook') {
            if (deliveryCheck.checked) {
                document.getElementById('delivery-hook').style.opacity = 1;
                document.querySelector('.dropdown-toggle-split').disabled = false;

                finalPriceData = parseInt(finalPriceData) + parseInt(deliveryPriceData);
                document.getElementById('final-price').innerHTML = parseInt(finalPriceData).toLocaleString() + currency;
            } else {
                document.getElementById('delivery-hook').style.opacity = 0.3;
                document.querySelector('.dropdown-toggle-split').disabled = true;

                finalPriceData = parseInt(finalPriceData) - parseInt(deliveryPriceData);
                document.getElementById('final-price').innerHTML = parseInt(finalPriceData).toLocaleString() + currency;
            }
        }
    })

    // On fence type change swap layout
    // On page load

    let setDefaultType = (value) => {

        // document.querySelector('.determine-type').querySelectorAll('.tab-section').forEach(el => {
        //     el.style.display = 'none';
        // });

        document.querySelectorAll('.determine-type').forEach(el => {
            el.querySelectorAll('.tab-section').forEach(el => {
                el.style.display = 'none'
            })
        });

        document.querySelectorAll('.determine-type-accordion').forEach(el => {
            el.querySelectorAll('.tab-section').forEach(el => {
                el.style.display = 'none'
            })
        });

        [...document.querySelector('.determine-type').querySelectorAll('.tab-section')].filter(el =>
            el.getAttribute('data-typeSwap') === value || el.getAttribute('data-typeSwap') === 'type-factor' || el.getAttribute('data-typeSwap') === 'color-block'
        ).map(el => {
            el.style.display = 'flex'
        });

        [...document.querySelector('.determine-type-accordion').querySelectorAll('.tab-section')].filter(el =>
            el.getAttribute('data-typeSwap') === value || el.getAttribute('data-typeSwap') === 'type-factor' || el.getAttribute('data-typeSwap') === 'color-block'
        ).map(el => {
            el.style.display = 'flex'
        });
    }

    setDefaultType('3D');

    document.querySelectorAll('.fence-type-hook').forEach(el => {
        el.addEventListener('change', e => {
            if (e.target.value === '3D') {
                setDefaultType('3D')
            } else if (e.target.value === '2D') {
                setDefaultType('2D')
            } else {
                setDefaultType('Tech')
            }
        })
    })

    let setFourthTabType = (value) => {

        document.querySelectorAll('.determine-type2').forEach(el => {
            el.querySelector('.pick-a-lashing').querySelectorAll('.option-wrapper').forEach(el => {
                el.style.display = 'none'
            })
        });

        document.querySelectorAll('.determine-type2-accordion').forEach(el => {
            el.querySelector('.pick-a-lashing').querySelectorAll('.option-wrapper').forEach(el => {
                el.style.display = 'none'
            })
        });

        [...document.querySelector('.determine-type2').querySelector('.pick-a-lashing').querySelectorAll('.option-wrapper')].filter(el =>
            el.getAttribute('data-typeSwap') === value || el.getAttribute('data-typeSwap') === 'type-factor' || el.getAttribute('data-typeSwap') === 'color-block'
        ).map(el => {
            el.style.display = 'flex'
        });

        [...document.querySelector('.determine-type2-accordion').querySelector('.pick-a-lashing').querySelectorAll('.option-wrapper')].filter(el =>
            el.getAttribute('data-typeSwap') === value || el.getAttribute('data-typeSwap') === 'type-factor' || el.getAttribute('data-typeSwap') === 'color-block'
        ).map(el => {
            el.style.display = 'flex'
        });

    }

    setFourthTabType('F24')

    document.querySelectorAll('.holder-type-hook').forEach(el => {
        el.addEventListener('change', e => {
            if (e.target.value === 'Скоба усиленная') {
                setFourthTabType('fortified')
            } else if (e.target.value === 'Скоба F24') {
                setFourthTabType('F24')
            } else {
                setFourthTabType('F50')
            }
        })
    })

    // Color picker logic

    document.querySelectorAll('.pick-a-color__color-circle').forEach(el =>
        el.addEventListener('click', (e) => {
            el.parentElement.parentElement.parentElement.querySelector('.picked-color__circle').style.backgroundColor = e.target.style.backgroundColor;
            el.parentElement.parentElement.parentElement.querySelector('.picked-color__name').innerHTML = e.target.getAttribute('data-paletteColor');
            // e.target.closest('.bottom-part').document.querySelector('.params__picked-color').style.backgroundColor = e.target.style.backgroundColor;
            e.target.closest('.inner-wrapper').querySelector('.params__picked-color').style.backgroundColor = e.target.style.backgroundColor;
        })
    )

    // 3D tab - section size

    $("#section-size__input1").inputmask({"mask": "9999x9999"});

    // Init value

    // document.querySelector('.sectionSize1NumValue').innerHTML = document.getElementById('section-size__input1').value.slice(0, 4);
    // document.querySelector('.sectionSize2NumValue').innerHTML = document.getElementById('section-size__input1').value.slice(5, 9);

    // On change value

    // document.getElementById('section-size__input1').addEventListener('keypress', (e) => {
    //     let value = e.target.value;
    //     console.log('event')
    //     document.querySelector('.sectionSize1NumValue').innerHTML = value.slice(0, 4);
    //     document.querySelector('.sectionSize2NumValue').innerHTML = value.slice(5, 9);
    // });

    // Diameters counter ------------------------------------

    if (document.getElementsByClassName('diameter3D-step')) {
        document.querySelector('.diameter3DValue').innerHTML = document.querySelector('.diameter3D-input').value
        $(".for-3Ddiameter").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parents('.input-btns').prev().val();
            let setValue = (value) => {
                document.querySelector('.diameter3DValue').innerHTML = value
            }

            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 0.5;
                setValue(newVal)
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0.5) {
                    var newVal = parseFloat(oldValue) - 0.5;
                    setValue(newVal)
                } else {
                    newVal = 0.5;
                }
            }

            $button.parents('.input-btns').prev().val(newVal);

        });
    }

    $(".diameter2D-input").inputmask({"mask": "9/9/9"});

    if (document.getElementsByClassName('diameter2D-step')) {
        document.querySelectorAll('.diameter2DValue').forEach(el => {
            el.innerHTML = document.querySelectorAll('.diameter2D-input')[0].value
        })
        $(".for-2Ddiameter").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parents('.input-btns').prev().val().match(/[0-9]+/g);
            let setValue = (value) => {
                document.querySelector('.diameter2DValue').innerHTML = value.join('/')
            }

            if ($button.text() == "+") {
                var newVal = oldValue.map(el => parseInt(el) + 1)
                setValue(newVal)
            } else {
                // Don't allow decrementing below zero
                if (!oldValue.includes('0')) {
                    var newVal = oldValue.map(el => parseInt(el) - 1)
                    setValue(newVal)
                } else {
                    newVal = [0, 0, 0];
                }
            }

            $button.parents('.input-btns').prev().val(newVal);
        });

        document.querySelector('.diameter2D-input').addEventListener('keypress', e => {
            document.querySelector('.diameter2DValue').innerHTML = e.target.value
        })
    }

    document.querySelectorAll('.secheniye-option').forEach(el => {
        el.addEventListener('change', e => {
            document.querySelector('.secheniye-value__span').innerHTML = e.target.value;
        })
    })

    document.querySelector('.tabs-wrapper').querySelectorAll('.label-container').forEach(el => {
        let bold = 1;
        el.addEventListener('click', e => {

            if (e.target.classList.contains('boldTextOnClick')) {
                bold = !bold;
            }
            if (!e.target.querySelector('.boldTextOnClick').disabled) {
                if (bold) {
                    e.target.style.fontWeight = '700'

                } else {
                    e.target.style.fontWeight = '400'
                }
            }
        })
    })

    document.querySelector('.pick-a-filling-type').querySelectorAll('.inner-wrapper-type2').forEach(el => {
            if (el.classList.contains('disabled')) {
                el.style.pointerEvents = 'none';
            }

            el.querySelectorAll('.filling-type-selector').forEach(el => {
                el.addEventListener('click', e => {
                    if (e.target.classList.contains('boldTextOnClick')) {
                        console.log(e.target.checked)
                        if (e.target.checked) {
                            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.left-col').querySelector('.img-wrapper').style.borderColor = 'black';
                        } else {
                            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.left-col').querySelector('.img-wrapper').style.borderColor = 'transparent';
                        }
                    }
                })
            })
        }
    )

    // Tabs footer updates logic

    let updateTabFooter = (name, value) => {
        let matchInput = Array.from(document.querySelectorAll('input')).filter(elem => elem.name === name)
        // console.log(matchInput)

        let matchValue = Array.from(document.querySelectorAll('.single-param__num')).filter(elem => elem.getAttribute('data-inputHook') === name)
        // console.log(matchValue)

        matchValue[0].innerHTML = value
    }

    document.querySelectorAll('.info-tabcontent').forEach(element => {

        element.querySelectorAll('input').forEach(el => {
            let eventListener;

            if (el.type === 'checkbox' || el.type === 'radio') {
                eventListener = 'change'
            } else {
                eventListener = 'input'
            }

            el.addEventListener(eventListener, () => {
                // console.log(el.name)
                // console.log(el.value)
                updateTabFooter(el.name, el.value)
            })
        })

    })

}