// var lazyLoadInstance = new LazyLoad({
// });

// them affix vao header khi scroll
var affix = $('.header_menu');
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        affix.addClass('affix');
    } else {
        affix.removeClass('affix');
    }
});

// hien thi nut back to top 
var scroll = $('.backtop');
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        scroll.addClass('scroll');
    } else {
        scroll.removeClass('scroll');
    }
});

// scroll to top
var btn = $('.backtop_btn');
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// title btn
$('.owl-carousel button').prop('title', 'nav button');

// set height
if (window.innerWidth > 767) {
    var step_item = 0;
    $('.fmenu_height').each(function () {
        if (step_item < $(this).height()) {
            step_item = $(this).height();
        };
    });
    $('.fmenu_height').height(step_item);
}

// open search 
let search_box = $(".search_box");
$(".search_btn").click(function () {
    search_box.addClass("open");
});
$(".search_close").click(function () {
    search_box.removeClass("open");
});

// open menu mobile 
let menu_box = $(".menu_mb_box");
$(".mb_menu").click(function () {
    menu_box.addClass("open");
});
$(".menu_mb_close").click(function () {
    menu_box.removeClass("open");
});
$(".open_lv2_1").click(function () {
    $(this).find('.menumb_lv2_1').addClass("open");
});
$(".arrow_back").click(function (e) {
    e.stopPropagation();
    $(".menumb_lv2_1").removeClass("open");
});

// owlCarousel 
var nav_prev = `<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-0.75" y="0.75" width="43.5" height="43.5" rx="21.75" transform="matrix(-1 0 0 1 43.5 0)" stroke="white" stroke-width="1.5"/>
<g clip-path="url(#clip0_7271_97)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8128 23.2465L30 23.2465V21.7535L17.8128 21.7535L22.4368 17.0556L21.3978 16L15 22.5L21.3978 29L22.4368 27.9444L17.8128 23.2465Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_7271_97">
<rect width="13" height="15" fill="white" transform="matrix(0 1 1 0 15 16)"/>
</clipPath>
</defs>
</svg>
`;
var nav_next = `<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="0.75" width="43.5" height="43.5" rx="21.75" stroke="white" stroke-width="1.5"/>
<g clip-path="url(#clip0_7272_98)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.1872 23.2465L15 23.2465V21.7535L27.1872 21.7535L22.5632 17.0556L23.6022 16L30 22.5L23.6022 29L22.5632 27.9444L27.1872 23.2465Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_7272_98">
<rect width="13" height="15" fill="white" transform="matrix(0 1 -1 0 30 16)"/>
</clipPath>
</defs>
</svg>
`;

$('.home_banner_slide').owlCarousel({
    loop: true,
    margin: 28,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [nav_prev, nav_next],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        767: {
            items: 1,
        },
    }
})

$('.sp_like_slide').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // navText: [nav_prev, nav_next],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        991: {
            items: 3,
        },
    }
})

$('.cus_review_slide').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [`
        <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3206_87)">
        <path d="M0.75 15L12 0.9375L14.25 3.75L5.25 15L14.25 26.25L12 29.0625L0.75 15Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_3206_87">
        <rect width="15" height="30" fill="white" transform="matrix(1 0 0 -1 0 30)"/>
        </clipPath>
        </defs>
        </svg>
        `,
        `<svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3206_87)">
        <path d="M14.25 15L3 0.9375L0.75 3.75L9.75 15L0.75 26.25L3 29.0625L14.25 15Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_3206_87">
        <rect width="15" height="30" fill="white" transform="matrix(-1 0 0 -1 15 30)"/>
        </clipPath>
        </defs>
        </svg>
        `
    ],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        991: {
            items: 3,
        },
    }
})

$('.insta_slide').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    // navText: [nav_prev, nav_next],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        991: {
            items: 5,
        },
    }
})

$('.pss3_slide').owlCarousel({
    loop: true,
    margin: 140,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            mouseDrag: true,
            touchDrag: true,
        },
        600: {
            items: 3,
        },
    }
})

