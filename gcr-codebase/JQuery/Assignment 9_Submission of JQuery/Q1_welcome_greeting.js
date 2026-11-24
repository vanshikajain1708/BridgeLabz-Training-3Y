// Q1. Welcome Page Greeting (jQuery)

// $(document).ready() runs the code only after the whole page (DOM) has loaded
$(document).ready(function () {
  const quotes = [
    "Believe you can and you are halfway there.",
    "Small steps every day lead to big results.",
    "Do not watch the clock; do what it does. Keep going.",
    "Your only limit is your mind.",
    "Dream big, work hard, stay focused.",
  ];
  let quoteIndex = 0;

  // Returns a greeting based on the current time of day
  function getTimeGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning, Visitor!";
    } else if (hour <= 17) {
      return "Good Afternoon, Visitor!";
    }
    return "Good Evening, Visitor!";
  }

  // 1. On page load: show a personalized greeting
  // .text() sets the text content of the selected element
  $("#greeting").text(getTimeGreeting());

  // 2. "Change Greeting" button: replace the text with the next motivational quote
  $("#changeGreeting").on("click", function () {
    $("#greeting").text(quotes[quoteIndex]);
    quoteIndex = (quoteIndex + 1) % quotes.length; // go back to the first quote after the last
  });

  // 3. Toggle visibility of the welcome message
  // .toggle() shows the element if it is hidden and hides it if it is visible
  $("#toggleWelcome").on("click", function () {
    $("#welcomeMessage").toggle();
  });

  // 4. Show an alert when the greeting is clicked
  // $(this) is the element that was clicked
  $("#greeting").on("click", function () {
    alert("You clicked the greeting: " + $(this).text());
  });
});