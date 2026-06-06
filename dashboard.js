let data = JSON.parse(localStorage.getItem("ptac")) || [];

function load() {
  let hadir = data.filter(d => d.status === "hadir").length;
  let kosong = data.filter(d => d.status === "kosong").length;

  document.getElementById("stats").innerHTML = `
    <p>Hadir: ${hadir}</p>
    <p>Kosong: ${kosong}</p>
  `;

  let table = "<tr><th>Lot</th><th>Owner</th><th>Status</th></tr>";

  data.forEach(d => {
    table += `<tr>
      <td>${d.lot}</td>
      <td>${d.owner}</td>
      <td>${d.status}</td>
    </tr>`;
  });

  document.getElementById("table").innerHTML = table;
}

setInterval(load, 2000);
load();

function exportExcel() {
  let ws = XLSX.utils.json_to_sheet(data);
  let wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "PTAC");
  XLSX.writeFile(wb, "ptac-data.xlsx");
}

function resetData() {
  localStorage.clear();
  location.reload();
}
