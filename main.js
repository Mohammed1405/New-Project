// Get a reference to the scroll-up button element
const scrollUpButton = document.getElementById('scrollUpBtn');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener to show/hide the scroll-up button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    // If the user has scrolled down a certain amount, show the button
    scrollUpButton.style.display = 'block';
  } else {
    // If the user is at the top of the page, hide the button
    scrollUpButton.style.display = 'none';
  }
});



// scroll down
// Get a reference to the scroll-down arrow element
const scrollDownArrow = document.getElementById('scrollDownArrow');

// Function to scroll to the next section
function scrollToNextSection() {
  // Replace 'section2' with the ID of the section you want to scroll to
  const nextSection = document.getElementById('section2');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

// Add a click event listener to the scroll-down arrow
scrollDownArrow.addEventListener('click', scrollToNextSection);

// Add a scroll event listener to hide the arrow when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // If the user has scrolled down 50 pixels or more, hide the arrow
    scrollDownArrow.style.display = 'none';
  } else {
    // If the user is near the top of the page, show the arrow
    scrollDownArrow.style.display = 'block';
  }
});
