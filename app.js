let lots = JSON.parse(localStorage.getItem("ptac")) || [];

if (lots.length === 0) {
  lots = [
    {lot:1, owner:"Kosong", status:"empty"},
    {lot:2, owner:"Kosong", status:"empty"},
    {lot:3, owner:"Arrayyan Bakery", status:"occupied"},
    {lot:4, owner:"Kosong", status:"empty"},
    {lot:5, owner:"Nurul Jannah", status:"occupied"},
    {lot:6, owner:"Zaidi", status:"occupied"},
    {lot:7, owner:"Nurfazirah", status:"occupied"},
    {lot:8, owner:"Kosong", status:"empty"},
    {lot:9, owner:"Jannah", status:"occupied"},
    {lot:10, owner:"Noratieka", status:"occupied"},
    {lot:11, owner:"Nursiah", status:"occupied"},
    {lot:12, owner:"Minggo", status:"occupied"},
    {lot:13, owner:"DG Ambah", status:"occupied"},
    {lot:14, owner:"HJH Sarif", status:"occupied"},
    {lot:15, owner:"Dewi", status:"occupied"},
    {lot:16, owner:"Musri", status:"occupied"},
    {lot:17, owner:"Jessi", status:"occupied"},
    {lot:18, owner:"Korlan", status:"occupied"},
    {lot:19, owner:"Kosong", status:"empty"},
    {lot:20, owner:"Syamsizul", status:"occupied"},
    {lot:21, owner:"Mimi", status:"occupied"},
    {lot:22, owner:"Margaretha", status:"occupied"},
    {lot:23, owner:"Alex", status:"occupied"},
    {lot:24, owner:"Martha", status:"occupied"},
    {lot:25, owner:"Sitti Sham", status:"occupied"},
    {lot:26, owner:"Ginina", status:"occupied"},
    {lot:27, owner:"Jessy Nait", status:"occupied"},
    {lot:28, owner:"Helen", status:"occupied"},
    {lot:29, owner:"Jessy Nait", status:"occupied"},
    {lot:30, owner:"Welter", status:"occupied"},
    {lot:31, owner:"Justin Siangli", status:"occupied"},
    {lot:32, owner:"Tingkun", status:"occupied"},
    {lot:33, owner:"Laminah", status:"occupied"},
    {lot:34, owner:"Sinim", status:"occupied"},
    {lot:35, owner:"Justin Ringgingon", status:"occupied"},
    {lot:36, owner:"Ahmad Rushdi", status:"occupied"},
    {lot:37, owner:"Johan", status:"occupied"},
    {lot:38, owner:"Norsyuhadah", status:"occupied"},
    {lot:39, owner:"Kosong", status:"empty"},
    {lot:40, owner:"John", status:"occupied"},
    {lot:41, owner:"Radsman", status:"occupied"},
    {lot:42, owner:"John", status:"occupied"},
    {lot:43, owner:"Dana", status:"occupied"},
    {lot:44, owner:"HJH Amaliah", status:"occupied"},
    {lot:45, owner:"Lamoni", status:"occupied"},
    {lot:47, owner:"Suzie", status:"occupied"},
    {lot:48, owner:"HJ Sudin", status:"occupied"},
    {lot:49, owner:"Suzie", status:"occupied"},
    {lot:50, owner:"Raini", status:"occupied"},
    {lot:51, owner:"Shima", status:"occupied"},
    {lot:52, owner:"Kosong", status:"empty"},
    {lot:53, owner:"Stanley", status:"occupied"},
    {lot:54, owner:"Almalin", status:"occupied"},
    {lot:55, owner:"Siti Ruhaidazuatiqah", status:"occupied"},
    {lot:56, owner:"Kosong", status:"empty"},
    {lot:57, owner:"Siti Ruhaidazuatiqah", status:"occupied"},
    {lot:58, owner:"Kosong", status:"empty"},
    {lot:59, owner:"Kosong", status:"empty"},
    {lot:60, owner:"Kosong", status:"empty"},
    {lot:61, owner:"Kosong", status:"empty"}
  ];
  localStorage.setItem("ptac", JSON.stringify(lots));
}

let select = document.getElementById("lotSelect");
lots.forEach(l => {
  let opt = document.createElement("option");
  opt.value = l.lot;
  opt.innerText = "Lot " + l.lot + " - " + l.owner;
  select.appendChild(opt);
});

function hadir() {
  let lot = select.value;
  let data = lots.find(l => l.lot == lot);
  data.status = "hadir";
  data.time = new Date().toISOString();
  localStorage.setItem("ptac", JSON.stringify(lots));
  document.getElementById("result").innerText = "HADIR direkod!";
}

function tidakHadir() {
  let lot = select.value;
  let data = lots.find(l => l.lot == lot);
  data.status = "kosong";
  localStorage.setItem("ptac", JSON.stringify(lots));
  document.getElementById("result").innerText = "DITANDA KOSONG!";
}
