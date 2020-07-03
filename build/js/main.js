"use strict";$(document).ready(function(){var t;(t=$(".services-carousel"))&&t.slick({slidesToScroll:3,slidesToShow:3,appendArrows:$(".services-block .arrows-container"),prevArrow:'<div class="arrows-container__arrow"><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976312 4.7308 0.659729 4.53553 0.464467C4.34027 0.269205 4.02369 0.269205 3.82843 0.464467L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="black"/></svg></div>',nextArrow:'<div class="arrows-container__arrow"><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z" fill="black"/></svg></div>',responsive:[{breakpoint:992,settings:{slidesToScroll:2,slidesToShow:2}},{breakpoint:576,settings:{slidesToScroll:1,slidesToShow:1}}]});var a;(a=$(".promo-slider"))&&a.slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1});var e;e=1200,$(".brands")&&window.matchMedia("(max-width: ".concat(e,"px)")).matches&&$(".brands").slick({slidesToShow:3,slidesToScroll:3,infinite:!1,appendArrows:$(".popular-brands .arrows-container"),prevArrow:'<div class="arrows-container__arrow"><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976312 4.7308 0.659729 4.53553 0.464467C4.34027 0.269205 4.02369 0.269205 3.82843 0.464467L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="black"/></svg></div>',nextArrow:'<div class="arrows-container__arrow"><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z" fill="black"/></svg></div>',responsive:[{breakpoint:992,settings:{slidesToScroll:2,slidesToShow:2}},{breakpoint:576,settings:{slidesToScroll:1,slidesToShow:1}}]});function i(t){t.on("click",function(t){t.preventDefault(),$(this).next("ul").slideToggle()})}i($(".catalog-menu__ul > li > a")),i($('[data-menu="mobile-catalog-menu"] .mobile-menu__ul > li > a')),$(".footer__menu-title").on("click",function(){$(this).next("ul").slideToggle()});function s(t,a,e,i){var s,o,n,l,c,d,r;s=t,o=a,n=e,l=i,$(s).on("click","[data-button]:not(.active)",function(){var t=$(this).data("button");$(o).css({transition:".1s"}),$(s+" [data-button].active").removeClass("active"),$(this).addClass("active"),$(o+'[data-menu="'+t+'"]').removeClass(l).addClass(n),$(o+"[data-menu].active").addClass(l).removeClass("active").hide(400),$(o+'[data-menu="'+t+'"]').addClass("active").show()}),c=a,d=e,r=i,$(t).on("click","[data-button].active",function(){var t=$(this).data("button");$(this).removeClass("active"),$(c+'[data-menu="'+t+'"]').removeClass(d),$(c+'[data-menu="'+t+'"]').addClass(r),$(c+'[data-menu="'+t+'"]').removeClass("active").hide(400)})}s(".bottom-tools",".mobile-menu","animate__animated animate__faster animate__fadeInBottomLeft","animate__animated animate__faster animate__fadeOutTopRight"),$(".bottom-tools[data-button]").on("click",function(){$(".mobile-menu").hasClass("active")?$("body").removeClass("overflow-hidden"):$("body").addClass("overflow-hidden")}),s(".right-tools__icons",".right-tools-box","animate__animated animate__fast animate__fadeInRight","animate__animated animate__fast animate__fadeOutRight");$(".right-tools__item").on("click",function(){$(".right-tools-box").on("click",".close",function(){$(this).closest(".right-tools-box").removeClass("active").hide(300),$(".right-tools").find(".right-tools__item.active").removeClass("active")}),$(document).mouseup(function(t){var a=$(".right-tools");a.is(t.target)||0!==a.has(t.target).length||($(".right-tools-box").hide(300),a.find(".right-tools__item.active").removeClass("active"))})});$(".lk-order__include-button").on("click",function(){$(this).closest(".lk-order").find(".lk-order__include").slideToggle(),$(this).toggleClass("active"),$(this).hasClass("active")?$(this).find("span").text("Свернуть"):$(this).find("span").text("Состав заказа")});$(".filters-item__title").on("click",function(){$(this).next(".filters-item__content").fadeToggle()});$(".filters-call-button").on("click",function(){$(".filters-wrap").fadeToggle(),$(this).find(".chevron-down").toggleClass("show")});$(".show-subcategories").on("click",function(){var t=$(this).next(".subcategories"),a=$(this).find(".show-subcategories__text");t.fadeToggle().toggleClass("show"),$(this).find(".chevron-down").toggleClass("show"),t.hasClass("show")?a.text("Скрыть все категории"):a.text("Показать все категории")}),$(".add-to-cart-button").on("click",function(){$(this).toggleClass("added")});$(".magnific-link").magnificPopup({type:"image",gallery:{enabled:!0}});$(".map-link").magnificPopup({type:"iframe"});var o;$(".tabs__switch-panel").on("click","[data-tab]:not(.active)",function(){var t;$(this).closest(".tabs__switch-panel").find("[data-tab].active").removeClass("active"),$(this).addClass("active"),o=$(this).data("tab"),t=o,$(".tabs__content-panel").find("[data-content].active").removeClass("active").hide(),$(".tabs__content-panel").find('[data-content="'+t+'"]').fadeIn(500).addClass("active")});$(".tabs__content-title").on("click",function(){$(this).next(".tabs__content-inner").slideToggle(),$(this).toggleClass("show")});var n,l;n=".change-radios",l=".change-contents",$(n).on("change","[data-change]",function(){var t=$(this).data("change");$(this).closest(n).next(l).children("[data-change]").hide(),$(this).closest(n).next(l).children('[data-change="'+t+'"]').fadeIn(300)});$(".lk-change-pass-label").on("change",'input[type="checkbox"]',function(){$(".lk-change-pass-inputs").fadeToggle()});$(".brand").on("click",".brand__more",function(){$(this).toggleClass("active"),$(this).closest(".brand").find(".brand__list").toggleClass("active"),$(this).hasClass("active")?$(this).text("Свернуть"):$(this).text("Все товары бренда")});$(".call").on("click",function(){$("#modal-form").arcticmodal()}),$('input[name="tel"]').mask("+7(999) 999-9999")});