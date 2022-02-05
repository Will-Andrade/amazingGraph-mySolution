const burguerMenu = document.querySelector('[data-js="menu-btn"]');
const navList = document.querySelector('[data-ja="nav-list"]');

burguerMenu.addEventListener('click', () => {
    burguerMenu.classList.toggle('close');
    navList.classList.toggle('active');
})
