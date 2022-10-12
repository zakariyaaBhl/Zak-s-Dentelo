'use strict';

/**
 *   -------------------------------------------- ## Variables --------------------------------------------
 */
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top]');

const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const navbarToggler = document.querySelectorAll('[data-nav-toggler]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');






/**
 *  ## navbar toggle
 */

const navToggle = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
};
addEventOnElem(navbarToggler, 'click', navToggle);

const closeNavbar = function () {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
};
addEventOnElem(navbarLinks, 'click', closeNavbar);



/**
 *  ## Header Active on Scroll Event
 */
window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 100) {
        header.classList.add('active');
        backTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        backTopBtn.classList.remove('active');
    }
});


/**
 *  --------------------------------------------- ## Usefull Functions --------------------------------------------
 */

/**
 * ## AddEvent on element
 */

function addEventOnElem (elem, type, callback){
    if(elem.length > 1) {
        elem.forEach(item => {
            item.addEventListener(type, callback);
        });
    } else {
        elem.addEventListener(type, callback);
    }
}

