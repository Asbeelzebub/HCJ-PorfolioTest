function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".sandwich-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  // You can also save the user's preference in localStorage for persistence
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Check for the user's preference in localStorage (if available)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  toggleDarkMode();
}

// Add a click event listener to a button or any element to toggle the theme
const themeToggleBtn = document.getElementById("toggle-theme");
themeToggleBtn.addEventListener("click", toggleDarkMode);
