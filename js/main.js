document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Hero background rotation ---------- */
(function initHero() {
  const hero = document.getElementById("hero");
  if (!hero || typeof HERO_IMAGES === "undefined" || HERO_IMAGES.length === 0) return;

  HERO_IMAGES.forEach((path, i) => {
    const slide = document.createElement("div");
    slide.className = "hero-slide" + (i === 0 ? " is-active" : "");
    slide.style.backgroundImage = `url(images/${path})`;
    hero.prepend(slide);
  });

  if (HERO_IMAGES.length > 1) {
    let current = 0;
    const slides = hero.querySelectorAll(".hero-slide");
    setInterval(() => {
      slides[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
    }, 6000);
  }
})();

/* ---------- Gallery grid on homepage ---------- */
(function renderGalleryGrid() {
  const grid = document.getElementById("gallery-grid");
  const countLabel = document.getElementById("gallery-count");
  if (!grid || typeof GALLERIES === "undefined") return;

  countLabel.textContent = `${GALLERIES.length} galleries`;

  GALLERIES.forEach((g, i) => {
    const num = String(i + 1).padStart(2, "0");
    const isEmpty = !g.cover;

    const card = document.createElement(isEmpty ? "div" : "a");
    card.className = "gallery-card" + (isEmpty ? " is-empty" : "");
    if (!isEmpty) card.href = `gallery.html?g=${g.slug}`;

    card.innerHTML = `
      ${!isEmpty ? `<img src="images/${g.slug}/${g.cover}" alt="${g.title}" loading="lazy">` : ""}
      <div class="gallery-card-label">
        <span class="num">${num}</span>
        <h3>${g.title}</h3>
        ${isEmpty ? '<span class="coming-soon">Coming soon</span>' : ""}
      </div>
    `;
    grid.appendChild(card);
  });
})();

/* ---------- Contact form (Formspree) ---------- */
(function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Sending...";
    status.className = "form-status";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        status.textContent = "Thanks — your message is on its way. I'll be in touch soon.";
        status.className = "form-status success";
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      status.textContent = "Something went wrong. Please try emailing info@thekirkf.com directly.";
      status.className = "form-status error";
    }
  });
})();
