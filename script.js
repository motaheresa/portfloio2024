const header_bars_icon = document.querySelector(".header-bars-icon .fa-bars")
const header_close_icon = document.querySelector(".header-bars-icon .fa-xmark")
const header_menu = document.querySelector(".header-menu")
header_bars_icon.addEventListener("click", () => {
    header_bars_icon.classList.add("hidden")
    header_close_icon.classList.remove("hidden")
    header_menu.classList.add("active")
})

header_close_icon.addEventListener("click", () => {
    header_close_icon.classList.add("hidden")
    header_bars_icon.classList.remove("hidden")
    header_menu.classList.remove("active")
})











// setTimeout(() => {
//     document.querySelector(".intro").classList.add("hidden")
//     document.querySelector(".site").classList.remove("hidden")
// }, 4000)

