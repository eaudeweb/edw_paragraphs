((Drupal, once) => {
  Drupal.behaviors.horizontalTabs = {
    attach(context) {
      once("componentTabs", ".comp--tabs", context).forEach((tabs) => {
        const tabButtons = tabs.querySelectorAll(':scope .tabs__nav .tabs__button');
        const tabPanels = tabs.querySelectorAll(':scope > .tabs__panels .tabs__panel');
        const direction = tabs.dataset.direction || 'horizontal';

        tabButtons.forEach((button, index) => {
          button.addEventListener("click", () => {
            tabButtons.forEach((btn) => btn.setAttribute("aria-selected", "false"));
            tabButtons.forEach((btn) => btn.setAttribute("tabindex", "-1"));
            tabPanels.forEach((panel) => panel.setAttribute("aria-hidden", "true"));

            button.setAttribute("aria-selected", "true");
            button.setAttribute("tabindex", "0");
            tabPanels[index].setAttribute("aria-hidden", "false");
          });

          button.addEventListener("keydown", (e) => {
            let newIndex = null;

            if (direction === 'horizontal') {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                newIndex = index > 0 ? index - 1 : tabButtons.length - 1;
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                newIndex = index < tabButtons.length - 1 ? index + 1 : 0;
              }
            } else if (direction === 'vertical') {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                newIndex = index > 0 ? index - 1 : tabButtons.length - 1;
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                newIndex = index < tabButtons.length - 1 ? index + 1 : 0;
              }
            }

            if (e.key === "Home") {
              e.preventDefault();
              newIndex = 0;
            } else if (e.key === "End") {
              e.preventDefault();
              newIndex = tabButtons.length - 1;
            }

            if (newIndex !== null) {
              tabButtons.forEach((btn) => btn.setAttribute("aria-selected", "false"));
              tabButtons.forEach((btn) => btn.setAttribute("tabindex", "-1"));
              tabPanels.forEach((panel) => panel.setAttribute("aria-hidden", "true"));

              tabButtons[newIndex].setAttribute("aria-selected", "true");
              tabButtons[newIndex].setAttribute("tabindex", "0");
              tabButtons[newIndex].focus();
              tabPanels[newIndex].setAttribute("aria-hidden", "false");
            }
          });
        });
      });

      context.querySelectorAll('[data-navScroll]').forEach((nav) => {
        // Skip if already initialized
        if (nav.dataset.navScrollInitialized) {
          return;
        }

        nav.dataset.navScrollInitialized = 'true';

        const track = nav.querySelector('[data-navScroll-track]');
        const prev = nav.querySelector('[data-navScroll-prev]');
        const next = nav.querySelector('[data-navScroll-next]');
        const buttons = nav.querySelector('.c--nav-scroll__buttons');

        // Observe changes to track items (for dynamic active class changes)
        if (track) {
          const observer = new MutationObserver(() => {
            scrollActiveIntoView();
          });

          observer.observe(track, {
            attributes: true,
            attributeFilter: ['class'],
            subtree: true,
          });
        }

        // Function to calculate average item width
        const getAverageItemWidth = () => {
          if (!track || !track.children.length) return 0;
          const items = Array.from(track.children);
          const totalWidth = items.reduce((sum, item) => sum + item.offsetWidth, 0);
          return totalWidth / items.length;
        };

        if (track) {
          prev.addEventListener('click', () => {
            next.removeAttribute('disabled');

            track.scrollTo({
              left: track.scrollLeft - getAverageItemWidth(),
              behavior: 'smooth',
            });
          });

          next.addEventListener('click', () => {
            prev.removeAttribute('disabled');

            track.scrollTo({
              left: track.scrollLeft + getAverageItemWidth(),
              behavior: 'smooth',
            });
          });

          track.addEventListener('scroll', () => {
            const trackScrollWidth = track.scrollWidth;
            const trackOuterWidth = track.clientWidth;

            prev.removeAttribute('disabled');
            next.removeAttribute('disabled');

            if (track.scrollLeft <= 0) {
              prev.setAttribute('disabled', '');
            }

            if (track.scrollLeft >= trackScrollWidth - trackOuterWidth - 1) {
              next.setAttribute('disabled', '');
            }
          });
        }

        // Function to check if buttons should be visible
        const checkButtonsVisibility = () => {
          if (track && buttons) {
            const trackScrollWidth = track.scrollWidth;
            const navWidth = nav.clientWidth;

            if (trackScrollWidth > navWidth) {
              nav.classList.remove('hide-scroll-buttons');
            } else {
              nav.classList.add('hide-scroll-buttons');
            }
          }
        };

        // Check on initial load
        checkButtonsVisibility();

        // Check on window resize
        window.addEventListener('resize', checkButtonsVisibility);

        // Function to scroll active item into view
        const scrollActiveIntoView = () => {
          if (!track) return;

          // Find active item or item with checked input
          const activeItem = track.querySelector('.active') ||
                           track.querySelector(':has(input:checked)');

          if (activeItem) {
            const trackRect = track.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();

            // Check if item is not fully visible
            const isLeftOutside = itemRect.left < trackRect.left;
            const isRightOutside = itemRect.right > trackRect.right;

            if (isLeftOutside || isRightOutside) {
              const itemOffsetLeft = activeItem.offsetLeft;
              const itemWidth = activeItem.offsetWidth;
              const trackWidth = track.clientWidth;
              const trackScrollWidth = track.scrollWidth;

              // Calculate the scroll position to center the item
              let scrollPosition = itemOffsetLeft - (trackWidth / 2) + (itemWidth / 2);

              // Ensure we don't scroll past the maximum scroll position
              const maxScroll = trackScrollWidth - trackWidth;
              scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));

              // If item is near the end and scrolling to center would not show the full item,
              // scroll to the end instead
              const itemEnd = itemOffsetLeft + itemWidth;
              if (itemEnd > scrollPosition + trackWidth) {
                scrollPosition = Math.min(itemEnd - trackWidth, maxScroll);
              }

              track.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
              });
            }
          }
        };

        // Scroll active item into view on initial load
        // Use requestAnimationFrame and setTimeout to ensure layout is complete
        requestAnimationFrame(() => {
          setTimeout(() => {
            scrollActiveIntoView();
          }, 10);
        });
      });
    },
  };
})(Drupal, once);
