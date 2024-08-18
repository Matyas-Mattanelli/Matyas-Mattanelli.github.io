// This scripts ensures the smooth transition between the pages on the website
document.addEventListener("DOMContentLoaded", function() {
  // Fade in the current page when it loads
  document.body.classList.add('fade-in');

  // Add event listeners to all links
  document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Apply the fade-out effect
      document.body.classList.remove('fade-in'); // Remove fade-in class if it's there
      document.body.classList.add('fade-out');

      // Wait for the fade-out transition to complete (500ms in this case)
      setTimeout(function() {
        // Navigate to the new page
        window.location.href = link.href;
      }, 500); // Same duration as the CSS transition
    });
  });
});
