// Q2. Product Highlight (jQuery)

$(document).ready(function () {
  // 4. Attribute selector: select products that have data-discount="true"
  // and give them a different style (the .discounted class)
  $(".product[data-discount='true']").addClass("discounted");

  // 1 + 5. Click on a product: highlight it, or alert if it is out of stock
  $(".product").on("click", function () {
    // .data("stock") reads the data-stock attribute (jQuery converts "0" to the number 0)
    if ($(this).data("stock") === 0) {
      alert("Sorry, " + $(this).find("h3").text() + " is out of stock!");
      return; // do not highlight an out of stock product
    }

    // Highlight the clicked product and remove the highlight from the others
    $(this).addClass("highlight").siblings(".product").removeClass("highlight");
  });

  // 2. Hover over a product: show/hide the additional details
  // .hover(mouseEnterFunction, mouseLeaveFunction)
  $(".product").hover(
    function () {
      $(this).find(".details").stop(true, true).slideDown(200);
    },
    function () {
      $(this).find(".details").stop(true, true).slideUp(200);
    }
  );

  // 3. Favorite icon: toggle the "selected" class (adds it if missing, removes it if present)
  $(".favorite").on("click", function (event) {
    // Stop the click from bubbling up to the product (which would highlight it)
    event.stopPropagation();
    $(this).toggleClass("selected");
  });
});