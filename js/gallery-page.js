document.getElementById("year").textContent = new Date().getFullYear();

(function renderGalleryPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("g");
  const gallery = (typeof GALLERIES !== "undefined") ? GALLERIES.find(g => g.slug === slug) : null;

  const titleEl = document.getElementById("gallery-title");
  const kickerEl = document.getElementById("gallery-kicker");
  const gridEl = document.getElementById("photo-grid");
  const emptyEl = document.getElementById("empty-state");

  if (!gallery) {
    titleEl.textContent = "Gallery not found";
    kickerEl.textContent = "OOPS";
    emptyEl.style.display = "block";
    emptyEl.querySelector("h2").textContent = "We couldn't find that gallery.";
    emptyEl.querySelector("p").textContent = "It may have been renamed or removed.";
    return;
  }

  document.title = `${gallery.title} — The Kirk F`;
  titleEl.textContent = gallery.title;
  kickerEl.textContent = "GALLERY";

  if (!gallery.images || gallery.images.length === 0) {
    emptyEl.style.display = "block";
    return;
  }

  gallery.images.forEach((filename) => {
    const src = `images/${gallery.slug}/${filename}`;
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="${src}" alt="${gallery.title} photograph" loading="lazy">`;
    figure.addEventListener("click", () => openLightbox(src));
    gridEl.appendChild(figure);
  });
})();

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
