# SDN KEBOTOHAN — Website Sekolah

Website resmi SDN Kebotohan: profil sekolah, berita, kegiatan, pengumuman, galeri, dan panel admin.

## Struktur

- `index.html` — halaman utama
- `style.css` — tampilan (tema hijau sekolah)
- `app.js` — data, render, panel admin, backup/restore

## Fitur

**Halaman publik**
- Berita terbaru
- Pengumuman
- Kegiatan sekolah
- Galeri foto
- Profil (visi, misi, statistik)
- Responsif mobile

**Panel admin** (klik menu "Admin")
- Login dengan kata sandi
- Kelola berita, kegiatan, pengumuman, galeri: tambah / edit / hapus
- Backup data ke file `.json`
- Restore dari file backup
- Reset ke data bawaan

## Login admin

Kata sandi bawaan: `admin123`

Ubah lewat console browser:

```js
setAdminPassword('sandi-baru-anda')
```

## PENTING — batasan keamanan

Ini situs **statis** (GitHub Pages). Tidak ada server.

- Data admin tersimpan di **localStorage browser** — hanya di perangkat itu, tidak tersinkron.
- Gerbang login hanya UI, **bukan keamanan sungguhan**. Kode dapat dibaca siapa pun lewat DevTools.
- Jangan pernah menyimpan data rahasia (NISN, nilai, data pribadi siswa) di sini.

Untuk data yang benar-benar aman dan tersinkron antar perangkat, dibutuhkan backend (mis. Firebase, Supabase, atau server sendiri).

## Deploy ke GitHub Pages

1. Repositori sudah di-push ke GitHub
2. Buka Settings → Pages
3. Source: `Deploy from a branch`
4. Branch: `main`, folder: `/ (root)`
5. Simpan — situs aktif di `https://<username>.github.io/<repo>/`

## Menjalankan lokal

Buka `index.html` langsung di browser. Tidak perlu build tool.
