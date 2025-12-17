console.log("loading...");

const SUPABASE_URL = "https://afjutwclepcrcssmvfwj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmanV0d2NsZXBjcmNzc212ZndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjIxMDUsImV4cCI6MjA4MTI5ODEwNX0.wOJZVLMMj_zpMDqrd21kGdVVw_6DzH8nEqWBswHcB5c";

const id = new URLSearchParams(window.location.search).get("id");
console.log("id:", id);

const userUrl = `${SUPABASE_URL}/rest/v1/Samarbejdspartnere?id=eq.${id}&select=*`;

getData();

function getData() {
  fetch(userUrl, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      Accept: "application/vnd.pgrst.object+json", // 👈 vigtig forklares senere men gør egentlig at alt kan tilgås
    },
  })
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  const partnerProfiler = document.querySelector(".partnerprofiler");

  partnerProfiler.innerHTML = `
    <section class="partnerprofiler">

      <div class="billede_partner">
        <img src="${SUPABASE_URL}/storage/v1/object/public/partnerbilleder/${data.image}" alt="Billede af aktivitet">
      </div>

      <div class="om_partner">
        <h2 class="beskrivelse">${data.beskrivelse}</h2>

        <p><span class="info">Værdi:</span> ${data.værdi} kr</p>
        <p><span class="info">Kategori:</span> ${data.kategori}</p>
        <p><span class="info">Point:</span> ${data.point}</p>
      </div>

    </section>
  `;
}
