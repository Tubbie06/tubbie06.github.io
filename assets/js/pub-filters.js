(() => {
  const filters = document.querySelector(".pub-filters");
  const list = document.getElementById("publication-list");
  if (!filters || !list) return;

  const buttons = filters.querySelectorAll("[data-pub-filter]");
  const items = list.querySelectorAll(".pub-item");
  const years = list.querySelectorAll(".pub-year-after");
  const status = document.getElementById("publication-filter-status");
  let activeCategory = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.pubFilter || null;
      activeCategory = activeCategory === category ? null : category;

      buttons.forEach((filter) => {
        filter.setAttribute("aria-pressed", String((filter.dataset.pubFilter || null) === activeCategory));
      });

      const visibleYears = new Set();
      let visibleCount = 0;
      items.forEach((item) => {
        item.hidden = activeCategory !== null && item.dataset.pubCategory !== activeCategory;
        if (!item.hidden) {
          visibleYears.add(item.dataset.pubYear);
          visibleCount += 1;
        }
      });

      years.forEach((year) => {
        year.hidden = !visibleYears.has(year.dataset.pubYear);
      });

      if (status) {
        const label = activeCategory ? button.textContent.trim() : "All";
        status.textContent = `${label}: ${visibleCount} ${visibleCount === 1 ? "publication" : "publications"} shown.`;
      }
    });
  });

  filters.hidden = false;
})();
