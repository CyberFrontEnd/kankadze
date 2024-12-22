$(document).ready(function () {

  $('[data-fancybox]').fancybox({
    autoFocus: false,
  });


  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('.answearsItem__title').on('click', function () {
    $(this).parents('.answearsItem').find('.answearsItemDown').slideToggle();
  });

  new WOW().init();
});