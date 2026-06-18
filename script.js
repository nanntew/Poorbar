/* =============================================
   BARBARI PARBARI - script.js
   ============================================= */

/* ============================
   1. LOADER
============================ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('done');
  }, 2000);
});

/* ============================
   2. NAVBAR SCROLL
============================ */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sections = ['home', 'services', 'about', 'contact'];
  let current = '';
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) current = id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* ============================
   3. HAMBURGER MENU
============================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ============================
   4. SCROLL REVEAL
============================ */
const revealElements = document.querySelectorAll('.reveal, .reveal-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.classList.contains('reveal-card')
        ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
        : 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/* ============================
   5. STATS COUNTER
============================ */
const statNums = document.querySelectorAll('.stat-num');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      statNums.forEach(el => {
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const step = Math.ceil(target / (duration / 30));
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = formatPersianNum(current);
        }, 30);
      });
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats');
if (statsSection) statsObserver.observe(statsSection);

function formatPersianNum(n) {
  if (n >= 1000) return '۰'; // placeholder until animation runs
  const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  return String(n).replace(/\d/g, d => persianDigits[d]);
}

/* Replace static Persian zeros with 0 for counter start */
statNums.forEach(el => {
  el.textContent = '۰';
});

/* ============================
   6. HERO PARTICLES
============================ */
const particleContainer = document.getElementById('particles');
const PARTICLE_COUNT = 18;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 5 + 2;
  p.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}%;
    bottom: -20px;
    animation-duration: ${Math.random() * 10 + 8}s;
    animation-delay: ${Math.random() * 8}s;
    opacity: ${Math.random() * 0.2 + 0.05};
  `;
  particleContainer.appendChild(p);
}

/* ============================
   7. TESTIMONIALS SLIDER
============================ */
const track = document.getElementById('testimonialsTrack');
const cards = Array.from(track.querySelectorAll('.testi-card'));
const prevBtn = document.getElementById('testiPrev');
const nextBtn = document.getElementById('testiNext');

let currentIndex = 0;
let visibleCount = getVisibleCount();

function getVisibleCount() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function updateSlider() {
  visibleCount = getVisibleCount();
  cards.forEach((card, i) => {
    card.style.display = (i >= currentIndex && i < currentIndex + visibleCount) ? 'block' : 'none';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    if (i >= currentIndex && i < currentIndex + visibleCount) {
      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, (i - currentIndex) * 100);
    }
  });
}

nextBtn.addEventListener('click', () => {
  if (currentIndex + visibleCount < cards.length) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', () => {
  currentIndex = 0;
  updateSlider();
});

updateSlider();

/* ============================
   8. SMOOTH SCROLL
============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================
   9. PARALLAX HERO
============================ */
const heroImg = document.querySelector('.hero-img');
window.addEventListener('scroll', () => {
  if (heroImg) {
    const y = window.scrollY;
    heroImg.style.transform = `scale(1.04) translateY(${y * 0.25}px)`;
  }
});

/* ============================
   10. GLOW ON HOVER CARDS
============================ */
document.querySelectorAll('.service-card, .feature-card, .testi-card, .contact-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width - 0.5) * 14;
    const yPct = (y / rect.height - 0.5) * -14;
    card.style.transform = `translateY(-6px) rotateX(${yPct}deg) rotateY(${xPct}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  });
});

/* ============================
   11. NAVBAR ACTIVE ON SCROLL
============================ */
updateActiveNav();
