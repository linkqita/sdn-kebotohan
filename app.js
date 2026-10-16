/* =========================================================================
   SDN KEBOTOHAN - CMS & FRONT-END
   Data tersimpan di localStorage. Backup/Restore via JSON di Panel Admin.
   ========================================================================= */
"use strict";

/* ---------- DATA BAWAAN ---------- */
const DEFAULT_DATA = {
  identitas: {
    nama: "SDN KEBOTOHAN",
    tagline: "Unggul, Berkarakter & Berprestasi",
    npsn: "20519123",
    akreditasi: "A (Unggul)",
    alamat: "Desa Kebotohan, Kec. Kraton, Kab. Pasuruan, Jawa Timur",
    telp: "(0343) 421000",
    email: "info@sdnkebotohan.sch.id",
    logo: "",
    heroJudul: "Mewujudkan Generasi Cerdas, Kreatif & Berakhlak Mulia",
    heroDesc: "Selamat datang di situs resmi SDN Kebotohan. Wadah transparansi informasi akademik, kegiatan siswa, prestasi, dan perkembangan sekolah untuk seluruh civitas akademika dan masyarakat.",
    visi: "Terwujudnya peserta didik yang religius, berprestasi, berwawasan lingkungan, mandiri, dan berbudaya luhur.",
    misi: [
      "Melaksanakan pembelajaran yang aktif, inovatif, dan menyenangkan.",
      "Menumbuhkan nilai religius, disiplin, dan budi pekerti luhur.",
      "Mengembangkan bakat, minat, dan kreativitas siswa melalui kegiatan ekstrakurikuler.",
      "Menjaga lingkungan sekolah yang bersih, sehat, dan aman.",
      "Membangun kemitraan yang harmonis dengan wali murid dan masyarakat.",
      "Meningkatkan kompetensi pendidik dan tenaga kependidikan secara berkelanjutan."
    ],
    ksNama: "Drs. H. Muh. Almanshur, M.Pd.",
    ksSambutan: "Pendidikan adalah lentera masa depan. Kami berkomitmen memberikan bimbingan terbaik untuk setiap siswa.",
    ksFoto: "",
    statSiswa: "240+",
    statGuru: "18",
    statRombel: "12",
    statAkreditasi: "A"
  },
  berita: [
    { id: "b1", judul: "Ujian Tengah Semester Ganjil 2026/2027 Resmi Dimulai", kategori: "Akademik", tgl: "16 Okt 2026", img: "https://picsum.photos/seed/sdnkebo1/800/500",
      ringkas: "Ujian tengah semester ganjil tahun ajaran 2026/2027 berlangsung 16-23 Oktober 2026 di seluruh ruang kelas.",
      isi: "Pemerintah Sekolah SDN Kebotohan menyampaikan bahwa Ujian Tengah Semester (UTS) Ganjil tahun ajaran 2026/2027 resmi dimulai pada Kamis, 16 Oktober 2026 dan berakhir pada 23 Oktober 2026.\n\nUjian dilaksanakan pada pukul 07.30-09.30 WIB di seluruh ruang kelas. Peserta didik diimbau hadir 15 menit sebelum ujian dimulai, membawa alat tulis lengkap, serta mengenakan seragam sekolah dengan rapi.\n\nKepada wali murid, dimohon membantu memastikan anak beristirahat cukup dan sarapan sebelum berangkat ke sekolah. Selamat berjuang untuk seluruh siswa!" },
    { id: "b2", judul: "Siswa SDN Kebotohan Raih Juara 1 Lomba Cipta Puisi Tingkat Kecamatan", kategori: "Prestasi", tgl: "10 Okt 2026", img: "https://picsum.photos/seed/sdnkebo2/800/500",
      ringkas: "Alya Nur Safitri (Kelas V B) meraih juara 1 lomba cipta puisi tingkat Kecamatan Kraton.",
      isi: "Kabar gembira datang dari dunia prestasi siswa. Alya Nur Safitri, peserta didik kelas V B, berhasil meraih juara 1 pada Lomba Cipta Puisi Tingkat Kecamatan Kraton yang diselenggarakan pada 10 Oktober 2026.\n\nPuisi berjudul 'Rumah Kedua' terpilih sebagai terbaik dari 24 peserta. Prestasi ini tidak lepas dari bimbingan guru bahasa Indonesia serta dukungan penuh wali murid.\n\nSekolah mengucapkan selamat dan terima kasih. Semoga prestasi ini memotivasi seluruh siswa untuk terus berkarya." },
    { id: "b3", judul: "Gerakan Sekolah Sehat: Senam Bersama dan Pemeriksaan Kesehatan", kategori: "Kegiatan", tgl: "03 Okt 2026", img: "https://picsum.photos/seed/sdnkebo3/800/500",
      ringkas: "Seluruh warga sekolah mengikuti senam bersama dan pemeriksaan kesehatan gratis bekerja sama dengan Puskesmas Kraton.",
      isi: "Dalam rangka Gerakan Sekolah Sehat, SDN Kebotohan menyelenggarakan senam bersama dan pemeriksaan kesehatan gratis pada 3 Oktober 2026.\n\nKegiatan diikuti seluruh siswa, guru, dan tenaga kependidikan. Pemeriksaan mencakup tinggi badan, berat badan, gigi, serta penglihatan, bekerja sama dengan petugas Puskesmas Kecamatan Kraton.\n\nSekolah berharap kegiatan rutin ini meningkatkan kesadaran hidup sehat sejak dini." }
  ],
  kegiatan: [
    { id: "k1", judul: "Upacara Bendera", jadwal: "Setiap Senin, 07.00 WIB", lokasi: "Lapangan Utama", warna: "#1a56db",
      desk: "Upacara bendera rutin untuk menumbuhkan nasionalisme dan disiplin siswa." },
    { id: "k2", judul: "Ekstrakurikuler Pramuka", jadwal: "Rabu & Jumat, 15.00-16.30 WIB", lokasi: "Aula Sekolah", warna: "#0f9d58",
      desk: "Melatih kemandirian, kepemimpinan, dan keterampilan hidup melalui kegiatan kepramukaan." },
    { id: "k3", judul: "Ekstrakurikuler Seni & Musik", jadwal: "Selasa, 14.30-16.00 WIB", lokasi: "Ruang Musik", warna: "#e8a100",
      desk: "Mengembangkan bakat seni, vokal, dan alat musik untuk penampilan di berbagai agenda sekolah." },
    { id: "k4", judul: "Jumat Bersih & Adiwiyata", jadwal: "Jumat, setelah pembelajaran", lokasi: "Area Sekolah", warna: "#0d9488",
      desk: "Gotong royong membersihkan kelas dan merawat taman sekolah demi lingkungan hijau." },
    { id: "k5", judul: "Kelompok Belajar Siswa", jadwal: "Senin-Kamis, 14.00-15.30 WIB", lokasi: "Ruang Kelas", warna: "#7c3aed",
      desk: "Program pendampingan akademik bagi siswa yang memerlukan bimbingan tambahan." },
    { id: "k6", judul: "Lomba & Ajang Kreativitas", jadwal: "Sesuai agenda tahunan", lokasi: "Lapangan & Aula", warna: "#d93025",
      desk: "Berbagai lomba kreativitas siswa: mewarnai, membaca puisi, cerdas cermat, dan pidato." }
  ],
  pengumuman: [
    { id: "p1", judul: "Jadwal Libur Pekan Kedua Oktober 2026", level: "Informasi", tgl: "14 Okt 2026",
      desk: "Berdasarkan kalender pendidikan, siswa libur pada 17-18 Oktober 2026. Kegiatan belajar mengajar dilanjutkan Senin, 20 Oktober 2026 sesuai jadwal normal." },
    { id: "p2", judul: "Pembukaan Pendaftaran PPDB Tahun Pelajaran 2027/2028", level: "PPDB", tgl: "10 Okt 2026",
      desk: "Penerimaan Peserta Didik Baru dibuka 1-15 November 2026. Berkas: akta kelahiran, kartu keluarga, rapor terakhir, dan pas foto 3x4. Informasi di ruang tata usaha." },
    { id: "p3", judul: "Wajib Hadir Rapat Wali Murid Kelas VI", level: "Penting", tgl: "05 Okt 2026",
      desk: "Seluruh wali murid kelas VI diharapkan hadir pada Sabtu, 18 Oktober 2026 pukul 08.00 WIB di aula sekolah untuk pembahasan persiapan ujian sekolah." }
  ],
  galeri: [
    { id: "g1", judul: "Upacara Bendera HUT RI", kategori: "Upacara", img: "https://picsum.photos/seed/kebog1/700/520" },
    { id: "g2", judul: "Lomba Kebersihan Kelas", kategori: "Lomba", img: "https://picsum.photos/seed/kebog2/700/520" },
    { id: "g3", judul: "Latihan Ekstrakurikuler Seni", kategori: "Ekstrakurikuler", img: "https://picsum.photos/seed/kebog3/700/520" },
    { id: "g4", judul: "Perpisahan Kelas VI", kategori: "Acara Sekolah", img: "https://picsum.photos/seed/kebog4/700/520" },
    { id: "g5", judul: "Pembelajaran di Laboratorium", kategori: "Akademik", img: "https://picsum.photos/seed/kebog5/700/520" },
    { id: "g6", judul: "Kegiatan Jumat Bersih", kategori: "Lingkungan", img: "https://picsum.photos/seed/kebog6/700/520" },
    { id: "g7", judul: "Ziarah Makam Pahlawan", kategori: "Sosial", img: "https://picsum.photos/seed/kebog7/700/520" },
    { id: "g8", judul: "Pentas Seni Akhir Tahun", kategori: "Acara Sekolah", img: "https://picsum.photos/seed/kebog8/700/520" }
  ]
};

