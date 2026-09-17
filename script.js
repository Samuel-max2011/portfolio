const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
