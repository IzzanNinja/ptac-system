async function hash(text) {
  const msg = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msg);
  return [...new Uint8Array(hashBuffer)].map(b=>b.toString(16).padStart(2,"0")).join("");
}

async function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  let hp = await hash(p);

  if (u === "admin" && p === "ptac2026") {
    localStorage.setItem("admin", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Login gagal";
  }
}
