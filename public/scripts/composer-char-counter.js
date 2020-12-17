$(document).ready(function() {
  const textArea = ".new-tweet textarea";
  const updateCharCount = function() {
    let remainingChar = 140 - $(this).val().length;
    $(this).siblings(".tweet-footer").children("output").text(remainingChar);
    if (remainingChar < 140 && remainingChar >= 0) {
      $("#empty-alert").slideUp("fast");
    }
    if (remainingChar < 0) {
      $(this).siblings(".tweet-footer").children("output").addClass("negChars");
      $("#length-alert").slideDown("fast");
    } else {
      $(this).siblings(".tweet-footer").children("output").removeClass("negChars");
      $("#length-alert").slideUp("fast");
    }
  };

  $(textArea).keyup(updateCharCount);
  $(textArea).change(updateCharCount);
});
