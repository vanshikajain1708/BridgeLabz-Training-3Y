// Q9. Form Submit Blocker with preventDefault() and Live Errors

const form = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

// Validation rules: each returns an error message, or "" when the value is valid
const validators = {
  name: (value) => (value.trim() === "" ? "Name is required." : ""),
  email: (value) => {
    if (value.trim() === "") return "Email is required.";
    if (!value.includes("@")) return "Email must contain @.";
    return "";
  },
  password: (value) => (value.length < 6 ? "Password must be at least 6 characters." : ""),
};

// Validates one field and shows/clears its inline error
function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const errorBox = document.getElementById(`${fieldId}Error`);
  const message = validators[fieldId](input.value);

  errorBox.textContent = message;
  input.classList.toggle("invalid", message !== "");
  return message === "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the real form submission (page reload)

  // Validate every field (map runs all of them, so every error is shown)
  const results = Object.keys(validators).map(validateField);
  const allValid = results.every((result) => result === true);

  successMessage.textContent = allValid ? "Form Submitted Successfully" : "";
});

// Live errors: once an error is showing, re-check while the user types.
// As soon as the input becomes valid, the error disappears automatically.
Object.keys(validators).forEach((fieldId) => {
  document.getElementById(fieldId).addEventListener("input", () => {
    successMessage.textContent = "";
    const errorBox = document.getElementById(`${fieldId}Error`);
    if (errorBox.textContent !== "") {
      validateField(fieldId);
    }
  });
});