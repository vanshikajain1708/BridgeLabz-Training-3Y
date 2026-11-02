// Q8. Custom Dropdown Using Only JavaScript (No <select> Tag)

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");

const options = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// Build the option list
options.forEach((optionText) => {
  const li = document.createElement("li");
  li.textContent = optionText;
  dropdownList.appendChild(li);
});

// Button click: show or hide the options
dropdownButton.addEventListener("click", () => {
  dropdownList.classList.toggle("open");
});

// Clicking an option updates the button text and closes the list (event delegation)
dropdownList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    dropdownButton.textContent = event.target.textContent;
    dropdownList.classList.remove("open");
  }
});

// Close the dropdown when clicking outside it.
// The third argument "true" makes this listener run in the CAPTURING phase:
// the event travels from the top (document) down to the target, so this runs
// FIRST, before any normal (bubbling) click handler on the elements below.
document.addEventListener(
  "click",
  (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.classList.remove("open");
    }
  },
  true
);