window.onscroll = function() {
    checkMarginToTop();
};

const nav = document.getElementById("nav");
const menuLink = document.querySelectorAll(".menu__link");

const sticky = nav.offsetTop;

function checkMarginToTop() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        menuLink.forEach((el) => {
            el.classList.add("menu__link-white");
        })
    } else {
        nav.classList.remove("sticky");
        menuLink.forEach((el) => {
            el.classList.remove("menu__link-white");
        })
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const mobileMenuLinks = document.querySelectorAll.bind("mobile-menu__link");

    mobileMenuLinks("mobile-menu ul").onclick('click', () => {
        mobileMenuLinks("mobile-menu ul").forEach(el => el.classList.toggle("noshow"));
    })
});