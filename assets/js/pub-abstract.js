document.addEventListener("click", (e) => {
  const btn = e.target.closest(".pub-abstract-toggle");
  if (!btn) return;

  const item = btn.closest(".pub-item");
  if (!item) return;

  const body = item.querySelector(".pub-abstract-body");
  if (!body) return;

  const isOpen = btn.getAttribute("aria-expanded") === "true";

  btn.setAttribute("aria-expanded", String(!isOpen));
  item.classList.toggle("is-abstract-open", !isOpen);
  body.setAttribute("aria-hidden", String(isOpen));
});
