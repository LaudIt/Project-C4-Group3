// Select all required elements
const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")
const backdrop = document.getElementById("backdrop")
const mobileMenu = document.getElementById("mobile-menu")

// Listen for menu button click
menuBtn?.addEventListener("click", handleMenuOpen)

// Listen for backdrop and close btn click
backdrop?.addEventListener("click", handleMenuClose)
closeBtn?.addEventListener("click", handleMenuClose)

function handleMenuOpen() {
    // Open the backdrop
    backdrop.classList.remove("close-backdrop")
    backdrop.classList.add("open-backdrop")

    // Open the menu
    mobileMenu.classList.remove("close-menu")
    mobileMenu.classList.add("open-menu")
}

function handleMenuClose() {
    // Close the backdrop
    backdrop.classList.remove("open-backdrop")
    backdrop.classList.add("close-backdrop")

    // Close the menu
    mobileMenu.classList.add("close-menu")
    mobileMenu.classList.remove("open-menu")
}