const STORE_KEY = "sdn_kebotohan_v2";
const PASS_KEY  = "sdn_kebotohan_pass";
const SESSION_KEY = "sdn_kebotohan_admin";

let DATA = loadData();

function deepClone(o){ return JSON.parse(JSON.stringify(o)); }

function mergeDefaults(saved, dflt){
  if(!saved || typeof saved !== "object") return deepClone(dflt);
  const out = deepClone(dflt);
  if(saved.identitas && typeof saved.identitas === "object"){
    Object.assign(out.identitas, saved.identitas);
    if(Array.isArray(saved.identitas.misi)) out.identitas.misi = saved.identitas.misi.slice();
  }
  ["berita","kegiatan","pengumuman","galeri"].forEach(function(k){
    if(Array.isArray(saved[k])) out[k] = saved[k];
  });
  return out;
}

function loadData(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return deepClone(DEFAULT_DATA);
    return mergeDefaults(JSON.parse(raw), DEFAULT_DATA);
  }catch(e){ return deepClone(DEFAULT_DATA); }
}

function saveData(){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(DATA)); return true; }
  catch(e){ toast("Gagal menyimpan: penyimpanan browser penuh (gambar terlalu besar).", "err"); return false; }
}

function uid(prefix){ return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

function esc(s){
  return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
  });
}

function nl2br(s){ return esc(s).replace(/\n/g, "<br>"); }

/* =========================================================================
   RENDER SITUS PUBLIK
   ========================================================================= */
function renderAll(){
  renderIdentitas();
  renderBerita();
  renderKegiatan();
  renderPengumuman();
  renderGaleri();
}

function setText(id, val){
  const el = document.getElementById(id);
  if(el) el.textContent = val;
}

function renderIdentitas(){
  const it = DATA.identitas;
  document.title = it.nama + " - " + it.tagline;
  setText("page-title", it.nama + " - " + it.tagline);

  setText("tb-alamat", it.alamat);
  setText("tb-telp", it.telp);
  setText("tb-email", it.email);
  setText("tb-npsn", it.npsn);

  setText("brand-name", it.nama);
  setText("brand-tagline", it.tagline);
  setText("hero-title", it.heroJudul);
  setText("hero-desc", it.heroDesc);

  setText("ks-nama", it.ksNama);
  setText("ks-sambutan", '"' + it.ksSambutan + '"');

  setText("stat-siswa", it.statSiswa);
  setText("stat-guru", it.statGuru);
  setText("stat-rombel", it.statRombel);
  setText("stat-akreditasi", it.statAkreditasi);

  setText("profil-visi", '"' + it.visi + '"');
  const misiList = document.getElementById("profil-misi-list");
  if(misiList){
    misiList.innerHTML = it.misi.filter(Boolean).map(function(m){
      return "<li>" + esc(m) + "</li>";
    }).join("");
  }

  const tb = document.getElementById("table-identitas");
  if(tb){
    const rows = [
      ["Nama Sekolah", it.nama],
      ["NPSN (Nomor Pokok Sekolah Nasional)", it.npsn],
      ["Status", "Sekolah Dasar Negeri (SDN)"],
      ["Akreditasi", it.akreditasi],
      ["Alamat", it.alamat],
      ["Telepon", it.telp],
      ["Email Resmi", it.email],
      ["Kepala Sekolah", it.ksNama],
      ["Jumlah Siswa", it.statSiswa + " siswa"],
      ["Jumlah Guru & Staf", it.statGuru + " orang"],
      ["Rombongan Belajar", it.statRombel + " kelas"]
    ];
    tb.innerHTML = rows.map(function(r){
      return '<tr><td class="lbl">' + esc(r[0]) + '</td><td class="val">' + esc(r[1]) + "</td></tr>";
    }).join("");
  }

  setText("kontak-alamat", it.alamat);
  setText("kontak-telp", it.telp);
  setText("kontak-email", it.email);

  setText("ftr-nama", it.nama);
  setText("ftr-tagline", it.tagline);
  setText("ftr-alamat", it.alamat);
  setText("ftr-npsn", it.npsn);
  setText("ftr-akreditasi", it.akreditasi);
  setText("ftr-email", it.email);
  setText("ftr-telp", it.telp);
  setText("ftr-copy-nama", it.nama);

  applyImage("brand-logo", it.logo, "brand-logo-fallback", "SD");
  applyImage("ks-foto", it.ksFoto, "ks-foto-fallback", "");
}

