/**
 * @file
 * slider.js
 */

(function ($, Drupal, once) {
  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
      once('carousel', '.slider', context).forEach(function (carousel) {
        const dots = JSON.parse(carousel.getAttribute('data-dots'));
        const arrows = JSON.parse(carousel.getAttribute('data-arrows'));
        const infinite = JSON.parse(carousel.getAttribute('data-infinite'));
        const fade = JSON.parse(carousel.getAttribute('data-fade'));
        const autoplay = JSON.parse(carousel.getAttribute('data-autoplay'));
        const slidesToShow = parseInt(carousel.getAttribute('data-slides-to-show'), 7);
        const slidesToScroll = parseInt(carousel.getAttribute('data-slides-to-scroll'), 7);
        const extraOptions = carousel.getAttribute('data-extra-options') ? JSON.parse(carousel.getAttribute('data-extra-options')) : {};
        console.log(extraOptions);
        Object.assign(extraOptions, {
          dots: dots,
          autoplay: autoplay,
          infinite: infinite,
          fade: fade,
          arrows: arrows,
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
        });

        console.log('Initializing slick with options:', extraOptions);

        $('.slider').slick({
          ...extraOptions,
        });
      });
    }
  };
})(jQuery, Drupal, once);
