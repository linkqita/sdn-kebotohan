// ===== DATA DEFAULT =====
const DEFAULT_DATA = {
  berita: [
    { tgl: "14 Okt 2026", judul: "Ujian Tengah Semester Dimulai", desk: "Ujian tengah semester ganjil tahun ajaran 2026/2027 berlangsung 16-23 Oktober." },
    { tgl: "08 Okt 2026", judul: "Rapat Wali Murid Kelas 6", desk: "Rapat wali murid kelas 6 untuk persiapan ujian nasional." }
  ],
  kegiatan: [
    { judul: "Upacara Bendera", desk: "Setiap Senin pukul 07.00 WIB", warna: "#1a7a3a" },
    { judul: "Ekstrakurikuler Pramuka", desk: "Rabu & Jumat 15.00-16.30", warna: "#d4a017" },
    { judul: "Lomba 17 Agustus", desk: "Lomba lomba kreatifitas siswa", warna: "#c0392b" }
  ],
  pengumuman: [
    { tgl: "14 Okt 2026", judul: "Libur Pekan Kedua", desk: "Libur 17-18 Oktober 2026." },
    { tgl: "10 Okt 2026", judul: "Pembukaan Pendaftaran PPDB 2027", desk: "Pendaftaran dibuka 1 November 2026." }
  ],
  galeri: [
    { img: "https://picsum.photos/seed/kebo1/400/300", judul: "Upacara 17 Agustus" },
    { img: "https://picsum.photos/seed/kebo2/400/300", judul: "Lomba Kebersihan" },
    { img: "https://picsum.photos/seed/kebo3/400/300", judul: "Ekstrakurikuler Seni" },
    { img: "https://picsum.photos/seed/kebo4/400/300", judul: "Perpisahan Kelas 6" }
  ]
};

let data = load();
function load(){
  try { return JSON.parse(localStorage.getItem("sdn_kebotohan")) || DEFAULT_DATA; }
  catch(e){ return DEFAULT_DATA; }
}
function save(){ localStorage.setItem("sdn_kebotohan", JSON.stringify(data)); }

// ===== RENDER =====
function renderBerita(){
  const ul = document.getElementById("berita-list");
  ul.innerHTML = "";
  data.berita.slice().reverse().forEach(b=>{
    const li = document.createElement("li");
    li.innerHTML = `<span class="date">${b.tgl}</span><div><div class="title">${esc(b.judul)}</div><div class="desc">${esc(b.desk)}</div></div>`;
    ul.appendChild(li);
  });
}
function renderPengumuman(){
  const ul = document.getElementById("pengumuman-list");
  ul.innerHTML = "";
  data.pengumuman.slice().reverse().forEach(p=>{
    const li = document.createElement("li");
    li.innerHTML = `<span class="date">${p.tgl}</span><div><div class="title">${esc(p.judul)}</div><div class="desc">${esc(p.desk)}</div></div>`;
    ul.appendChild(li);
  });
}
function renderKegiatan(){
  const g = document.getElementById("kegiatan-grid");
  g.innerHTML = "";
  data.kegiatan.forEach(k=>{
    const d = document.createElement("div");
    d.className = "card";
    d.style.borderLeft = `4px solid ${k.warna||"#1a7a3a"}`;
    d.innerHTML = `<h3 style="color:${k.warna||"#1a7a3a"}">${esc(k.judul)}</h3><p style="font-size:13px;color:var(--muted)">${esc(k.desk)}</p>`;
    g.appendChild(d);
  });
}
function renderGaleri(){
  const g = document.getElementById("galeri-grid");
  g.innerHTML = "";
  data.galeri.forEach(gl=>{
    const d = document.createElement("div");
    d.className = "card";
    d.style.padding = "0";
    d.style.overflow = "hidden";
    d.innerHTML = `<img src="${gl.img}" alt="${esc(gl.judul)}" style="width:100%;height:140px;object-fit:cover;display:block"><div style="padding:10px;font-size:13px;font-weight:600">${esc(gl.judul)}</div>`;
    g.appendChild(d);
  });
}
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

// ===== ADMIN PANEL =====
// PENTING: Gerbang ini hanya UI, BUKAN keamanan sungguhan.
// Situs statis (GitHub Pages) tidak punya server. Siapa pun bisa membaca kode
// dan localStorage lewat DevTools. Jangan taruh data rahasia di sini.
const ADMIN_PASS_HASH = "b8d3d5c2b6e5a9f1"; // ganti via setAdminPassword()

function isLoggedIn(){ return sessionStorage.getItem("sdn_admin") === "1"; }