function applyImage(imgId, src, fallbackId, fallbackText){
  const img = document.getElementById(imgId);
  const fb = document.getElementById(fallbackId);
  if(!img) return;
  if(src){
    img.src = src;
    img.classList.remove("hidden");
    img.onerror = function(){ img.classList.add("hidden"); if(fb) fb.classList.remove("hidden"); };
    if(fb) fb.classList.add("hidden");
  }else{
    img.removeAttribute("src");
    img.classList.add("hidden");
    if(fb) fb.classList.remove("hidden");
  }
  if(fallbackText && fb){
    const span = fb.querySelector("span") || fb;
    if(!fb.querySelector("svg") && fallbackText) span.textContent = fallbackText;
  }
}

function renderBerita(){
  const q = (document.getElementById("cari-berita") ? document.getElementById("cari-berita").value : "").trim().toLowerCase();
  const grid = document.getElementById("berita-grid");
  const empty = document.getElementById("berita-empty");
  if(!grid) return;

  let list = DATA.berita.slice().reverse();
  if(q){
    list = list.filter(function(b){
      return (b.judul + " " + b.ringkas + " " + b.isi + " " + b.kategori).toLowerCase().indexOf(q) > -1;
    });
  }

  grid.innerHTML = list.map(function(b){
    const cover = b.img
      ? '<img src="' + esc(b.img) + '" alt="' + esc(b.judul) + '" loading="lazy" onerror="this.style.display=\'none\'">'
      : '<div class="cover-fallback">' + esc(b.kategori || "BERITA") + "</div>";
    return '<article class="news-card" onclick="openBerita(\'' + esc(b.id) + '\')">' +
      '<div class="news-cover">' + cover + '<span class="news-cat">' + esc(b.kategori || "Berita") + "</span></div>" +
      '<div class="news-body">' +
        '<div class="news-date"><svg viewBox="0 0 24 24" class="ico"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/></svg>' + esc(b.tgl) + "</div>" +
        '<h3 class="news-title">' + esc(b.judul) + "</h3>" +
        '<p class="news-excerpt">' + esc(b.ringkas) + "</p>" +
        '<span class="news-more">Baca selengkapnya &rarr;</span>' +
      "</div></article>";
  }).join("");

  if(empty) empty.classList.toggle("hidden", list.length > 0);
  grid.classList.toggle("hidden", list.length === 0);
}

function renderKegiatan(){
  const grid = document.getElementById("kegiatan-grid");
  const empty = document.getElementById("kegiatan-empty");
  if(!grid) return;
  grid.innerHTML = DATA.kegiatan.map(function(k){
    const w = k.warna || "#1a56db";
    return '<div class="act-card" style="border-top-color:' + esc(w) + '">' +
      '<div class="act-inner">' +
        '<span class="act-badge" style="background:' + esc(w) + '1f;color:' + esc(w) + '">Agenda</span>' +
        '<h3 class="act-title">' + esc(k.judul) + "</h3>" +
        '<p class="act-desc">' + esc(k.desk) + "</p>" +
        '<div class="act-meta">' +
          "<span><svg viewBox=\"0 0 24 24\" class=\"ico\"><path d=\"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z\"/></svg>" + esc(k.jadwal || "-") + "</span>" +
          "<span><svg viewBox=\"0 0 24 24\" class=\"ico\"><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/></svg>" + esc(k.lokasi || "-") + "</span>" +
        "</div>" +
      "</div></div>";
  }).join("");
  if(empty) empty.classList.toggle("hidden", DATA.kegiatan.length > 0);
  grid.classList.toggle("hidden", DATA.kegiatan.length === 0);
}

function renderPengumuman(){
  const list = document.getElementById("pengumuman-list");
  const empty = document.getElementById("pengumuman-empty");
  if(!list) return;
  list.innerHTML = DATA.pengumuman.slice().reverse().map(function(p){
    const lvl = p.level || "Informasi";
    return '<div class="ann-item lvl-' + esc(lvl) + '">' +
      '<div class="ann-icon"><svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg></div>' +
      '<div class="ann-body">' +
        '<div class="ann-top"><span class="ann-badge lvl-' + esc(lvl) + '">' + esc(lvl) + '</span><span class="ann-date">' + esc(p.tgl) + "</span></div>" +
        '<h3 class="ann-title">' + esc(p.judul) + "</h3>" +
        '<p class="ann-desc">' + esc(p.desk) + "</p>" +
      "</div></div>";
  }).join("");
  if(empty) empty.classList.toggle("hidden", DATA.pengumuman.length > 0);
  list.classList.toggle("hidden", DATA.pengumuman.length === 0);
}

function renderGaleri(){
  const grid = document.getElementById("galeri-grid");
  const empty = document.getElementById("galeri-empty");
  if(!grid) return;
  grid.innerHTML = DATA.galeri.map(function(g){
    return '<div class="gal-item" onclick="openGaleri(\'' + esc(g.id) + '\')">' +
      '<img src="' + esc(g.img) + '" alt="' + esc(g.judul) + '" loading="lazy" onerror="this.style.opacity=\'0.25\'">' +
      '<div class="gal-overlay"><strong>' + esc(g.judul) + "</strong><span>" + esc(g.kategori || "Dokumentasi") + "</span></div>" +
      "</div>";
  }).join("");
  if(empty) empty.classList.toggle("hidden", DATA.galeri.length > 0);
  grid.classList.toggle("hidden", DATA.galeri.length === 0);
}

/* ---------- MODAL PUBLIK ---------- */
function openModal(id){
  const m = document.getElementById(id);
  if(m){ m.classList.remove("hidden"); document.body.style.overflow = "hidden"; }
}
function closeModal(id){
  const m = document.getElementById(id);
  if(m) m.classList.add("hidden");
  if(!document.querySelector(".modal:not(.hidden)")) document.body.style.overflow = "";
}