$('.prdd_related_slide').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [`
        <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3206_87)">
        <path d="M0.75 15L12 0.9375L14.25 3.75L5.25 15L14.25 26.25L12 29.0625L0.75 15Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_3206_87">
        <rect width="15" height="30" fill="white" transform="matrix(1 0 0 -1 0 30)"/>
        </clipPath>
        </defs>
        </svg>
        `,
        `<svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3206_87)">
        <path d="M14.25 15L3 0.9375L0.75 3.75L9.75 15L0.75 26.25L3 29.0625L14.25 15Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_3206_87">
        <rect width="15" height="30" fill="white" transform="matrix(-1 0 0 -1 15 30)"/>
        </clipPath>
        </defs>
        </svg>
        `
    ],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        991: {
            items: 4,
        },
    }
})

// lazy 
document.addEventListener("touchstart", function () {
    $(".lazy_img").attr("src", function () {
        return $(this).attr("data-img");
    });
    $(".lazy_bg").attr("style", function () {
        return $(this).attr("data-bg");
    });
});
document.addEventListener("mouseover", function () {
    $(".lazy_bg").attr("style", function () {
        return $(this).attr("data-bg");
    });
    $(".lazy_img").attr("src", function () {
        return $(this).attr("data-img");
    });
});

Fancybox.bind('[data-fancybox]', {
});

// paginate nav
$('.pagination-box first').html(
    `<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 5.5L5.83333 5.96046e-08L7 1.1L2.33333 5.5L7 9.9L5.83333 11L0 5.5Z" fill="currentColor"/>
    </svg>
    `
);
$('.pagination-box .last').html(
    `<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5.5L1.16667 5.96046e-08L-2.98023e-08 1.1L4.66667 5.5L-2.98023e-08 9.9L1.16667 11L7 5.5Z" fill="currentColor"/>
    </svg>
    `
);


// product detail img
$(document).ready(function () {
    var owlMain_detail = $(".product_img_owl");
    var owlDot_detail = $(".product_dots_slide");

    $(".slider_close").click(function () {
        $(".slider_img_product").removeClass("active");
        $("html").removeClass("stop");
    });
    $(".slider_img_body").click(function (e) {
        if (e.target === e.currentTarget) {
            $(".slider_img_product").removeClass("active");
            $("html").removeClass("stop");
        }
    });

    // owlMain_detail.owlCarousel({
    //   items: 1,
    //   loop: false,
    //   margin: 10,
    //   nav: false,
    //   dots: false,
    //   onChanged: syncDot,
    // });

    // owlDot_detail.owlCarousel({
    //   items: 3,
    //   loop: false,
    //   margin: 15,
    //   nav: false,
    //   dots: false,
    //   responsive: {
    //     0: {
    //       items: 3,
    //     },
    //   },
    // });

    // owlDot_detail.on("click", ".dot_item_detail", function (e) {
    //   var index = $(this).parent().index();
    //   owlMain_detail.trigger("to.owl.carousel", [index, 300]);
    // });

    // function syncDot(event) {
    //   var currentIndex = event.item.index;
    //   var dotFocus = owlDot_detail
    //     .find(".owl-item")
    //     .eq(currentIndex)
    //     .find(".dot_item_detail");
    //   owlDot_detail.trigger("to.owl.carousel", [currentIndex, 300]);
    //   $(".dot_item_detail").removeClass("active");
    //   dotFocus.addClass("active");
    // }

    const sliderTop = $(".product_img_owl");
    const sliderBottom = $(".product_dots_slide");
    const duration = 500;

    sliderTop
        .owlCarousel({
            items: 1,
            loop: false,
            margin: 10,
            nav: false,
            dots: false,
        })
        .on("changed.owl.carousel", function (e) {
            sliderBottom.trigger("to.owl.carousel", [e.item.index, duration, true]);
            $(".dot_item_detail").removeClass("focus");
            $(".dot_item_detail").eq(e.item.index).addClass("focus");
        });

    sliderBottom
        .owlCarousel({
            loop: false,
            dots: false,
            margin: 20,
            responsive: {
                0: {
                    items: 4,
                },
            },
        })
        .on("click", ".owl-item", function (e) {
            sliderTop.trigger("to.owl.carousel", [$(this).index(), duration, true]);
            $(".dot_item_detail").removeClass("focus");
            $(this).find(".dot_item_detail").addClass("focus");
            console.log("1233");
        });

    // $(".show-image-array").click(function () {
    //     var index = $(this).data("index");
    //     owlMain_detail.trigger("to.owl.carousel", [index, 300]);
    // });
});