// --- 1. KODE SLIDER BANNER (Otomatis & Smooth) ---
let slideIndex = 0;

// Inisialisasi Swiper
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// --- 2. KODE DROPDOWN (Fungsi yang sudah lo punya) ---
function toggleDropdown(id) {
    const content = document.getElementById(id);

    if (!content) {
        console.error("ID tidak ditemukan: " + id);
        return;
    }

    const btn = content.previousElementSibling;

    // Tutup dropdown lain
    document.querySelectorAll('.dropdown-content').forEach(el => {
        if (el.id !== id) {
            el.classList.remove('show');
            if (el.previousElementSibling) {
                el.previousElementSibling.classList.remove('active');
            }
        }
    });

    // Toggle class
    content.classList.toggle('show');
    if (btn) {
        btn.classList.toggle('active');
    }
}

