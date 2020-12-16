$(document).ready(function() {
  const textArea = ".new-tweet textarea";
  const updateCharCount = function() {
    let remainingChar = 140 - $(this).val().length;
    $(this).siblings("output").text(remainingChar);
    if (remainingChar < 0) {
      $(this).siblings("output").addClass("negChars");
      window.alert("TOO MANY CHARACTERS!")
    } else {
      $(this).siblings("output").removeClass("negChars");
    }
  }

  $(textArea).keyup(updateCharCount);
  $(textArea).change(updateCharCount);
  });
