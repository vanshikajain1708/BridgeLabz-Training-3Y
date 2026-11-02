// Q2. Live Character Counter with Warning Behavior

const MAX_LENGTH = 100;
const WARNING_LIMIT = 20; // counter turns yellow at 20 or fewer characters left

const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

// Updates the remaining count and the counter colour
function updateCounter() {
  const remaining = MAX_LENGTH - textBox.value.length;
  counter.textContent = `${remaining} characters remaining`;

  counter.classList.remove("warning", "danger");
  if (remaining <= 0) {
    counter.classList.add("danger"); // red at 0
  } else if (remaining <= WARNING_LIMIT) {
    counter.classList.add("warning"); // yellow at 20 or less
  }
}

// Block typing once the limit is reached
textBox.addEventListener("keydown", (event) => {
  const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Tab"];
  const isAllowedKey = allowedKeys.includes(event.key);
  const isShortcut = event.ctrlKey || event.metaKey; // Ctrl+A, Ctrl+C, Ctrl+Z ...
  const hasSelection = textBox.selectionStart !== textBox.selectionEnd; // typing replaces selected text

  if (textBox.value.length >= MAX_LENGTH && !isAllowedKey && !isShortcut && !hasSelection) {
    event.preventDefault(); // stop the character from being typed
  }
});

// Pasting text: keep only as many characters as still fit
textBox.addEventListener("paste", (event) => {
  const pastedText = event.clipboardData.getData("text");
  const selectedLength = textBox.selectionEnd - textBox.selectionStart;
  const available = MAX_LENGTH - (textBox.value.length - selectedLength);

  if (pastedText.length > available) {
    event.preventDefault();
    textBox.setRangeText(pastedText.slice(0, Math.max(available, 0)), textBox.selectionStart, textBox.selectionEnd, "end");
    updateCounter();
  }
});

// Update the counter after every change
textBox.addEventListener("input", () => {
  // Safety net (for example mobile keyboards): never allow more than the maximum
  if (textBox.value.length > MAX_LENGTH) {
    textBox.value = textBox.value.slice(0, MAX_LENGTH);
  }
  updateCounter();
});

// Reset clears everything
resetButton.addEventListener("click", () => {
  textBox.value = "";
  updateCounter();
  textBox.focus();
});