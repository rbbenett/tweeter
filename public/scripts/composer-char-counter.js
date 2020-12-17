$(document).ready(function() {
  const textArea = ".new-tweet textarea";
  const updateCharCount = function() {
    let remainingChar = 140 - $(this).val().length;
    $(this).siblings("output").text(remainingChar);
    if (remainingChar < 140 && remainingChar >= 0) {
      $("#empty-alert").slideUp("fast");
    }
    if (remainingChar < 0) {
      $(this).siblings("output").addClass("negChars");
      $("#length-alert").slideDown("fast");
    } else {
      $(this).siblings("output").removeClass("negChars");
      $("#length-alert").slideUp("fast");
    }
  };

  $(textArea).keyup(updateCharCount);
  $(textArea).change(updateCharCount);
});
