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

//const header = document.getElementById("header");

let screenWidth;

window.onLoad = function(){
    // Теперь мы знаем актуальную ширину экрана
    let screenWidth = parseInt(window.getComputedStyle(document.screen, null)
        .getPropertyValue('width'), 10);

    menuSwitch();

    window.resize = function () {
        // Обновляем ширину экрана
        screenWidth = parseInt(window.getComputedStyle(document.screen, null)
            .getPropertyValue('width'), 10);
        menuSwitch();
    };
};

function menuSwitch() {
    if (screenWidth <= 768) {
        nav.classList.toggle("burger__menu");
    } else {
        nav.classList.toggle("header__menu");
    }
}
