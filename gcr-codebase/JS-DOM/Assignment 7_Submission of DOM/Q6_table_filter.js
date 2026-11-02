// Q6. Real-Time Table Filter Using input Event

const searchBox = document.getElementById("searchBox");
const rows = document.querySelectorAll("#studentTable tbody tr");
const noResults = document.getElementById("noResults");

// The "input" event fires on every keystroke, so the table filters in real time
searchBox.addEventListener("input", () => {
  // Case-insensitive search: convert both the query and the row text to lowercase
  const query = searchBox.value.trim().toLowerCase();
  let visibleRows = 0;

  rows.forEach((row) => {
    // Join all cells (Name, Branch, CGPA) into one string to search in
    const rowText = Array.from(row.cells)
      .map((cell) => cell.textContent)
      .join(" ")
      .toLowerCase();

    const isMatch = rowText.includes(query);
    row.style.display = isMatch ? "" : "none"; // hide rows that do not match
    if (isMatch) visibleRows++;
  });

  // Show the message when nothing matches
  noResults.style.display = visibleRows === 0 ? "block" : "none";
});