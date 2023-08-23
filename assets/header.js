// Open Menu
let menuBar_icon = document.querySelector('.menu-bar');
let navMiddle = document.querySelector("nav .nav-middle");
let navRight = document.querySelector("nav .nav-right");
menuBar_icon.addEventListener("click", () => {
    navMiddle.classList.toggle("nav-show");
    navRight.classList.toggle("nav-show");
    menuBar_icon.classList.toggle("menu-bar-open")
})

// Open Dropdown
let dropdownRight_icon = document.querySelectorAll(".dropdown-close");
let dropdown = document.querySelectorAll(".dropdown");
let dropdown_svg = document.querySelectorAll(".dropdown-close svg")
for (let i = 0; i < dropdownRight_icon.length; i++) {
    dropdownRight_icon[i].addEventListener("click", () => {
        // dropdownRight_icon[i].classList.add("dropdown-icon-open");

        if (!dropdown[i].classList.contains("dropdown-open")) {
            let j;
            for (j = 0; j < dropdown.length; j++) {
                dropdown[j].classList.remove("dropdown-open");
                dropdown_svg[j].style.transform = "rotate(0deg)";
            }
        }

        let dropdownIcon_open = dropdown[i].classList.contains("dropdown-open");

        if (dropdownIcon_open == true) {
            dropdown_svg[i].style.transform = "rotate(0deg)";
        } else {
            dropdown_svg[i].style.transform = "rotate(90deg)";
        }
        dropdown[i].classList.toggle("dropdown-open");
    });
}

