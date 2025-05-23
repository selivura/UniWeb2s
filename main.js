const closeMenuBtn = document.querySelector('.button__close_menu');
const menuBtn = document.querySelector('.button__menu');
const menu = document.querySelector('.mobile-nav__menu');
const overlay = document.querySelector('.mobile-nav__overlay');

menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => closeMenu());

closeMenuBtn.addEventListener('click', () => closeMenu());

function closeMenu()
{
    menu.classList.remove('active');
    overlay.classList.remove('active');

}