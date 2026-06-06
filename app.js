// ==========================
// PTAC SYSTEM - GOOGLE SHEETS VERSION
// ==========================

const API_URL = "https://script.google.com/macros/s/AKfycbxtVJy6SuyPMpR1YavOTwoMbx5hM4pzHMcQG17Mmsa_2sGjLf4iUr4jEI-DVqFRz8a-/exec";

let lots = [];
let selectedLot = null;

// ==========================
// LOAD DATA FROM GOOGLE SHEETS
// ==========================
async function loadLots() {
  try {
    let res = await fetch(API_URL);
    lots = await res.json();

    renderDropdown();
  } catch (err) {
    console.log("Load error:", err);
    document.getElementById("result").innerText = "Error load data";
  }
}

// ==========================
// RENDER DROPDOWN LOT
// ==========================
function renderDropdown() {
  let select = document.getElementById("lotSelect");
  select.innerHTML = "";

  lots.forEach(l => {
    let opt = document.createElement("option");
    opt.value = l.lot;

    opt.innerText = `Lot ${l.lot} - ${l.owner} [${l.status}]`;

    select.appendChild(opt);
  });

  selectedLot = select.value;
}

// ==========================
// SELECT CHANGE EVENT
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  let select = document.getElementById("lotSelect");

  select.addEventListener("change", () => {
    selectedLot = select.value;
  });
});

// ==========================
// HADIR ACTION
// ==========================
async function hadir() {
  if (!selectedLot) return;

  await updateStatus(selectedLot, "hadir");

  document.getElementById("result").innerText = "HADIR direkod!";

  await loadLots();
}

// ==========================
// TIDAK HADIR / KOSONG ACTION
// ==========================
async function tidakHadir() {
  if (!selectedLot) return;

  await updateStatus(selectedLot, "kosong");

  document.getElementById("result").innerText = "DITANDA KOSONG!";

  await loadLots();
}

// ==========================
// UPDATE TO GOOGLE SHEETS
// ==========================
async function updateStatus(lot, status) {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        lot: lot,
        status: status
      })
    });
  } catch (err) {
    console.log("Update error:", err);
  }
}

// ==========================
// AUTO REFRESH DATA (REAL-TIME)
// ==========================
setInterval(loadLots, 5000);

// ==========================
// INIT
// ==========================
loadLots();
