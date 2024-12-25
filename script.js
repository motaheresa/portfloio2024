const header_bars_icon = document.querySelector(".header-bars-icon")
const header_menu = document.querySelector(".header-menu")
header_bars_icon.addEventListener("click", () => {
    if (!header_bars_icon.className.includes("active")) {
        header_bars_icon.classList.add("active")
        header_menu.classList.add("active")
    } else {
        header_bars_icon.classList.remove("active")
        header_menu.classList.remove("active")
    }


})











// setTimeout(() => {
//     document.querySelector(".intro").classList.add("hidden")
//     document.querySelector(".site").classList.remove("hidden")
// }, 4000)

