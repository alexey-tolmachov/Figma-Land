const mobileNav = document.querySelector(".mobilemenu");
const menuIcon = document.querySelector(".mobilebutton");
const mobileMenuItems = document.querySelectorAll(".mobilemenu .menu-items li");
menuIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
})
mobileMenuItems.forEach(i => {
    i.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    })
})