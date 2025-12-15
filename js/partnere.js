// 1. Supabase base info
const SUPABASE_URL = "https://afjutwclepcrcssmvfwj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmanV0d2NsZXBjcmNzc212ZndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjIxMDUsImV4cCI6MjA4MTI5ODEwNX0.wOJZVLMMj_zpMDqrd21kGdVVw_6DzH8nEqWBswHcB5c";
const BUCKET = "partnerbilleder";

// 2. Hent data fra tabellen
function hentSamarbejdspartnere() {
  return fetch(`${SUPABASE_URL}/rest/v1/Samarbejdspartnere?select=*`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  }).then((response) => response.json());
}

// 3. Når data er hentet → vis cards
hentSamarbejdspartnere()
  .then((data) => {
    console.log("DATA FRA SUPABASE:", data); // 👈 vigtigt til test
    showCards(data);
  })
  .catch((error) => {
    console.error("Fejl:", error);
  });

// 4. Render cards
function showCards(items) {
  const container = document.getElementById("cards");

  if (!container) {
    console.error("Finder ikke #cards i HTML");
    return;
  }

  container.innerHTML = "";

  items.forEach((item) => {
    const imageUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${item.image}`;

    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `

      <img src="${imageUrl}" alt="${item.beskrivelse}">

      <h4 class="overskrift">
      ${item.beskrivelse}
      </h4>

      <p>Værdi: ${item.værdi} kr</p>
      <p>Kategori: ${item.kategori}</p>

      <p class="points">
    <strong> Point: ${item.point} </strong>
    </p>
    `;

    container.appendChild(card);
  });
}