function openBerita(id){
  const b = DATA.berita.find(function(x){ return x.id === id; });
  if(!b) return;
  setText("modal-berita-judul", b.judul);
  setText("modal-berita-kategori", b.kategori || "Berita");
  setText("modal-berita-tgl", b.tgl);
  const wrap = document.getElementById("modal-berita-img-wrap");
  const img = document.getElementById("modal-berita-img");
  if(b.img && wrap && img){
    img.src = b.img;
    wrap.classList.remove("hidden");
  }else if(wrap){ wrap.classList.add("hidden"); }
  document.getElementById("modal-berita-isi").innerHTML =
    "<p>" + nl2br(b.isi || b.ringkas) + "</p>";
  openModal("modal-berita");
}

function openGaleri(id){
  const g = DATA.galeri.find(function(x){ return x.id === id; });
  if(!g) return;
  document.getElementById("modal-galeri-img").src = g.img;
  setText("modal-galeri-judul", g.judul + (g.kategori ? "  -  " + g.kategori : ""));
  openModal("modal-galeri");
}

function toast(msg, type){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = msg;
  t.className = "toast show " + (type === "err" ? "toast-err" : "toast-ok");
  clearTimeout(t._tm);
  t._tm = setTimeout(function(){ t.classList.remove("show"); }, 3200);
}


/* =========================================================================
   PANEL ADMIN / CMS
   CATATAN KEAMANAN: ini gerbang UI pada situs statis (GitHub Pages).
   Tidak ada server. Jangan simpan data rahasia apa pun di sini.
   ========================================================================= */
