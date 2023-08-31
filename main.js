// bootstrap5
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// init swiper
const swiper = new Swiper('.swiper',{
    spaceBetween: 24,
    mousewheel: true, // 滑鼠中鍵滾輪可滑動
    snapOnRelease: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, // 可拖動
    },
    slidePreview: 'auto', // 看到幾張slides
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // Responsive breakpoints
    breakpoints: {
        // >= 375px
        375: {
            direction: 'vertical',
        },
        // >= 1920px
        376: {
            direction: 'horizontal',
        },
    },
});




console.log("Hello world!");