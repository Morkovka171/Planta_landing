"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if(reviewsSwiper) {
const swiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    autoHeight: true,
    loop: true,
    centeredSlides: true, 
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // breakpoints: {
    //     640: {
    //       slidesPerView: 1,
    //       //spaceBetween: 40
    //     }
    //   }
  });
}

// $('.swiper-wrapper').slick({
//   centerMode: true,
//   dots: true,
//   centerPadding: '60px',
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });