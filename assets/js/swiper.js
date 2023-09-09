// swiper
import Swiper from 'swiper/bundle';

// init swiper
const swiper = new Swiper('.swiper', {
    // swiper 斷點設定為 mobile first
    spaceBetween: 24,
    slidePreview: 4,
    direction: 'vertical',
    allowTouchMove: false,
    mousewheel: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, // 可拖動
    },
    breakpoints: {
        // >= 1400px
        1400: {
            slidePreview: 3,
            direction: 'horizontal',
            allowTouchMove: true,
        },
    },
});