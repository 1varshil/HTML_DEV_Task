// script.js
$(document).ready(function() {
  $('#modeToggle').on('click', function() {
    $('body').toggleClass('dark-mode light-mode');

    // Button text change based on mode
    if ($('body').hasClass('dark-mode')) {
      $('#modeToggle').text('Switch to Light Mode');
    } else {
      $('#modeToggle').text('Switch to Dark Mode');
    }
  });
});
    