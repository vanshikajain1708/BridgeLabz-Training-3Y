// Q7. Search Courses (jQuery)

$(document).ready(function () {
  const $courses = $("#courseList li");
  const $titles = $(".course-title");

  // Save the original title text, so the highlighting can be removed later
  $titles.each(function () {
    $(this).data("original", $(this).text());
  });

  // Makes text safe to put inside HTML (so characters like < or & do not break the page)
  function escapeHtml(text) {
    return $("<div></div>").text(text).html();
  }

  // Makes the search text safe to use inside a regular expression
  function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Runs the filter for the text currently in the search box
  function filterCourses() {
    const query = $("#searchInput").val().trim().toLowerCase();
    let matchCount = 0;

    $courses.each(function () {
      const $course = $(this);
      const $title = $course.find(".course-title");
      const originalText = $title.data("original");
      const isMatch = originalText.toLowerCase().indexOf(query) !== -1; // empty query matches everything

      // 3. Toggle visibility: .toggle(true) shows the item, .toggle(false) hides it
      $course.toggle(isMatch);

      if (isMatch) {
        matchCount++;
      }

      if (query !== "" && isMatch) {
        // 2. Highlight the matched text: wrap it in <span class="match">
        const pattern = new RegExp("(" + escapeRegex(query) + ")", "gi");
        $title.html(escapeHtml(originalText).replace(pattern, '<span class="match">$1</span>'));
        $title.find(".match").css({ "background-color": "yellow", "font-weight": "bold" });
      } else {
        $title.text(originalText); // remove any old highlighting
      }
    });

    // 4. Show the number of matched courses
    $("#courseCount").text(matchCount + " of " + $courses.length + " courses found");
    $("#noResults").toggle(matchCount === 0);
  }

  // 1. Real-time search: .keyup() runs after every key the user types
  $("#searchInput").keyup(filterCourses);

  // 5. Clear button: empty the search box and show every course again
  $("#clearBtn").on("click", function () {
    $("#searchInput").val("");
    filterCourses();
    $("#searchInput").focus();
  });

  filterCourses(); // show the starting count on page load
});