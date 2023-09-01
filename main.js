// bootstrap5
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// init swiper
const swiper = new Swiper('.swiper',{
    spaceBetween: 24,
    slidePreview: 3, // 看到幾張slides
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, // 可拖動
    },
    mousewheel: true, // 滑鼠中鍵滾輪可滑動
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