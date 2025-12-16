const viewport = document.querySelector("#someCarousel");
const track = viewport.querySelector(".carousel-track");
const prevBtn = document.querySelector(".some-carousel .prev");
const nextBtn = document.querySelector(".some-carousel .next");

function scrollByCard(direction) {
  const firstCard = track.querySelector("img");
  if (!firstCard) return;

  const cardStyle = getComputedStyle(track);
  const gap = parseFloat(cardStyle.columnGap || cardStyle.gap || 0);
  const cardWidth = firstCard.getBoundingClientRect().width;

  const amount = (cardWidth + gap) * 2; // scroller ca. 2 kort ad gangen
  track.scrollBy({ left: direction * amount, behavior: "smooth" });
}

prevBtn.addEventListener("click", () => scrollByCard(-1));
nextBtn.addEventListener("click", () => scrollByCard(1));
