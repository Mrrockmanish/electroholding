$(document).ready(function () {
    // карусель услуг
    $('.services-carousel').slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        appendArrows: $('.services-block .arrows-container'),
        prevArrow: '<div class="arrows-container__arrow"><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976312 4.7308 0.659729 4.53553 0.464467C4.34027 0.269205 4.02369 0.269205 3.82843 0.464467L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="black"/></svg></div>',
        nextArrow: '<div class="arrows-container__arrow"><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z" fill="black"/></svg></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });

    // карусель брендов
    const brandsCarousel = (size) => {
        if (window.matchMedia(`(max-width: ${size}px)`).matches) {
            $('.brands').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                appendArrows: $('.popular-brands .arrows-container'),
                prevArrow: '<div class="arrows-container__arrow"><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976312 4.7308 0.659729 4.53553 0.464467C4.34027 0.269205 4.02369 0.269205 3.82843 0.464467L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="black"/></svg></div>',
                nextArrow: '<div class="arrows-container__arrow"><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z" fill="black"/></svg></div>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToScroll: 2,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 1
                        }
                    }
                ]
            })
        }
    }
    brandsCarousel(1200);

    // разворачевание меню в подвале
    $('.footer__menu-title').on('click', function () {
        $(this).next('ul').slideToggle();
    });

    // переключатель плашек справа
    const switchBox = () => {
        $('.right-tools').on('click', '[data-icon]:not(.active)', function () {
            // убираем класс active с активной иконки
            $(this).closest('.right-tools__icons').find('.right-tools__item.active').removeClass('active');
            // добавляем класс active иконке
            $(this).addClass('active');
            // определяем с каким блоком взаимодействовать
            const elData = $(this).data('icon');
            // скрываем все блоки за исключением нужного
            $('.right-tools-box:not([data-box="' + elData + '"])').hide();
            // показываем нужный блок
            $('[data-box="' + elData + '"]').fadeIn(300);
        });
        // скрываем окно по клику на свернуть
        $('.right-tools-box').on('click', '.close', function () {
            $(this).closest('.right-tools-box').hide();
            $('.right-tools').find('.right-tools__item.active').removeClass('active');
        });
        // скрываем окно по клику на любую область экрана кроме блока
        $(document).mouseup(function (e) {
            const clickObject = $('.right-tools');

            if (!clickObject.is(e.target) && clickObject.has(e.target).length === 0) {
                $('.right-tools-box').hide();
                clickObject.find('.right-tools__item.active').removeClass('active');
            }
        });
    }
    switchBox();

    //показ состава заказа
    const showOrderInclude = () => {
        $('.lk-order__include-button').on('click', function () {
            $(this).closest('.lk-order').find('.lk-order__include').slideToggle();
        })
    };
    showOrderInclude();

    // показ содержимого фильтров
    const showFilterContent = () => {
        $('.filters-item__title').on('click', function () {
            $(this).next('.filters-item__content').fadeToggle();
        });
    };
    showFilterContent();

    // показ блока фильтров
    const switchFilters = () => {
      $('.filters-call-button').on('click', function () {
        $('.filters-wrap').fadeToggle();
      });
    };
    switchFilters();

    // аниманция кнопки add to cart
    $('.add-to-cart').on('click', function () {
        $(this).addClass('added');
    });

    // фото в lighbox по клику
    const magnificImgShow = () => {
        $('.magnific-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    };
    magnificImgShow();

    // карты в lighbox по клику
    const magnificMapShow = () => {
        $('.map-link').magnificPopup({
            type: 'iframe',
        });
    };
    magnificMapShow();

    // табы на странице товара
    const switchTabContent = (contentData) => {
        $('.tabs__content-panel').find('[data-content].active').removeClass('active').hide();
        $('.tabs__content-panel').find('[data-content="' + contentData + '"]').fadeIn(500).addClass('active');
    };

    const switchTabs = () => {
        let elementData;
        $('.tabs__switch-panel').on('click', '[data-tab]:not(.active)', function () {
            $(this).closest('.tabs__switch-panel').find('[data-tab].active').removeClass('active');
            $(this).addClass('active');
            elementData = $(this).data('tab');
            switchTabContent(elementData);
        });

    };
    switchTabs();

    const accordeonInTabs = () => {
        $('.tabs__content-title').on('click', function () {
            $(this).next('.tabs__content-inner').slideToggle();
            $(this).toggleClass('show');
        });
    };
    accordeonInTabs();





});