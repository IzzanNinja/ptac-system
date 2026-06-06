const API_URL =
  "https://script.google.com/macros/s/AKfycbxtVJy6SuyPMpR1YavOTwoMbx5hM4pzHMcQG17Mmsa_2sGjLf4iUr4jEI-DVqFRz8a-/exec";

let lots = [];
let selectedLot = null;

// ==========================
// LOAD DATA (LIVE)
// ==========================
async function loadLots() {
  try {
    const res = await fetch(API_URL + "?t=" + Date.now()); // 🔥 bypass cache
    lots = await res.json();

    renderDropdown();
  } catch (err) {
    console.log("Load error:", err);
    document.getElementById("result").innerText = "Error load data";
  }
}

// ==========================
// RENDER DROPDOWN
// ==========================
function renderDropdown() {
  const select = document.getElementById("lotSelect");
  select.innerHTML = "";

  lots.forEach(l => {
    const opt = document.createElement("option");
    opt.value = l.lot;
    opt.textContent = `Lot ${l.lot} - ${l.owner} [${l.status}]`;
    select.appendChild(opt);
  });

  // 🔥 auto select first value
  if (lots.length > 0) {
    selectedLot = lots[0].lot;
    select.value = selectedLot;
  }
}

// ==========================
// EVENT LISTENER
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("lotSelect");

  select.addEventListener("change", () => {
    selectedLot = select.value;
  });
});

// ==========================
// HADIR
// ==========================
async function hadir() {
  await updateStatus("hadir");
}

// ==========================
// TIDAK HADIR
// ==========================
async function tidakHadir() {
  await updateStatus("kosong");
}

// ==========================
// UPDATE TO SHEETS
// ==========================
async function updateStatus(status) {
  if (!selectedLot) return;

  try {
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        lot: selectedLot,
        status: status
      })
    });

    document.getElementById("result").innerText =
      status.toUpperCase() + " direkod!";

    // 🔥 force reload latest data
    await loadLots();
  } catch (err) {
    console.log("Update error:", err);
  }
}

// ==========================
// AUTO REFRESH
// ==========================
setInterval(loadLots, 5000);

// INIT
loadLots();
