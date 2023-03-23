const navTrigger = document.querySelector(".nav-trigger");
const navListBanner = document.querySelector(".navList-banner");

// Close menu on click or touch outside of menu
function closeNav(event) {
  const hamburgerIcon = document.querySelector(".hamburger-icon_mobile");

  if (
    event.type === "click" &&
    event.target != navTrigger &&
    event.target != hamburgerIcon &&
    !hamburgerIcon.contains(event.target) &&
    !navListBanner.contains(event.target)
  ) {
    navTrigger.checked = false;
  }
}

document.addEventListener("click", closeNav);

// Handle touch events on the hamburger icon
function handleHamburgerTouch(event) {
  if (event.type === "touchend") {
    event.preventDefault();
    navTrigger.click();
  } else if (event.type === "touchmove") {
    event.preventDefault();
  }
}

const hamburgerIcon = document.querySelector(".hamburger-icon_mobile");
hamburgerIcon.addEventListener("touchstart", handleHamburgerTouch);
hamburgerIcon.addEventListener("touchmove", handleHamburgerTouch);
hamburgerIcon.addEventListener("touchend", handleHamburgerTouch);
