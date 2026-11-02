// Q3. Multi-Step Form with Next/Back & Validation

const steps = document.querySelectorAll(".step");
const inputs = [
  document.getElementById("nameInput"),
  document.getElementById("emailInput"),
  document.getElementById("passwordInput"),
];
const progress = document.getElementById("progress");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const formCard = document.getElementById("formCard");
const summary = document.getElementById("summary");

let currentStep = 0; // 0 = Name, 1 = Email, 2 = Password

// One validator per step: returns an error message, or "" when the value is valid
const validators = [
  (value) => (/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value.trim()) ? "" : "Name must contain only alphabets."),
  (value) => (/^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(value.trim()) ? "" : "Enter a valid email like example@domain.com."),
  (value) => (value.length >= 6 ? "" : "Password must be at least 6 characters."),
];

// Shows only the current step and updates the buttons
function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === stepIndex);
  });
  progress.textContent = `Step ${stepIndex + 1} of 3`;
  backButton.disabled = stepIndex === 0;
  nextButton.textContent = stepIndex === steps.length - 1 ? "Finish" : "Next";
}

// Validates the current step and shows the error message if needed
function validateCurrentStep() {
  const errorMessage = validators[currentStep](inputs[currentStep].value);
  document.getElementById(`error${currentStep}`).textContent = errorMessage;
  return errorMessage === "";
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return; // stay on this step if invalid

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    // All 3 steps are complete: show the summary
    document.getElementById("summaryName").textContent = inputs[0].value.trim();
    document.getElementById("summaryEmail").textContent = inputs[1].value.trim();
    document.getElementById("summaryPassword").textContent = "*".repeat(inputs[2].value.length);
    formCard.style.display = "none";
    summary.style.display = "block";
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Clear the error as soon as the user edits the field
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    document.getElementById(`error${index}`).textContent = "";
  });
});

document.getElementById("restartButton").addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  currentStep = 0;
  showStep(0);
  summary.style.display = "none";
  formCard.style.display = "block";
});

showStep(0);