// animation-btn
let btn_hamburger = document.getElementById('btn_hamburger');
var slider = document.getElementById('slider');
btn_hamburger.addEventListener('click', (function(event) {
    line_menu = this.children[0];
    for (var i = 0; i <= line_menu.children.length - 1; i++) {
        line_menu.children[i].classList.toggle("navbar__toggler-icon-active");
    }
    slider.classList.toggle("lista__slider");
}));
// btn_hamburger-btn-iniciado
var btn_hamburgerli = document.getElementsByClassName('btn_hamburgerli');
var lines = document.getElementsByClassName('navbar__toggler-icon-line');
for (var i = 0; i <= btn_hamburgerli.length - 1; i++) {
    btn_hamburgerli[i].addEventListener('click', (function(event) {
        for (var i = 0; i <= lines.length - 1; i++) {
            lines[i].classList.toggle("navbar__toggler-icon-active");
        }
    }));
}
//acordion
var link = document.getElementsByClassName('lista__link');
for (var i = 0; i <= link.length - 1; i++) {
    //agregar y salir del boton (agregar)
    link[i].addEventListener('click', (function(event) {
        this.nextElementSibling.classList.toggle("lista__acordion");
        this.classList.toggle("lista__active");
    }));
};