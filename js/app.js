// Navigation mobile menu
const navmenu = document.getElementById('nav_menu');
const closebtn = document.getElementById('close_btn');
const mobmenu = document.getElementById('mob_menu');
const navitem = document.querySelectorAll('.nav_item');

mobmenu.addEventListener('click', () => {
    navmenu.classList.remove('hidden');
});
closebtn.addEventListener('click', () => {
    navmenu.classList.add('hidden');
});

navitem.forEach((item) => {
    item.addEventListener('click', () => {
        navmenu.classList.add('hidden');
    })
})