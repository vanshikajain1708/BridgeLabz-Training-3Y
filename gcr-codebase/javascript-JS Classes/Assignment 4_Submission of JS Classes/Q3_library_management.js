// Q3. Library Management System (Classes + Objects)

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) {
      return `"${this.title}" is already issued.`;
    }
    this.isIssued = true;
    return `"${this.title}" has been issued successfully.`;
  }

  returnBook() {
    if (!this.isIssued) {
      return `"${this.title}" was not issued.`;
    }
    this.isIssued = false;
    return `"${this.title}" has been returned.`;
  }
}

// Array of book objects
const library = [
  new Book("Clean Code", "Robert C. Martin", "ISBN-101"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "ISBN-102"),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "ISBN-103"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "ISBN-104"),
];

// Display all available (not issued) books
function displayAvailableBooks() {
  console.log("--- Available Books ---");
  const available = library.filter((book) => !book.isIssued);
  if (available.length === 0) {
    console.log("No books available.");
    return;
  }
  available.forEach((book) => console.log(`${book.isbn} | ${book.title} by ${book.author}`));
}

// Search a book by ISBN and issue it
function issueBookByISBN(isbn) {
  const book = library.find((b) => b.isbn === isbn);
  if (!book) {
    console.log(`No book found with ISBN: ${isbn}`);
    return;
  }
  console.log(book.issueBook());
}

// ISBN can be passed from the terminal: node Q3_library_management.js ISBN-102
const searchIsbn = process.argv[2] || "ISBN-102";

displayAvailableBooks();
console.log(`\nSearching ISBN: ${searchIsbn}`);
issueBookByISBN(searchIsbn);

console.log("");
displayAvailableBooks();

// Extra tests
console.log("\n--- Extra tests ---");
issueBookByISBN(searchIsbn); // issue the same book again
issueBookByISBN("ISBN-999"); // ISBN that does not exist
const issuedBook = library.find((b) => b.isbn === searchIsbn);
if (issuedBook) console.log(issuedBook.returnBook());