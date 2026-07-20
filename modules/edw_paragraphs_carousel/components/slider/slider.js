/**
 * @file
 * slider.js
 */

(function ($, Drupal, once) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
      function safeJSONParse(str, fallback = {}) {
        try {
          return JSON.parse(str);
        } catch (e) {
          console.warn("Invalid JSON in data-extra-options:", str);
          return fallback;
        }
      }
      once('carousel', '.slider', context).forEach(function (carousel) {
        const dots = JSON.parse(carousel.getAttribute('data-dots'));
        const arrows = JSON.parse(carousel.getAttribute('data-arrows'));
        const infinite = JSON.parse(carousel.getAttribute('data-infinite'));
        const fade = JSON.parse(carousel.getAttribute('data-fade'));
        const autoplay = JSON.parse(carousel.getAttribute('data-autoplay'));
        const slidesToShow = parseInt(carousel.getAttribute('data-slides-to-show'), 10);
        const slidesToScroll = parseInt(carousel.getAttribute('data-slides-to-scroll'), 10);
        const options = carousel.getAttribute('data-extra-options')
          ? safeJSONParse(carousel.getAttribute('data-extra-options'))
          : {};


        Object.assign(options, {
          dots: dots,
          autoplay: autoplay,
          infinite: infinite,
          fade: fade,
          arrows: arrows,
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
        });


        $(carousel).not('.slick-initialized').slick({
          ...options,
        });
      });
    }
  };
})(jQuery, Drupal, once);
