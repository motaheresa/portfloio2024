const header_bars_icon = document.querySelector(".header-bars-icon .fa-bars")
const header_close_icon = document.querySelector(".header-bars-icon .fa-xmark")
const header_menu = document.querySelector(".header-menu")
const headerEle = document.querySelector("header")
const arrowTop = document.querySelector(".arrow-top")
const all_li = document.querySelectorAll(".header-menu li")

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

all_li.forEach(ele => {
    ele.classList.remove("active")
})

all_li.forEach(ele => {
    ele.addEventListener("click", () => {
        header_close_icon.classList.add("hidden")
        header_bars_icon.classList.remove("hidden")
        header_menu.classList.remove("active")
    })
})

const removeActiveLinkHeaderFunc = (num) => {
    all_li.forEach(ele => {
        ele.classList.remove("active")
    })
    all_li[num].classList.add("active")
}
window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        headerEle.classList.add("active")
        arrowTop.classList.add("active")
    } else {
        headerEle.classList.remove("active")
        arrowTop.classList.remove("active")
    }
    if (window.scrollY < 600) {
        removeActiveLinkHeaderFunc(0)
    } else if (window.scrollY >= 600 && window.scrollY < 1150) {
        removeActiveLinkHeaderFunc(1)
    } else if (window.scrollY >= 1150 && window.scrollY < 1980) {
        removeActiveLinkHeaderFunc(2)
    } else if (window.scrollY >= 1980 && window.scrollY < 3190) {
        removeActiveLinkHeaderFunc(3)
    } else if (window.scrollY >= 3190 && window.scrollY < 4230) {
        removeActiveLinkHeaderFunc(4)
    } else if (window.scrollY >= 4230) {
        removeActiveLinkHeaderFunc(5)
    }

})











// setTimeout(() => {
//     document.querySelector(".intro").classList.add("hidden")
//     document.querySelector(".site").classList.remove("hidden")
// }, 4000)

