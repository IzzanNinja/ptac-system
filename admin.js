// ==========================
// SIMPLE ADMIN LOGIN PTAC
// ==========================

function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  // 🔐 SET LOGIN (boleh tukar sini)
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";

  if (user === ADMIN_USER && pass === ADMIN_PASS) {

    document.getElementById("msg").innerHTML =
      "<p style='color:green'>Login success!</p>";

    // simpan session
    localStorage.setItem("ptac_admin", "true");

    // redirect ke dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {
    document.getElementById("msg").innerHTML =
      "<p style='color:red'>Login gagal!</p>";
  }
}
