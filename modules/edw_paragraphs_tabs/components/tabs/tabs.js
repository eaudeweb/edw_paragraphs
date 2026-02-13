((Drupal, once) => {
  Drupal.behaviors.horizontalTabs = {
    attach(context) {
      once("componentTabs", ".comp--tabs", context).forEach((tabs) => {
        const tabButtons = tabs.querySelectorAll(':scope > .tabs__nav .tabs__button');
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

            const ariaValue = button.getAttribute('aria-controls');
            const url = new URL(window.location.href);
            url.hash = `#${ariaValue}`;
            window.history.pushState(null, null, url);
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
    },
  };
})(Drupal, once);