function openAdmin(){
  document.getElementById("admin-panel").classList.remove("hidden");
  if(isLoggedIn()){
    showAdminBody();
  } else {
    showLoginForm();
  }
}
function closeAdmin(){
  document.getElementById("admin-panel").classList.add("hidden");
}

function showLoginForm(){
  const c = document.getElementById("admin-content");
  document.getElementById("logout-btn").style.display = "none";
  c.innerHTML = `
    <div style="max-width:340px;margin:20px auto;text-align:center">
      <div style="font-size:44px;margin-bottom:10px">&#128274;</div>
      <h3 style="color:var(--green-dark);margin-bottom:6px">Login Admin</h3>
      <p style="font-size:13px;color:var(--muted);margin-bottom:18px">Masukkan kata sandi untuk mengelola konten.</p>
      <input id="admin-pass" type="password" placeholder="Kata sandi" autocomplete="current-password"
        style="width:100%;padding:11px 14px;border:1px solid var(--line);border-radius:9px;font-size:14px;margin-bottom:10px">
      <div id="login-msg" style="font-size:13px;color:#a03030;min-height:18px;margin-bottom:8px"></div>
      <button onclick="doLogin()" style="width:100%;background:var(--green);color:#fff;border:none;padding:11px;border-radius:9px;font-weight:600;font-size:14px;cursor:pointer">Masuk</button>
      <p style="font-size:11px;color:var(--muted);margin-top:16px;line-height:1.5">Sandi bawaan: <code>admin123</code><br>Ubah lewat console: <code>setAdminPassword('sandi-baru')</code></p>
    </div>`;
  const inp = document.getElementById("admin-pass");
  inp.focus();
  inp.addEventListener("keydown", e => { if(e.key === "Enter") doLogin(); });
}

function hashPass(s){
  let h = 0;
  for(let i = 0; i < s.length; i++){ h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
  return "h" + (h >>> 0).toString(16);
}

function doLogin(){
  const val = document.getElementById("admin-pass").value;
  const msg = document.getElementById("login-msg");
  const stored = localStorage.getItem("sdn_admin_hash") || hashPass("admin123");
  if(hashPass(val) === stored){
    sessionStorage.setItem("sdn_admin", "1");
    showAdminBody();
  } else {
    msg.textContent = "Kata sandi salah.";
  }
}

function logoutAdmin(){
  sessionStorage.removeItem("sdn_admin");
  showLoginForm();
}

function setAdminPassword(newPass){
  localStorage.setItem("sdn_admin_hash", hashPass(newPass));
  return "Sandi admin diperbarui.";
}

function showAdminBody(){
  document.getElementById("admin-content").innerHTML = "";
  document.getElementById("logout-btn").style.display = "inline-block";
  renderAdminTab("berita");
}
document.querySelectorAll(".nav a").forEach(a=>{
  if(a.getAttribute("href")==="#admin") a.addEventListener("click", e=>{e.preventDefault();openAdmin();});
});
document.querySelectorAll(".admin-tabs button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    if(!isLoggedIn()) return;
    document.querySelectorAll(".admin-tabs button").forEach(b=>b.classList.remove("tab-active"));
    btn.classList.add("tab-active");
    renderAdminTab(btn.getAttribute("data-tab"));
  });
});

