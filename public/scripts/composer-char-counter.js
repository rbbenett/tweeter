$(document).ready(function() {
  const textArea = ".new-tweet textarea";
  $(textArea).keypress("change", function() {
    console.log(this)
  })
});
