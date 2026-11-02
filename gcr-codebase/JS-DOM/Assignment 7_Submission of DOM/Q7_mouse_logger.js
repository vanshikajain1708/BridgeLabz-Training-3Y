// Q7. Detect Mouse Path & Coordinates Logger

const box = document.getElementById("box");
const coordsDisplay = document.getElementById("coords");

// Live coordinates while the mouse moves inside the box
box.addEventListener("mousemove", (event) => {
  // clientX / clientY are measured from the top-left corner of the browser window
  coordsDisplay.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

// Reset the text when the mouse leaves the box
box.addEventListener("mouseleave", () => {
  coordsDisplay.textContent = "Move the mouse inside the box";
});

// Double-click: drop a red dot at the click position
box.addEventListener("dblclick", (event) => {
  const boxPosition = box.getBoundingClientRect();

  // Convert window coordinates to coordinates inside the box
  // (box.clientLeft / clientTop is the border width)
  const x = event.clientX - boxPosition.left - box.clientLeft;
  const y = event.clientY - boxPosition.top - box.clientTop;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  box.appendChild(dot);
});