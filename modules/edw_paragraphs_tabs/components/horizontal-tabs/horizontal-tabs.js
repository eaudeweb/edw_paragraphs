((Drupal, once) => {
  Drupal.behaviors.horizontalTabs = {
    attach(context) {
      const tabButtons = once("horizontal-tabs", ".horizontal-tabs__button", context);
      const tabPanels = once("horizontal-tabs", ".horizontal-tabs__panel", context);

      const activateTab = (index) => {
        tabButtons.forEach((btn) => {
          btn.classList.remove("is-active");
          btn.setAttribute("aria-selected", "false");
        });
        tabPanels.forEach((panel) => {
          panel.classList.remove("is-active");
          panel.setAttribute("aria-hidden", "true");
        });

        if (tabButtons[index] && tabPanels[index]) {
          tabButtons[index].classList.add("is-active");
          tabButtons[index].setAttribute("aria-selected", "true");
          tabPanels[index].classList.add("is-active");
          tabPanels[index].setAttribute("aria-hidden", "false");
        }
      };
      tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const ariaValue = button.getAttribute('aria-controls');
          const url = new URL(window.location.href);
          url.hash = `#${ariaValue}`;
          window.history.pushState(null, null, url);
          activateTab(index);
        });
      });

      const handleHashChange = () => {
        const tabId = window.location.hash.substring(1);
        if (!tabId) return;
        // Find and activate the tab with matching ID
        const tabIndex = tabButtons.findIndex(btn => btn.getAttribute('aria-controls') === tabId);
        if (tabIndex >= 0) {
          activateTab(tabIndex);
        }
      };

      handleHashChange();
      window.addEventListener('hashchange', handleHashChange, false);
    },
  };
})(Drupal, once);
