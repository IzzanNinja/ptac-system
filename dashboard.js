const API_URL = "https://script.google.com/macros/s/AKfycbxtVJy6SuyPMpR1YavOTwoMbx5hM4pzHMcQG17Mmsa_2sGjLf4iUr4jEI-DVqFRz8a-/exec";

let data = [];

async function load() {
  try {
    let res = await fetch(API_URL);
    data = await res.json();

    let hadir = data.filter(d => d.status === "hadir").length;
    let kosong = data.filter(d => d.status === "kosong").length;

    document.getElementById("stats").innerHTML = `
      <p>Hadir: ${hadir}</p>
      <p>Kosong: ${kosong}</p>
    `;

    let table = "<tr><th>Lot</th><th>Owner</th><th>Status</th></tr>";

    data.forEach(d => {
      table += `
        <tr>
          <td>${d.lot}</td>
          <td>${d.owner}</td>
          <td>${d.status}</td>
        </tr>
      `;
    });

    document.getElementById("table").innerHTML = table;

  } catch (err) {
    console.log("Error load data:", err);
  }
}

setInterval(load, 5000);
load();