function hashPass(s){
  let h = 0;
  for(let i = 0; i < s.length; i++){ h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
  return "h" + (h >>> 0).toString(16);
}
const DEFAULT_PASS_HASH = hashPass("admin123");

function getPassHash(){
  return localStorage.getItem(PASS_KEY) || DEFAULT_PASS_HASH;
}
function isLoggedIn(){ return sessionStorage.getItem(SESSION_KEY) === "1"; }

function openAdmin(){
  openModal("modal-admin");
  document.body.style.overflow = "hidden";
  if(isLoggedIn()) showDashboard(); else showLogin();
}
function adminLogout(){
  sessionStorage.removeItem(SESSION_KEY);
  showLogin();
  toast("Berhasil keluar dari panel admin.");
}
function showLogin(){
  document.getElementById("admin-view-login").classList.remove("hidden");
  document.getElementById("admin-view-dashboard").classList.add("hidden");
  document.getElementById("admin-btn-logout").classList.add("hidden");
  setText("admin-user-status", "Mode Pengelola Konten");
  const inp = document.getElementById("admin-password");
  if(inp){ inp.value = ""; setTimeout(function(){ inp.focus(); }, 60); }
  const err = document.getElementById("login-error-msg");
  if(err) err.classList.add("hidden");
}
function showDashboard(){
  document.getElementById("admin-view-login").classList.add("hidden");
  document.getElementById("admin-view-dashboard").classList.remove("hidden");
  document.getElementById("admin-btn-logout").classList.remove("hidden");
  setText("admin-user-status", "Tersambung sebagai Administrator");
  fillIdentitasForm();
  renderAdminTables();
  switchTab("tab-identitas");
}

function handleLoginSubmit(e){
  e.preventDefault();
  const inp = document.getElementById("admin-password");
  const err = document.getElementById("login-error-msg");
  if(hashPass(inp.value) === getPassHash()){
    sessionStorage.setItem(SESSION_KEY, "1");
    showDashboard();
    toast("Selamat datang di CMS SDN Kebotohan.");
  }else{
    err.textContent = "Kata sandi salah. Coba lagi.";
    err.classList.remove("hidden");
    inp.select();
  }
}

function handleGantiSandi(e){
  e.preventDefault();
  const lama = document.getElementById("pass-lama").value;
  const baru = document.getElementById("pass-baru").value;
  const konf = document.getElementById("pass-konfirm").value;
  if(hashPass(lama) !== getPassHash()){ toast("Kata sandi lama tidak cocok.", "err"); return; }
  if(baru !== konf){ toast("Konfirmasi kata sandi baru tidak sama.", "err"); return; }
  if(baru.length < 4){ toast("Kata sandi minimal 4 karakter.", "err"); return; }
  localStorage.setItem(PASS_KEY, hashPass(baru));
  if(e.target && e.target.reset) e.target.reset();
  ["pass-lama","pass-baru","pass-konfirm"].forEach(function(i){ setVal(i, ""); });
  toast("Kata sandi admin berhasil diperbarui.");
}

function switchTab(tabId){
  document.querySelectorAll(".tab-pane").forEach(function(el){ el.classList.remove("active"); });
  document.querySelectorAll(".admin-nav-item").forEach(function(el){ el.classList.remove("active"); });
  const pane = document.getElementById(tabId);
  if(pane) pane.classList.add("active");
  const btn = document.querySelector('.admin-nav-item[data-tab="' + tabId + '"]');
  if(btn) btn.classList.add("active");
  const main = document.querySelector(".admin-main");
  if(main) main.scrollTop = 0;
}

/* =========================================================================
   FORM IDENTITAS + UPLOAD GAMBAR
   ========================================================================= */
const TMP = { logo:"", ksFoto:"", beritaImg:"", galeriImg:"" };  // gambar sementara (diisi file upload)


function fillIdentitasForm(){
  const it = DATA.identitas;
  TMP.logo = it.logo || "";
  TMP.ksFoto = it.ksFoto || "";
  setVal("cfg-nama", it.nama);
  setVal("cfg-tagline", it.tagline);
  setVal("cfg-npsn", it.npsn);
  setVal("cfg-akreditasi", it.akreditasi);
  setVal("cfg-telp", it.telp);
  setVal("cfg-email", it.email);
  setVal("cfg-alamat", it.alamat);
  setVal("cfg-ks-nama", it.ksNama);
  setVal("cfg-ks-sambutan", it.ksSambutan);
  setVal("cfg-visi", it.visi);
  setVal("cfg-misi", (it.misi || []).join("\n"));
  setVal("cfg-stat-siswa", it.statSiswa);
  setVal("cfg-stat-guru", it.statGuru);
  setVal("cfg-stat-rombel", it.statRombel);
  setVal("cfg-stat-akreditasi", it.statAkreditasi);
  setVal("input-url-logo", it.logo && it.logo.slice(0,4) === "data:" ? "" : (it.logo || ""));
  setVal("input-url-ks", it.ksFoto && it.ksFoto.slice(0,4) === "data:" ? "" : (it.ksFoto || ""));
  updatePreview("preview-logo", "preview-logo-placeholder", TMP.logo);
  updatePreview("preview-ks", "preview-ks-placeholder", TMP.ksFoto);
}
function setVal(id, v){ const el = document.getElementById(id); if(el) el.value = v == null ? "" : v; }
function getVal(id){ const el = document.getElementById(id); return el ? el.value.trim() : ""; }

function updatePreview(imgId, phId, src){
  const img = document.getElementById(imgId);
  const ph = document.getElementById(phId);
  if(!img) return;
  if(src){ img.src = src; img.classList.remove("hidden"); if(ph) ph.classList.add("hidden"); }
  else { img.removeAttribute("src"); img.classList.add("hidden"); if(ph) ph.classList.remove("hidden"); }
}

/* Baca file gambar -> dataURL (diperkecil dulu agar muat di localStorage) */
function readFileAsImage(file, maxDim, cb){
  if(!file){ cb(""); return; }
  if(!/^image\//.test(file.type)){ toast("File harus berupa gambar.", "err"); return; }
  const reader = new FileReader();
  reader.onerror = function(){ toast("Gagal membaca file.", "err"); };
  reader.onload = function(ev){
    const img = new Image();
    img.onload = function(){
      try{
        const max = maxDim || 1000;
        let w = img.width, h = img.height;
        if(w > max || h > max){
          const r = Math.min(max / w, max / h);
          w = Math.round(w * r); h = Math.round(h * r);
        }
        const cv = document.createElement("canvas");
        cv.width = w; cv.height = h;
        cv.getContext("2d").drawImage(img, 0, 0, w, h);
        cb(cv.toDataURL("image/jpeg", 0.82));
      }catch(e){ cb(ev.target.result); }
    };
    img.onerror = function(){ cb(ev.target.result); };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function clearLogo(){
  TMP.logo = "";
  setVal("input-url-logo", "");
  document.getElementById("input-file-logo").value = "";
  updatePreview("preview-logo", "preview-logo-placeholder", "");
  toast("Logo dihapus. Klik Simpan untuk menerapkan.");
}
function clearFotoKS(){
  TMP.ksFoto = "";
  setVal("input-url-ks", "");
  document.getElementById("input-file-ks").value = "";
  updatePreview("preview-ks", "preview-ks-placeholder", "");
  toast("Foto kepala sekolah dihapus. Klik Simpan untuk menerapkan.");
}
function clearFotoBerita(){
  TMP.beritaImg = "";
  setVal("input-url-berita", "");
  const f = document.getElementById("input-file-berita");
  if(f) f.value = "";
  updatePreview("preview-berita", "preview-berita-placeholder", "");
}

function saveIdentitas(e){
  e.preventDefault();
  const it = DATA.identitas;
  it.nama = getVal("cfg-nama");
  it.tagline = getVal("cfg-tagline");
  it.npsn = getVal("cfg-npsn");
  it.akreditasi = getVal("cfg-akreditasi");
  it.telp = getVal("cfg-telp");
  it.email = getVal("cfg-email");
  it.alamat = getVal("cfg-alamat");
  it.ksNama = getVal("cfg-ks-nama");
  it.ksSambutan = getVal("cfg-ks-sambutan");
  it.visi = getVal("cfg-visi");
  it.misi = getVal("cfg-misi").split("\n").map(function(s){ return s.trim(); }).filter(Boolean);
  it.statSiswa = getVal("cfg-stat-siswa");
  it.statGuru = getVal("cfg-stat-guru");
  it.statRombel = getVal("cfg-stat-rombel");
  it.statAkreditasi = getVal("cfg-stat-akreditasi");
  it.logo = getVal("input-url-logo") || TMP.logo;
  it.ksFoto = getVal("input-url-ks") || TMP.ksFoto;
  if(saveData()){
    renderAll();
    fillIdentitasForm();
    toast("Identitas & profil sekolah berhasil disimpan.");
  }
}


/* =========================================================================
   CRUD BERITA
   ========================================================================= */
function renderAdminTables(){
  renderTableBerita();
  renderTableKegiatan();
  renderTablePengumuman();
  renderAdminGaleri();
}

function renderTableBerita(){
  const tb = document.getElementById("table-berita-body");
  if(!tb) return;
  if(!DATA.berita.length){
    tb.innerHTML = '<tr><td colspan="5" class="table-empty">Belum ada berita. Klik "+ Tambah Berita" untuk membuat.</td></tr>';
    return;
  }
  tb.innerHTML = DATA.berita.slice().reverse().map(function(b){
    const thumb = b.img
      ? '<img class="thumb" src="' + esc(b.img) + '" alt="" onerror="this.outerHTML=\'<div class=&quot;thumb-fallback&quot;>IMG</div>\'">'
      : '<div class="thumb-fallback">IMG</div>';
    return "<tr>" +
      "<td>" + thumb + "</td>" +
      '<td><div class="td-title">' + esc(b.judul) + '</div><div class="td-sub">' + esc(b.ringkas) + "</div></td>" +
      '<td><span class="pill">' + esc(b.kategori) + "</span></td>" +
      "<td>" + esc(b.tgl) + "</td>" +
      '<td><div class="td-actions">' +
        '<button class="btn btn-xs btn-secondary" onclick="openFormBerita(\'' + esc(b.id) + '\')">Ubah</button>' +
        '<button class="btn btn-xs btn-outline-danger" onclick="deleteBerita(\'' + esc(b.id) + '\')">Hapus</button>' +
      "</div></td></tr>";
  }).join("");
}

function openFormBerita(id){
  const box = document.getElementById("box-form-berita");
  box.classList.remove("hidden");
  document.getElementById("form-item-berita").reset();
  setVal("berita-edit-id", "");
  TMP.beritaImg = "";
  updatePreview("preview-berita", "preview-berita-placeholder", "");

  if(id){
    const b = DATA.berita.find(function(x){ return x.id === id; });
    if(!b) return;
    setText("form-berita-title", "Ubah Berita");
    setVal("berita-edit-id", b.id);
    setVal("berita-in-judul", b.judul);
    setVal("berita-in-kategori", b.kategori);
    setVal("berita-in-tgl", b.tgl);
    setVal("berita-in-ringkas", b.ringkas);
    setVal("berita-in-isi", b.isi);
    TMP.beritaImg = b.img || "";
    setVal("input-url-berita", (b.img && b.img.slice(0,4) === "data:") ? "" : (b.img || ""));
    updatePreview("preview-berita", "preview-berita-placeholder", TMP.beritaImg);
  }else{
    setText("form-berita-title", "Tambah Berita Baru");
    setVal("berita-in-tgl", todayStr());
    setVal("berita-in-kategori", "Akademik");
  }
  box.scrollIntoView({ behavior:"smooth", block:"start" });
}

function todayStr(){
  const bln = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
  const d = new Date();
  return d.getDate() + " " + bln[d.getMonth()] + " " + d.getFullYear();
}

function closeFormBerita(){ document.getElementById("box-form-berita").classList.add("hidden"); }

function saveItemBerita(e){
  e.preventDefault();
  const id = getVal("berita-edit-id");
  const payload = {
    judul: getVal("berita-in-judul"),
    kategori: getVal("berita-in-kategori"),
    tgl: getVal("berita-in-tgl"),
    ringkas: getVal("berita-in-ringkas"),
    isi: getVal("berita-in-isi"),
    img: getVal("input-url-berita") || TMP.beritaImg
  };
  if(id){
    const b = DATA.berita.find(function(x){ return x.id === id; });
    if(b) Object.assign(b, payload);
  }else{
    payload.id = uid("b");
    DATA.berita.push(payload);
  }
  if(saveData()){
    renderBerita(); renderTableBerita(); closeFormBerita();
    toast(id ? "Berita diperbarui." : "Berita baru diterbitkan.");
  }
}

function deleteBerita(id){
  const b = DATA.berita.find(function(x){ return x.id === id; });
  if(!b) return;
  if(!confirm('Hapus berita "' + b.judul + '"?')) return;
  DATA.berita = DATA.berita.filter(function(x){ return x.id !== id; });
  saveData(); renderBerita(); renderTableBerita();
  toast("Berita dihapus.");
}

/* =========================================================================
   CRUD KEGIATAN
   ========================================================================= */
function renderTableKegiatan(){
  const tb = document.getElementById("table-kegiatan-body");
  if(!tb) return;
  if(!DATA.kegiatan.length){
    tb.innerHTML = '<tr><td colspan="4" class="table-empty">Belum ada kegiatan.</td></tr>';
    return;
  }
  tb.innerHTML = DATA.kegiatan.map(function(k){
    return "<tr>" +
      '<td><div class="td-title"><span style="display:inline-block;width:11px;height:11px;border-radius:50%;background:' +
        esc(k.warna || "#1a56db") + ';margin-right:8px"></span>' + esc(k.judul) +
      '</div><div class="td-sub">' + esc(k.desk) + "</div></td>" +
      "<td>" + esc(k.jadwal) + "</td>" +
      "<td>" + esc(k.lokasi || "-") + "</td>" +
      '<td><div class="td-actions">' +
        '<button class="btn btn-xs btn-secondary" onclick="openFormKegiatan(\'' + esc(k.id) + '\')">Ubah</button>' +
        '<button class="btn btn-xs btn-outline-danger" onclick="deleteKegiatan(\'' + esc(k.id) + '\')">Hapus</button>' +
      "</div></td></tr>";
  }).join("");
}

function openFormKegiatan(id){
  const box = document.getElementById("box-form-kegiatan");
  box.classList.remove("hidden");
  document.getElementById("form-item-kegiatan").reset();
  setVal("kegiatan-edit-id", "");
  if(id){
    const k = DATA.kegiatan.find(function(x){ return x.id === id; });
    if(!k) return;
    setText("form-kegiatan-title", "Ubah Kegiatan");
    setVal("kegiatan-edit-id", k.id);
    setVal("kegiatan-in-judul", k.judul);
    setVal("kegiatan-in-jadwal", k.jadwal);
    setVal("kegiatan-in-lokasi", k.lokasi);
    setVal("kegiatan-in-desk", k.desk);
    setVal("kegiatan-in-warna", k.warna || "#1a56db");
  }else{
    setText("form-kegiatan-title", "Tambah Kegiatan Baru");
    setVal("kegiatan-in-warna", "#1a56db");
  }
  box.scrollIntoView({ behavior:"smooth", block:"start" });
}
function closeFormKegiatan(){ document.getElementById("box-form-kegiatan").classList.add("hidden"); }

function saveItemKegiatan(e){
  e.preventDefault();
  const id = getVal("kegiatan-edit-id");
  const payload = {
    judul: getVal("kegiatan-in-judul"),
    jadwal: getVal("kegiatan-in-jadwal"),
    lokasi: getVal("kegiatan-in-lokasi"),
    warna: getVal("kegiatan-in-warna") || "#1a56db",
    desk: getVal("kegiatan-in-desk")
  };
  if(id){
    const k = DATA.kegiatan.find(function(x){ return x.id === id; });
    if(k) Object.assign(k, payload);
  }else{
    payload.id = uid("k");
    DATA.kegiatan.push(payload);
  }
  if(saveData()){
    renderKegiatan(); renderTableKegiatan(); closeFormKegiatan();
    toast(id ? "Kegiatan diperbarui." : "Kegiatan ditambahkan.");
  }
}
function deleteKegiatan(id){
  const k = DATA.kegiatan.find(function(x){ return x.id === id; });
  if(!k) return;
  if(!confirm('Hapus kegiatan "' + k.judul + '"?')) return;
  DATA.kegiatan = DATA.kegiatan.filter(function(x){ return x.id !== id; });
  saveData(); renderKegiatan(); renderTableKegiatan();
  toast("Kegiatan dihapus.");
}


/* =========================================================================
   CRUD PENGUMUMAN
   ========================================================================= */
function renderTablePengumuman(){
  const tb = document.getElementById("table-pengumuman-body");
  if(!tb) return;
  if(!DATA.pengumuman.length){
    tb.innerHTML = '<tr><td colspan="4" class="table-empty">Belum ada pengumuman.</td></tr>';
    return;
  }
  tb.innerHTML = DATA.pengumuman.slice().reverse().map(function(pn){
    const lvl = pn.level || "Informasi";
    return "<tr>" +
      '<td><span class="pill pill-level-' + esc(lvl) + '">' + esc(lvl) + "</span></td>" +
      '<td><div class="td-title">' + esc(pn.judul) + '</div><div class="td-sub">' + esc(pn.desk) + "</div></td>" +
      "<td>" + esc(pn.tgl) + "</td>" +
      '<td><div class="td-actions">' +
        '<button class="btn btn-xs btn-secondary" onclick="openFormPengumuman(\'' + esc(pn.id) + '\')">Ubah</button>' +
        '<button class="btn btn-xs btn-outline-danger" onclick="deletePengumuman(\'' + esc(pn.id) + '\')">Hapus</button>' +
      "</div></td></tr>";
  }).join("");
}

function openFormPengumuman(id){
  const box = document.getElementById("box-form-pengumuman");
  box.classList.remove("hidden");
  document.getElementById("form-item-pengumuman").reset();
  setVal("pengumuman-edit-id", "");
  if(id){
    const pn = DATA.pengumuman.find(function(x){ return x.id === id; });
    if(!pn) return;
    setText("form-pengumuman-title", "Ubah Pengumuman");
    setVal("pengumuman-edit-id", pn.id);
    setVal("pengumuman-in-judul", pn.judul);
    setVal("pengumuman-in-level", pn.level || "Informasi");
    setVal("pengumuman-in-tgl", pn.tgl);
    setVal("pengumuman-in-desk", pn.desk);
  }else{
    setText("form-pengumuman-title", "Tambah Pengumuman");
    setVal("pengumuman-in-tgl", todayStr());
    setVal("pengumuman-in-level", "Informasi");
  }
  box.scrollIntoView({ behavior:"smooth", block:"start" });
}
function closeFormPengumuman(){ document.getElementById("box-form-pengumuman").classList.add("hidden"); }

function saveItemPengumuman(e){
  e.preventDefault();
  const id = getVal("pengumuman-edit-id");
  const payload = {
    judul: getVal("pengumuman-in-judul"),
    level: getVal("pengumuman-in-level") || "Informasi",
    tgl: getVal("pengumuman-in-tgl"),
    desk: getVal("pengumuman-in-desk")
  };
  if(id){
    const pn = DATA.pengumuman.find(function(x){ return x.id === id; });
    if(pn) Object.assign(pn, payload);
  }else{
    payload.id = uid("p");
    DATA.pengumuman.push(payload);
  }
  if(saveData()){
    renderPengumuman(); renderTablePengumuman(); closeFormPengumuman();
    toast(id ? "Pengumuman diperbarui." : "Pengumuman diterbitkan.");
  }
}
function deletePengumuman(id){
  const pn = DATA.pengumuman.find(function(x){ return x.id === id; });
  if(!pn) return;
  if(!confirm('Hapus pengumuman "' + pn.judul + '"?')) return;
  DATA.pengumuman = DATA.pengumuman.filter(function(x){ return x.id !== id; });
  saveData(); renderPengumuman(); renderTablePengumuman();
  toast("Pengumuman dihapus.");
}

/* =========================================================================
   CRUD GALERI
   ========================================================================= */
function renderAdminGaleri(){
  const g = document.getElementById("admin-gallery-grid");
  if(!g) return;
  if(!DATA.galeri.length){
    g.innerHTML = '<div class="table-empty" style="grid-column:1/-1;background:#fff;border:1.5px dashed var(--line-2);border-radius:14px">Galeri masih kosong. Klik "+ Upload Foto".</div>';
    return;
  }
  g.innerHTML = DATA.galeri.slice().reverse().map(function(gl){
    return '<div class="ag-item">' +
      '<div class="ag-thumb"><img src="' + esc(gl.img) + '" alt="' + esc(gl.judul) + '" loading="lazy"></div>' +
      '<div class="ag-body">' +
        '<div class="ag-title">' + esc(gl.judul) + "</div>" +
        '<div class="ag-cat">' + esc(gl.kategori || "Dokumentasi") + "</div>" +
        '<div class="ag-actions">' +
          '<button class="btn btn-xs btn-secondary" onclick="openFormGaleri(\'' + esc(gl.id) + '\')">Ubah</button>' +
          '<button class="btn btn-xs btn-outline-danger" onclick="deleteGaleri(\'' + esc(gl.id) + '\')">Hapus</button>' +
        "</div>" +
      "</div></div>";
  }).join("");
}

function openFormGaleri(id){
  const box = document.getElementById("box-form-galeri");
  box.classList.remove("hidden");
  document.getElementById("form-item-galeri").reset();
  setVal("galeri-edit-id", "");
  TMP.galeriImg = "";
  updatePreview("preview-galeri", "preview-galeri-placeholder", "");
  if(id){
    const gl = DATA.galeri.find(function(x){ return x.id === id; });
    if(!gl) return;
    setText("form-galeri-title", "Ubah Foto Galeri");
    setVal("galeri-edit-id", gl.id);
    setVal("galeri-in-judul", gl.judul);
    setVal("galeri-in-kategori", gl.kategori);
    TMP.galeriImg = gl.img || "";
    setVal("input-url-galeri", (gl.img && gl.img.slice(0,4) === "data:") ? "" : (gl.img || ""));
    updatePreview("preview-galeri", "preview-galeri-placeholder", TMP.galeriImg);
  }else{
    setText("form-galeri-title", "Upload Foto Galeri");
  }
  box.scrollIntoView({ behavior:"smooth", block:"start" });
}
function closeFormGaleri(){ document.getElementById("box-form-galeri").classList.add("hidden"); }

function saveItemGaleri(e){
  e.preventDefault();
  const id = getVal("galeri-edit-id");
  const img = getVal("input-url-galeri") || TMP.galeriImg;
  if(!img){ toast("Pilih file gambar atau isi URL gambar terlebih dahulu.", "err"); return; }
  const payload = {
    judul: getVal("galeri-in-judul"),
    kategori: getVal("galeri-in-kategori") || "Dokumentasi",
    img: img
  };
  if(id){
    const gl = DATA.galeri.find(function(x){ return x.id === id; });
    if(gl) Object.assign(gl, payload);
  }else{
    payload.id = uid("g");
    DATA.galeri.push(payload);
  }
  if(saveData()){
    renderGaleri(); renderAdminGaleri(); closeFormGaleri();
    toast(id ? "Foto galeri diperbarui." : "Foto berhasil ditambahkan ke galeri.");
  }
}
function deleteGaleri(id){
  const gl = DATA.galeri.find(function(x){ return x.id === id; });
  if(!gl) return;
  if(!confirm('Hapus foto "' + gl.judul + '" dari galeri?')) return;
  DATA.galeri = DATA.galeri.filter(function(x){ return x.id !== id; });
  saveData(); renderGaleri(); renderAdminGaleri();
  toast("Foto dihapus dari galeri.");
}

/* =========================================================================
   BACKUP & RESTORE (JSON)
   ========================================================================= */
function exportDataJSON(){
  try{
    const blob = new Blob([JSON.stringify(DATA, null, 2)], { type:"application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const t = new Date().toISOString().slice(0,10);
    a.href = url;
    a.download = "backup-sdn-kebotohan-" + t + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 1500);
    toast("Cadangan data diunduh.");
  }catch(e){ toast("Gagal membuat cadangan: " + e.message, "err"); }
}

function importDataJSON(e){
  const file = e.target.files && e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onerror = function(){ toast("Gagal membaca file.", "err"); };
  reader.onload = function(ev){
    try{
      const parsed = JSON.parse(ev.target.result);
      if(!parsed || typeof parsed !== "object" || !parsed.identitas){
        toast("File tidak valid: bukan cadangan data situs ini.", "err"); return;
      }
      if(!confirm("Impor data akan MENGGANTI seluruh isi situs saat ini. Lanjutkan?")) return;
      DATA = mergeDefaults(parsed, DEFAULT_DATA);
      saveData(); renderAll();
      if(isLoggedIn()){ fillIdentitasForm(); renderAdminTables(); }
      toast("Data berhasil dipulihkan dari cadangan.");
    }catch(err){ toast("File JSON tidak dapat dibaca.", "err"); }
  };
  reader.readAsText(file);
  e.target.value = "";
}

function resetDefaultData(){
  if(!confirm("Kembalikan SEMUA isi situs ke data bawaan? Perubahan Anda akan hilang (unduh cadangan dulu bila perlu).")) return;
  DATA = deepClone(DEFAULT_DATA);
  saveData(); renderAll();
  if(isLoggedIn()){ fillIdentitasForm(); renderAdminTables(); }
  toast("Data dikembalikan ke setelan awal.");
}


/* =========================================================================
   INIT & EVENT
   ========================================================================= */
function wireFileInput(fileId, urlId, tmpKey, previewId, previewPhId, maxDim){
  const file = document.getElementById(fileId);
  const url = document.getElementById(urlId);
  if(file){
    file.addEventListener("change", function(){
      const f = this.files && this.files[0];
      if(!f) return;
      if(f.size > 6 * 1024 * 1024){ toast("Ukuran gambar maksimal 6 MB.", "err"); this.value = ""; return; }
      readFileAsImage(f, maxDim || 1000, function(dataUrl){
        if(!dataUrl) return;
        TMP[tmpKey] = dataUrl;
        if(url) url.value = "";
        updatePreview(previewId, previewPhId, dataUrl);
        toast("Gambar siap. Klik tombol Simpan untuk menerapkan.");
      });
    });
  }
  if(url){
    url.addEventListener("change", function(){
      const v = this.value.trim();
      if(v && !/^https?:\/\//i.test(v) && v.slice(0,5) !== "data:"){
        toast("URL harus diawali http:// atau https://", "err"); return;
      }
      TMP[tmpKey] = "";
      updatePreview(previewId, previewPhId, v);
    });
  }
}

function wireEvents(){
  /* Tombol admin */
  const btnAdmin = document.getElementById("btn-open-admin");
  if(btnAdmin) btnAdmin.addEventListener("click", openAdmin);

  /* Navigasi admin */
  document.querySelectorAll(".admin-nav-item").forEach(function(b){
    b.addEventListener("click", function(){ switchTab(this.dataset.tab); });
  });

  /* Tutup modal */
  document.querySelectorAll("[data-close]").forEach(function(el){
    el.addEventListener("click", function(){ closeModal(this.dataset.close); });
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
      const open = document.querySelectorAll(".modal:not(.hidden)");
      if(open.length) closeModal(open[open.length - 1].id);
      const nm = document.getElementById("nav-menu");
      if(nm) nm.classList.remove("open");
    }
  });

  /* Burger menu */
  const burger = document.getElementById("burger-btn");
  const navMenu = document.getElementById("nav-menu");
  if(burger && navMenu){
    burger.addEventListener("click", function(){ navMenu.classList.toggle("open"); });
    navMenu.addEventListener("click", function(e){
      if(e.target.classList.contains("nav-link")) navMenu.classList.remove("open");
    });
  }

  /* Cari berita */
  const cari = document.getElementById("cari-berita");
  if(cari){
    let t;
    cari.addEventListener("input", function(){
      clearTimeout(t);
      t = setTimeout(renderBerita, 180);
    });
  }

  /* Upload gambar */
  wireFileInput("input-file-logo", "input-url-logo", "logo", "preview-logo", "preview-logo-placeholder", 512);
  wireFileInput("input-file-ks", "input-url-ks", "ksFoto", "preview-ks", "preview-ks-placeholder", 640);
  wireFileInput("input-file-berita", "input-url-berita", "beritaImg", "preview-berita", "preview-berita-placeholder", 1200);
  wireFileInput("input-file-galeri", "input-url-galeri", "galeriImg", "preview-galeri", "preview-galeri-placeholder", 1400);

  /* Navbar shadow + link aktif saat scroll */
  const navbar = document.getElementById("navbar");
  const sections = ["beranda","profil","berita","kegiatan","pengumuman","galeri","kontak"];
  let ticking = false;
  window.addEventListener("scroll", function(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      if(navbar) navbar.classList.toggle("scrolled", window.scrollY > 8);
      let current = sections[0];
      sections.forEach(function(id){
        const el = document.getElementById(id);
        if(el && el.getBoundingClientRect().top <= 150) current = id;
      });
      document.querySelectorAll(".nav-link").forEach(function(a){
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
      ticking = false;
    });
  }, { passive:true });
}

document.addEventListener("DOMContentLoaded", function(){
  renderAll();
  wireEvents();
});

/* Fungsi global dipanggil dari atribut onclick di HTML */
window.openBerita = openBerita;
window.openGaleri = openGaleri;
window.openFormBerita = openFormBerita;
window.closeFormBerita = closeFormBerita;
window.saveItemBerita = saveItemBerita;
window.deleteBerita = deleteBerita;
window.openFormKegiatan = openFormKegiatan;
window.closeFormKegiatan = closeFormKegiatan;
window.saveItemKegiatan = saveItemKegiatan;
window.deleteKegiatan = deleteKegiatan;
window.openFormPengumuman = openFormPengumuman;
window.closeFormPengumuman = closeFormPengumuman;
window.saveItemPengumuman = saveItemPengumuman;
window.deletePengumuman = deletePengumuman;
window.openFormGaleri = openFormGaleri;
window.closeFormGaleri = closeFormGaleri;
window.saveItemGaleri = saveItemGaleri;
window.deleteGaleri = deleteGaleri;
window.saveIdentitas = saveIdentitas;
window.handleLoginSubmit = handleLoginSubmit;
window.handleGantiSandi = handleGantiSandi;
window.adminLogout = adminLogout;
window.clearLogo = clearLogo;
window.clearFotoKS = clearFotoKS;
window.clearFotoBerita = clearFotoBerita;
window.exportDataJSON = exportDataJSON;
window.importDataJSON = importDataJSON;
window.resetDefaultData = resetDefaultData;
