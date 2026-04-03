(function ($, Drupal, once) {
	Drupal.behaviors.parallaxBehavior = {
		attach: function (context) {
			$(once('parallax', '.parallax-component', context)).each(function () {
				const $component = $(this)[0];
				const image = $(this).find('.parallax-component__image')[0];
				const title = $(this).find('.parallax-component__title')[0];
				const text = $(this).find('.parallax-component__text')[0];

				const imageAnim = $($component).data('animation-image') || 'none';
				const titleAnim = $($component).data('animation-title') || 'none';
				const textAnim = $($component).data('animation-text') || 'none';

				gsap.registerPlugin(ScrollTrigger);

				function getAnimSettings(type) {
					switch (type) {
						case 'slide_up': return { y: 100, opacity: 0, duration: 1 };
						case 'slide_down': return { y: -100, opacity: 0, duration: 1 };
						case 'slide_left': return { x: -100, opacity: 0, duration: 1 };
						case 'slide_right': return { x: 100, opacity: 0, duration: 1 };
						default: return null;
					}
				}

				gsap.from($component, {
					opacity: 0,
					duration: 1,
					scrollTrigger: {
						trigger: $component,
						start: "top 70%",
						end: "bottom top",
						toggleActions: "play none none reverse"
					}
				});

				if (image && getAnimSettings(imageAnim)) {
					gsap.from(image, {
						...getAnimSettings(imageAnim),
						scrollTrigger: {
							trigger: image,
							start: "top 80%",
							end: "bottom top",
							toggleActions: "play none none reverse",
						},
					});
				}

				if (title && getAnimSettings(titleAnim)) {
					gsap.from(title, {
						...getAnimSettings(titleAnim),
						scrollTrigger: {
							trigger: title,
							start: "top 90%",
							end: "bottom top",
							toggleActions: "play none none reverse",
						},
					});
				}

				if (text && getAnimSettings(textAnim)) {
					gsap.from(text, {
						...getAnimSettings(textAnim),
						scrollTrigger: {
							trigger: text,
							start: "top 80%",
							end: "bottom top",
							toggleActions: "play none none reverse",
						},
					});
				}
			});
		}
	};
})(jQuery, Drupal, once);