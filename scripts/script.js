// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Carousel functionality
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let currentIndex = 1; // Start with second image in center

function updateCarousel() {
  const slideWidth = images[0].clientWidth + 16; // account for margin between images
  track.style.transform = `translateX(-${(slideWidth + 16) * (currentIndex - 1)}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

// Auto-carousel every 8 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 8000);

// Search functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const sections = document.querySelectorAll("section");
    let found = false;

    sections.forEach(section => {
      const text = section.textContent.toLowerCase();
      if (!found && text.includes(query)) {
        section.scrollIntoView({ behavior: "smooth" });
        found = true;
      }
    });

    if (!found) {
      console.log("No matching section found.");
    }
  });
});

// Text animation
const textElems = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');

// Add the .text-animate class to them dynamically
textElems.forEach(el => {
  el.classList.add('text-animate');
});

// Function to check if the text is in the viewport
function checkVisibility() {
  textElems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('visible');
    }
  });
}

// Listen for scroll events and trigger visibility check
window.addEventListener('scroll', checkVisibility);

// Also check when the page loads
window.addEventListener('load', checkVisibility);

document.addEventListener("scroll", function() {
  const images = document.querySelectorAll('.img-wrapper');
  const scrollPosition = window.scrollY;
  
  images.forEach((img, index) => {
    const speed = index % 2 === 0 ? 0.2 : -0.2;  // Adjust speed for different images
    const translateY = scrollPosition * speed;
    const translateZ = scrollPosition * (index * 0.1); // Creates different depths for each image
    
    img.style.transform = `translateY(${translateY}px) translateZ(${translateZ}px)`;
  });
});

// Reusable Carousel Function
function initCarousel(selector) {
  const track = document.querySelector(`${selector} .carousel-track`);
  const images = document.querySelectorAll(`${selector} .carousel-image`);
  const nextBtn = document.querySelector(`${selector} .carousel-btn.next`);
  const prevBtn = document.querySelector(`${selector} .carousel-btn.prev`);

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = images[0].clientWidth;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  // Auto-carousel every 8 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 8000);

  // Initialize
  updateCarousel();
}

// Initialize Carousel 1
initCarousel('.carousel');

// Initialize Carousel 2
initCarousel('.carousel-2');

// Update the active dot based on the current slide
function updateActiveDot() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active'); // Remove the active class from all dots
    if (index === currentIndex) {
      dot.classList.add('active'); // Add the active class to the current dot
    }
  });
}

// Call this function whenever the currentIndex changes

