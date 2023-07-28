const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    a11y: {
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это крайний слайд',
      nextSlideMessage: 'Следующий слайд',
      paginationBulletMessage: 'Переключиться на следующий слайд'
    },
  });