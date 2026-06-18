document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".card, .service-card, .contact-card, .stats, .about-content"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)";
      card.style.boxShadow = "0 0 40px rgba(59,130,246,0.25)";
      card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 0 35px rgba(59,130,246,0.12)";
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  const sections = document.querySelectorAll(
    ".hero, .features, .about, .services, .stats, .cta, .contact"
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
  });
});
