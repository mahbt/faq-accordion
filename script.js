const toggles = document.querySelectorAll(".faq-title");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
  toggle.addEventListener("keydown", (event) => {
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.keyCode === 13 ||
      event.keyCode === 32
    ) {
      event.preventDefault();
      toggle.parentNode.classList.toggle("active");
    }
  });
  toggle.setAttribute("tabindex", "0");
});
