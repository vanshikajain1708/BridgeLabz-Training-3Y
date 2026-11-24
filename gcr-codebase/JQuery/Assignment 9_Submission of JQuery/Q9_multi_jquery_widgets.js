// Q9. Multi-jQuery Widgets (two jQuery versions on one page)

// The HTML loads two versions of jQuery.
// jQuery.noConflict(true) gives the library back its global names ($ and jQuery)
// and returns the jQuery object, so each version is stored in its own variable:
//   $v1 = jQuery 1.12.4
//   $v2 = jQuery 3.7.1
// Because no version owns the global "$", both can work at the same time.

// ================= Version 1 widgets: carousel + active widget highlight =================
(function ($) {
  $(document).ready(function () {
    const $slides = $("#carousel .slide");
    let current = 0;

    $slides.hide().eq(current).show(); // show only the first slide

    function showSlide(index) {
      current = (index + $slides.length) % $slides.length; // wrap around at both ends
      $slides.stop(true, true).hide().eq(current).fadeIn(300);
    }

    // 1. Carousel: rotate automatically every 3 seconds
    setInterval(function () {
      showSlide(current + 1);
    }, 3000);

    $("#nextSlide").on("click", function () {
      showSlide(current + 1);
    });
    $("#prevSlide").on("click", function () {
      showSlide(current - 1);
    });

    // 3. Highlight the active widget (the one the mouse is over or the user clicked)
    $(".widget").on("mouseenter click", function () {
      $(this).addClass("active-widget").siblings(".widget").removeClass("active-widget");
    });

    // Show which version is running this part
    $("#versions").append("Carousel and highlight use jQuery " + $.fn.jquery + ". ");
  });
})($v1);

// ================= Version 2 widgets: modal popup + tooltips =================
(function ($) {
  $(document).ready(function () {
    // 2. Modal popup for notifications
    $("#openModal").on("click", function () {
      $("#modalOverlay").css("display", "flex").hide().fadeIn(200);
    });

    $("#closeModal").on("click", function () {
      $("#modalOverlay").fadeOut(200);
    });

    // Clicking the dark background (outside the box) also closes the modal
    $("#modalOverlay").on("click", function (event) {
      if (event.target === this) {
        $(this).fadeOut(200);
      }
    });

    // 4. Tooltips on hover: any element with a data-tooltip attribute
    $("[data-tooltip]").on("mouseenter", function () {
      const text = $(this).data("tooltip");
      const position = $(this).offset();

      $("<div class='tooltip'></div>")
        .text(text)
        .css({ top: position.top + $(this).outerHeight() + 6, left: position.left })
        .appendTo("body");
    });

    $("[data-tooltip]").on("mouseleave", function () {
      $(".tooltip").remove();
    });

    // Show which version is running this part
    $("#versions").append("Modal and tooltips use jQuery " + $.fn.jquery + ".");
  });
})($v2);