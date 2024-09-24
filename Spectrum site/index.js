
window.addEventListener("scroll", function () {
const header = document.getElementsByTagName("header")[0];
    if(window.scrollY > 50) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
});