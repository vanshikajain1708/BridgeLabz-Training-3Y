// Q1. Dynamic Product List Manager (Add, Edit, Delete using Event Delegation)

const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Keeps track of the <li> that is currently in edit mode (null if none)
let currentEditItem = null;

// ---------- Add a new product ----------
function addProduct() {
  const productName = productInput.value.trim();
  if (productName === "") return; // ignore empty input

  const item = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = '<button class="edit-btn">Edit</button><button class="delete-btn">Delete</button>';

  item.appendChild(nameSpan);
  item.appendChild(actions);
  productList.appendChild(item);

  productInput.value = "";
  productInput.focus();
}

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addProduct();
});

// ---------- Edit mode helpers ----------
function startEditing(item) {
  const nameSpan = item.querySelector(".product-name");

  // Replace the text with an input box for inline editing
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "edit-input";
  editInput.value = nameSpan.textContent;
  item.replaceChild(editInput, nameSpan);

  item.querySelector(".edit-btn").textContent = "Save";
  editInput.focus();
  currentEditItem = item;
}

function saveEditing(item) {
  const editInput = item.querySelector(".edit-input");
  if (!editInput) return;

  // If the user cleared the text, keep the old name
  const newName = editInput.value.trim() || editInput.defaultValue;

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = newName;
  item.replaceChild(nameSpan, editInput);

  item.querySelector(".edit-btn").textContent = "Edit";
  currentEditItem = null;
}

// ---------- Event delegation: ONE listener on the parent <ul> ----------
// Buttons are created dynamically, so we do not attach listeners to each button.
// Clicks bubble up to the <ul>, and event.target tells us which button was clicked.
productList.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;

  if (event.target.classList.contains("delete-btn")) {
    if (item === currentEditItem) currentEditItem = null;
    item.remove();
  } else if (event.target.classList.contains("edit-btn")) {
    if (item === currentEditItem) {
      saveEditing(item); // button shows "Save" while editing
    } else {
      if (currentEditItem) saveEditing(currentEditItem); // save the previous edit first
      startEditing(item);
    }
  }
});

// Press Enter inside the edit box to save (also delegated)
productList.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
    saveEditing(event.target.closest("li"));
  }
});

// Click anywhere outside the item being edited: auto-save
document.addEventListener("click", (event) => {
  if (currentEditItem && !currentEditItem.contains(event.target)) {
    saveEditing(currentEditItem);
  }
});