let currentTab = "berita";
function renderAdminTab(tab){
  currentTab = tab;
  if(tab === "backup"){ renderBackupTab(); return; }
  const c = document.getElementById("admin-content");
  const items = data[tab] || [];
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><h3 style="color:var(--green)">Kelola ${tab}</h3><button onclick="addItem()" style="background:var(--green);color:#fff;border:none;padding:8px 14px;border-radius:8px;cursor:pointer;font-weight:600">+ Tambah</button></div>`;
  html += `<div id="admin-list"></div>`;
  c.innerHTML = html;
  const list = document.getElementById("admin-list");
  items.forEach((it,i)=>{
    const row = document.createElement("div");
    row.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px dashed var(--line);gap:10px;flex-wrap:wrap";
    let preview = "";
    if(tab==="galeri") preview = `<img src="${it.img}" style="width:48px;height:36px;object-fit:cover;border-radius:6px">`;
    else preview = `<div style="font-size:13px;color:var(--muted)">${it.desk||it.judul||""}</div>`;
    row.innerHTML = `<div style="display:flex;gap:10px;align-items:center;flex:1;min-width:200px"><div style="font-weight:600;font-size:14px">${esc(it.judul)}</div>${preview}</div><div style="display:flex;gap:6px"><button onclick="editItem(${i})" style="background:#f0f4e8;border:1px solid var(--line);padding:6px 10px;border-radius:6px;cursor:pointer">Edit</button><button onclick="deleteItem(${i})" style="background:#fbeaea;border:1px solid #e5b0b0;color:#a03030;padding:6px 10px;border-radius:6px;cursor:pointer">Hapus</button></div>`;
    list.appendChild(row);
  });
  if(items.length===0) list.innerHTML = `<div style="color:var(--muted);font-size:13px;padding:14px 0">Belum ada ${tab}.</div>`;
}

function addItem(){
  const tab = currentTab;
  let obj = {};
  if(tab==="berita"||tab==="pengumuman") obj = { tgl: "", judul: "", desk: "" };
  else if(tab==="kegiatan") obj = { judul: "", desk: "", warna: "#1a7a3a" };
  else if(tab==="galeri") obj = { img: "", judul: "" };
  const ok = promptEdit(obj, tab);
  if(ok){ data[tab].push(obj); save(); renderAdminTab(tab); renderAll(); }
}
function editItem(i){
  const tab = currentTab;
  const obj = JSON.parse(JSON.stringify(data[tab][i]));
  const ok = promptEdit(obj, tab);
  if(ok){ data[tab][i] = obj; save(); renderAdminTab(tab); renderAll(); }
}
function deleteItem(i){
  if(confirm(`Hapus ${currentTab} ini?`)){
    data[currentTab].splice(i,1); save(); renderAdminTab(currentTab); renderAll();
  }
}
function promptEdit(obj, tab){
  if(tab==="galeri"){
    obj.judul = prompt("Judul galeri:", obj.judul||"");
    obj.img = prompt("URL gambar:", obj.img||"");
    return obj.judul && obj.img;
  }
  if(tab==="kegiatan"){
    obj.judul = prompt("Judul kegiatan:", obj.judul||"");
    obj.desk = prompt("Deskripsi:", obj.desk||"");
    obj.warna = prompt("Warna (hex, misal #d4a017):", obj.warna||"#1a7a3a");
    return obj.judul;
  }
  obj.judul = prompt("Judul:", obj.judul||"");
  obj.desk = prompt("Deskripsi:", obj.desk||"");
  if(tab==="berita"||tab==="pengumuman") obj.tgl = prompt("Tanggal (misal 14 Okt 2026):", obj.tgl||"");
  return obj.judul;
}

// ===== BACKUP / RESTORE =====
function renderBackupTab(){
  const c = document.getElementById("admin-content");
  const json = JSON.stringify(data, null, 2);
  c.innerHTML = `
    <h3 style="color:var(--green);margin-bottom:8px">Backup &amp; Restore Data</h3>
    <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Data tersimpan di browser ini (localStorage). Simpan file backup agar tidak hilang saat ganti perangkat atau bersihkan cache.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px">
      <button onclick="downloadBackup()" style="background:var(--green);color:#fff;border:none;padding:10px 16px;border-radius:8px;font-weight:600;cursor:pointer;font-size:13px">Download Backup (.json)</button>
      <button onclick="document.getElementById('restore-file').click()" style="background:#f0f4e8;border:1px solid var(--line);padding:10px 16px;border-radius:8px;font-weight:600;cursor:pointer;font-size:13px">Restore dari File</button>
      <button onclick="resetData()" style="background:#fbeaea;border:1px solid #e5b0b0;color:#a03030;padding:10px 16px;border-radius:8px;font-weight:600;cursor:pointer;font-size:13px">Reset ke Bawaan</button>
    </div>
    <input type="file" id="restore-file" accept=".json" style="display:none" onchange="restoreFromFile(event)">
    <div style="font-size:12px;color:var(--muted);margin-bottom:6px">Pratinjau data saat ini:</div>
    <textarea readonly style="width:100%;height:180px;font-family:monospace;font-size:11px;border:1px solid var(--line);border-radius:8px;padding:10px;background:#fafbf8">${json}</textarea>`;
}
function downloadBackup(){
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "backup-sdn-kebotohan-" + new Date().toISOString().slice(0,10) + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
}
function restoreFromFile(ev){
  const file = ev.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const parsed = JSON.parse(e.target.result);
      if(!parsed.berita || !parsed.kegiatan) throw new Error("Format tidak sesuai");
      data = parsed; save(); renderAdminTab("backup"); renderAll();
      alert("Data berhasil dipulihkan.");
    } catch(err){ alert("Gagal restore: " + err.message); }
  };
  reader.readAsText(file);
}
function resetData(){
  if(confirm("Reset semua data ke bawaan? Perubahan akan hilang.")){
    data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    save(); renderAdminTab("backup"); renderAll();
  }
}

// ===== INIT =====
function renderAll(){
  renderBerita();
  renderPengumuman();
  renderKegiatan();
  renderGaleri();
}
renderAll();