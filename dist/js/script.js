$(document).ready(function () {
  $('[data-fancybox]').fancybox({
    autoFocus: false,
  });

  // Start intlTelInput
  function phoneMask() {
    $('.phone_mask').intlTelInput({
      utilsScript: "js/utils.js",
      preferredCountries: ["ru", "by", "ua", "kz"]
    });
  }

  phoneMask();
});