// Q5. Image Gallery with Modal Preview

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

// These images are generated here so the page works without internet.
// To use real pictures, replace "thumb" and "large" with your own image URLs.
function makeImage(color, label, size) {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'>` +
    `<rect width='100%' height='100%' fill='${color}'/>` +
    `<text x='50%' y='50%' font-size='${size / 6}' fill='white' text-anchor='middle' ` +
    `dominant-baseline='middle' font-family='Arial'>Image ${label}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

const colors = ["#e57373", "#64b5f6", "#81c784", "#ffb74d", "#ba68c8", "#4db6ac"];

// 6 images, each with a small version (grid) and a bigger version (modal)
const images = colors.map((color, index) => ({
  thumb: makeImage(color, index + 1, 200),
  large: makeImage(color, index + 1, 600),
  caption: `Image ${index + 1}`,
}));

// Build the grid
images.forEach((image) => {
  const img = document.createElement("img");
  img.src = image.thumb;
  img.alt = image.caption;
  img.dataset.large = image.large; // bigger version stored on the element
  gallery.appendChild(img);
});

function openModal(src, caption) {
  modalImage.src = src;
  modalImage.alt = caption;
  modalCaption.textContent = caption;
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

// Event delegation: one listener on the grid handles clicks on every image
gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    openModal(event.target.dataset.large, event.target.alt);
  }
});

// Clicking on the dark background (outside the modal box) closes the modal
modal.addEventListener("click", closeModal);

// Clicking inside the modal box must NOT close it.
// stopPropagation() stops this click from bubbling up to the modal overlay above.
modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Extra: Escape key also closes the modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});