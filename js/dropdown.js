const dropdown = document.querySelector(".cta-dropdown");
const toggle = dropdown.querySelector(".cta-toggle");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});
