window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.6s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 1200);
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach((section) => {
    observer.observe(section);
  });

  const cards = document.querySelectorAll(
    ".card, .service-card, .contact-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-12px)";
      card.style.boxShadow = "0 0 40px rgba(59,130,246,.25)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 0 30px rgba(59,130,246,.08)";
    });
  });

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
      navbar.style.backdropFilter = "blur(25px)";
      navbar.style.background = "rgba(2,6,23,.65)";
    } else {
      navbar.style.background = "rgba(255,255,255,.04)";
    }
  });
});
