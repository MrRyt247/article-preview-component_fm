$(document).ready(() => {
  // Displays tooltip
  $("#share").on("click", () => {
    $(".tooltip").css("opacity", 1);
    if ($(window).width() < 715) {
      $(".contact").css("backgroundColor", "var(--veryDarkGrayishBlue)");
    }
  });
  // Hides tooltip
  $(document).on("click", (e) => {
    if (!$(e.target).closest("#share").length) {
      $(".tooltip").css("opacity", 0);
      if ($(window).width() < 715) {
        $(".contact").css("backgroundColor", "initial");
      }
    }
  });
});
