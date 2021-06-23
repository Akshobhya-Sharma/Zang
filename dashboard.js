const navLinks = document.querySelectorAll('.side-nav-link');

let previouslyClickedNavLink = document.querySelector('#nav-link-home');

function toggleNavbarActive(element) {
  if(previouslyClickedNavLink) {
    previouslyClickedNavLink.classList.remove('active-side-nav')
  }
  previouslyClickedNavLink = element;
  element.classList.add('active-side-nav');
}
