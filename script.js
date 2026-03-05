// --- 1. KODE SLIDER BANNER (Otomatis & Smooth) ---
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
  
  setTimeout(showSlides, 4000); 
}

// Jalankan slider saat halaman dibuka
showSlides();


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

