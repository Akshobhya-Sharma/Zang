const navLinks = document.querySelectorAll('.side-nav-link');

let previouslyClickedNavLink = document.querySelector('#nav-link-home');

function toggleNavbarActive(element) {
  if(previouslyClickedNavLink) {
    previouslyClickedNavLink.classList.remove('active-side-nav')
  }
  previouslyClickedNavLink = element;
  element.classList.add('active-side-nav');
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}