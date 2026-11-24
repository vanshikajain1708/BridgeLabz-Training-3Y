// Q3. Interactive FAQ (jQuery)

$(document).ready(function () {
  // 1. Click on a question: toggle its answer
  // .next() selects the element right after the question (the .answer div)
  // .slideToggle() slides it open if closed, and closed if open
  $(".question").on("click", function () {
    $(this).next(".answer").slideToggle(200);
  });

  // 2. Hover over a question: change its colour
  $(".question").hover(
    function () {
      $(this).css("color", "#d35400"); // mouse enters
    },
    function () {
      $(this).css("color", ""); // mouse leaves: remove the inline colour
    }
  );

  // 3. Double-click on a question: collapse ALL answers
  // .stop(true, true) finishes running animations first so the answers close properly
  $(".question").on("dblclick", function () {
    $(".answer").stop(true, true).slideUp(200);
  });

  // 4. Focus on an answer input: highlight the parent question
  // .closest(".faq-item") goes up to the nearest FAQ item, .find() goes back down to its question
  $(".answer-input").on("focus", function () {
    $(this).closest(".faq-item").find(".question").css("background-color", "#fff3cd");
  });

  // 5. Blur (leaving the input): reset the background colour
  $(".answer-input").on("blur", function () {
    $(this).closest(".faq-item").find(".question").css("background-color", "");
  });
});