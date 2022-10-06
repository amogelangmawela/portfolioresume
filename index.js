// Toggling through tabs in the About page
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  // Toggle between hiding the contents of the skills and education tabs
  // Hide the contents of the actively-clicked tab (inclding hiding the hover underline underneath)
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  // Now display the hover underline underneath the clicked (active)-tab
  event.currentTarget.classList.add("active-link");
  // Now finally display the contents of the active (clicked)-tab
  document.getElementById(tabName).classList.add("active-tab");
}

// Updating the year on the footer (Yearly)
const year = new Date();
let currentYear = year.getFullYear();

// Fixing the nav-bar for the small screens
let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}
