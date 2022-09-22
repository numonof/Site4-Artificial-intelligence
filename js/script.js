var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    gragCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView:1,   
        },
        576:{
            slidesPerView:2,   
        },
        768:{
            slidesPerView:3,   
        },
        992:{
            slidesPerView:3,   
        },
        1200:{
            slidesPerView:4, 
        },
        1400:{
            slidesPerView:5, 
        }
    }
  });