/* ============================================================
   باربری پربار — script.js
   Interactions, Animations, Loader, Scroll Effects
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── LOADER ───────────────────────────────────────────────────
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('done');
    }, 2000);
  });

  // ─── PARTICLES ────────────────────────────────────────────────
  const particleContainer = document.getElementById('particles');
  if (particleContainer) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const dx = (Math.random() - 0.5) * 300;
      const dy = -(Math.random() * 200 + 80);
      const dur = (Math.random() * 8 + 5) + 's';
      const delay = (Math.random() * 10) + 's';
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        left:${x}%; top:${y}%;
        width:${size}px; height:${size}px;
        --dx:${dx}px; --dy:${dy}px;
        --dur:${dur}; --delay:${delay};
        opacity:0;
      `;
      particleContainer.appendChild(p);
    }
  }

  // ─── NAVBAR SCROLL ────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
    updateActiveLink();
  });

  // ─── ACTIVE NAV LINK ──────────────────────────────────────────
  function updateActiveLink() {
    const sections = ['home', 'services', 'about', 'contact'];
    const scrollPos = window.scrollY + 120;
    sections.forEach(id => {
      const el = document.getElementById(id);
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!el || !link) return;
      if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  // ─── HAMBURGER MENU ───────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // ─── SMOOTH SCROLL ────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── SCROLL REVEAL ────────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => revealObserver.observe(el));

  // ─── COUNTER ANIMATION ────────────────────────────────────────
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();
    const update = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      if (target >= 10000) {
        el.textContent = '+' + current.toLocaleString('fa-IR');
      } else {
        el.textContent = current.toLocaleString('fa-IR') + '+';
      }
      if (progress < 1) requestAnimationFrame(update);
      else {
        if (target >= 10000) {
          el.textContent = '+' + target.toLocaleString('fa-IR');
        } else {
          el.textContent = target.toLocaleString('fa-IR') + '+';
        }
      }
    };
    requestAnimationFrame(update);
  }

  // ─── TESTIMONIAL SLIDER ───────────────────────────────────────
  const track = document.getElementById('testiTrack');
  const cards = track ? [...track.querySelectorAll('.testi-card')] : [];
  let currentTesti = 0;

  function getVisibleCount() {
    return window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
  }

  function updateSlider() {
    const visible = getVisibleCount();
    cards.forEach((card, i) => {
      card.style.display = (i >= currentTesti && i < currentTesti + visible) ? '' : 'none';
    });
  }

  const testiPrev = document.getElementById('testiPrev');
  const testiNext = document.getElementById('testiNext');

  if (testiPrev && testiNext && cards.length) {
    updateSlider();
    testiPrev.addEventListener('click', () => {
      const visible = getVisibleCount();
      currentTesti = (currentTesti - 1 + cards.length) % cards.length;
      updateSlider();
    });
    testiNext.addEventListener('click', () => {
      const visible = getVisibleCount();
      currentTesti = (currentTesti + 1) % cards.length;
      updateSlider();
    });
    window.addEventListener('resize', updateSlider);

    // Auto-slide
    setInterval(() => {
      currentTesti = (currentTesti + 1) % cards.length;
      updateSlider();
    }, 5000);
  }

  // ─── LIQUID GLASS MOUSE GLOW ──────────────────────────────────
  const glassCards = document.querySelectorAll('.glass');
  glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(33,150,243,0.12) 0%, rgba(255,255,255,0.04) 60%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });

  // ─── HERO PARALLAX ────────────────────────────────────────────
  const heroImg = document.querySelector('.hero-img');
  window.addEventListener('scroll', () => {
    if (!heroImg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    heroImg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  });

  // ─── LIQUID BLOB ANIMATION ────────────────────────────────────
  const heroSection = document.getElementById('home');
  if (heroSection) {
    const blob = document.createElement('div');
    blob.style.cssText = `
      position: absolute;
      width: 500px; height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(33,150,243,0.08) 0%, transparent 70%);
      top: 10%; right: 5%;
      pointer-events: none;
      z-index: 1;
      animation: blobPulse 6s ease-in-out infinite;
    `;
    const style = document.createElement('style');
    style.textContent = `
      @keyframes blobPulse {
        0%,100% { transform: scale(1) rotate(0deg); border-radius: 50%; }
        33% { transform: scale(1.08) rotate(5deg); border-radius: 42% 58% 55% 45% / 45% 55% 58% 42%; }
        66% { transform: scale(0.95) rotate(-5deg); border-radius: 58% 42% 45% 55% / 55% 45% 42% 58%; }
      }
    `;
    document.head.appendChild(style);
    heroSection.querySelector('.hero-bg').appendChild(blob);
  }

  // ─── SERVICE CARD TILT ────────────────────────────────────────
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ─── GLOW LINES (decorative SVG) ─────────────────────────────
  const glowLineStyle = document.createElement('style');
  glowLineStyle.textContent = `
    .about-section::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(33,150,243,0.4), transparent);
    }
    .about-section { position: relative; }
    .services-section::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(33,150,243,0.3), transparent);
    }
    .services-section { position: relative; }
  `;
  document.head.appendChild(glowLineStyle);

});
