// Q5. Team Members Directory (jQuery traversal methods)

$(document).ready(function () {
  // 1. Click a manager: highlight all of that manager's direct reports
  $(".manager").on("click", function () {
    const managerId = $(this).data("id"); // reads data-id
    $(".employee").removeClass("report"); // clear old highlights

    // Attribute selector: find employees whose data-manager equals this manager's id
    $(".employee[data-manager='" + managerId + "']").addClass("report");
  });

  // 2. Hover on an employee name: show the contact info
  // .next() selects the element right after the name (the .contact span)
  $(".name").hover(
    function () {
      $(this).next(".contact").stop(true, true).fadeIn(150);
    },
    function () {
      $(this).next(".contact").stop(true, true).fadeOut(150);
    }
  );

  // 3. Click on a department name: change the background of all its members
  // .siblings(".members") finds the list next to the heading,
  // .children() selects every <li> inside that list
  $(".dept-name").on("click", function () {
    const $members = $(this).siblings(".members").children();
    const isColored = $(this).data("colored") === true;

    if (isColored) {
      $members.css("background-color", ""); // back to normal
    } else {
      $members.css("background-color", "#e1bee7");
    }
    $(this).data("colored", !isColored); // remember the state
  });

  // 4. Select a random employee and highlight the siblings (same list)
  $("#randomBtn").on("click", function () {
    $(".employee").removeClass("picked sibling-highlight");

    const $all = $(".employee");
    const randomIndex = Math.floor(Math.random() * $all.length);
    const $picked = $all.eq(randomIndex);

    $picked.addClass("picked");
    $picked.siblings().addClass("sibling-highlight"); // .siblings() = other items in the same <ul>
  });

  // 5. Collapse / expand a team
  // .parent() goes up from the button to the department, .find() goes down to its member list
  $(".toggle-team").on("click", function () {
    $(this).parent().find(".members").slideToggle(200);
    $(this).text($(this).text() === "Collapse Team" ? "Expand Team" : "Collapse Team");
  });
});