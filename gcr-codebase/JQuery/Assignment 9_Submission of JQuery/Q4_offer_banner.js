// Q4. Special Offer Banner (jQuery)

$(document).ready(function () {
  // Returns the banner(s) chosen in the dropdown (one banner or all of them)
  function getTargetBanners() {
    const choice = $("#bannerTarget").val();
    if (choice === "all") {
      return $(".banner");
    }
    // .eq(index) selects one element by its position (0 = first)
    return $(".banner").eq(Number(choice));
  }

  // 1. Hide button: hides instantly
  $("#hideBtn").on("click", function () {
    getTargetBanners().hide();
  });

  // 2. Show button: shows hidden banners
  $("#showBtn").on("click", function () {
    getTargetBanners().show();
  });

  // 3. Slide Up / Slide Down: animate the height
  $("#slideUpBtn").on("click", function () {
    getTargetBanners().slideUp(400);
  });
  $("#slideDownBtn").on("click", function () {
    getTargetBanners().slideDown(400);
  });

  // 4. Fade Out / Fade In: animate the opacity gradually
  $("#fadeOutBtn").on("click", function () {
    getTargetBanners().fadeOut(600);
  });
  $("#fadeInBtn").on("click", function () {
    getTargetBanners().fadeIn(600);
  });

  // 5. Automatic rotation every 5 seconds using .fadeOut() and .fadeIn()
  const $slides = $("#rotator .slide");
  let current = 0;

  $slides.hide().eq(current).show(); // only the first slide is visible at the start

  setInterval(function () {
    // Fade out the current slide, and when it has finished (callback), fade in the next one
    $slides.eq(current).fadeOut(400, function () {
      current = (current + 1) % $slides.length; // loop back to the first slide
      $slides.eq(current).fadeIn(400);
    });
  }, 5000);
});