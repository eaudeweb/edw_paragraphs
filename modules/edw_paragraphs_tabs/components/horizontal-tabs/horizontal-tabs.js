((Drupal, once) => {
  Drupal.behaviors.horizontalTabs = {
    attach(context) {
      const tabButtons = once("horizontal-tabs", ".horizontal-tabs__button", context);
      const tabPanels = once("horizontal-tabs", ".horizontal-tabs__panel", context);

      tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          tabButtons.forEach((btn) => btn.classList.remove("is-active"));
          tabPanels.forEach((panel) => panel.classList.remove("is-active"));
          tabButtons.forEach((btn) => btn.setAttribute("aria-selected", "false"));
          tabPanels.forEach((panel) => panel.setAttribute("aria-hidden", "true"));

          button.classList.add("is-active");
          button.setAttribute("aria-selected", "true");
          tabPanels[index].classList.add("is-active");
          tabPanels[index].setAttribute("aria-hidden", "false");
        });
      });
    },
  };
})(Drupal, once);
