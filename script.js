// --- KODE SLIDER BANNER ---
let index = 0;
const slides = document.querySelectorAll(".banner-img"); // Pastikan class sesuai

if (slides.length > 1) {
    setInterval(() => {
        // Logika slider sederhana
        // (Jika lo pake animasi CSS, kode ini perlu disesuaikan)
    }, 3000);
}

// --- KODE DROPDOWN (PASTIKAN f KECIL) ---
function toggleDropdown(id) {
    const content = document.getElementById(id);
    
    // 1. Cek apakah element ketemu
    if (!content) {
        console.error("ID tidak ditemukan: " + id);
        return;
    }

    const btn = content.previousElementSibling;

    // 2. Tutup dropdown lain yang lagi kebuka
    document.querySelectorAll('.dropdown-content').forEach(el => {
        if (el.id !== id) {
            el.classList.remove('show');
            if (el.previousElementSibling) {
                el.previousElementSibling.classList.remove('active');
            }
        }
    });

    // 3. Toggle class show untuk memunculkan isi
    content.classList.toggle('show');
    
    // 4. Toggle class active untuk ganti style tombol
    if (btn) {
        btn.classList.toggle('active');
    }
}

