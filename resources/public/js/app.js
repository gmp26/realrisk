;; This code is part of coast
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener("click", function(e) {
    var el = e.target;
    var confirmMessage = el.getAttribute("data-confirm");

    if(!!confirmMessage) {
      e.preventDefault();

      if(confirmMessage && confirm(confirmMessage)) {
        el.closest('form').submit();
      }
    }
  });
});


//const input = document.querySelector('input');
const input = document.getElementById("paper-title");

function logChange(e) {
  console.log("Change!" + e.srcElement.value);
};

(if input {
  input.addEventListener('change', logChange);
}

