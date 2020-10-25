window.onscroll = function() {
    checkMarginToTop();
};

const nav = document.getElementById("nav");
const menuLink = document.getElementsByClassName("menu__link");

const sticky = nav.offsetTop;

function checkMarginToTop() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        menuLink.classList.add("menu__link-white");
    } else {
        nav.classList.remove("sticky");
        menuLink.classList.remove("menu__link-white");
    }
}

const header = document.getElementById("header");

window.load = function(){
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
    if (screenWidth <= 480) {
        header.classList.toggle("burger__menu");
    } else {
        header.classList.toggle("header__menu");
    }
}
