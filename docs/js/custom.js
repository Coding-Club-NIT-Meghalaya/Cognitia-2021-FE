(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function (e) {
    // makes sure the whole site is loaded
    $(".loader__figure").fadeOut(); // will first fade out the loading animation
    $(".loader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
  });
})(jQuery);
