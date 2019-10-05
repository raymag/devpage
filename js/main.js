let toggleMenuBurguer = () => {
    let navbarLinks = document.querySelector('#navbar-links');
    let menuBurguer = document.querySelector('#menu-burguer');
    navbarLinks.classList.toggle('menu-active');
    menuBurguer.classList.toggle('menu-active');
}


document.addEventListener('click', e => {
    let menuBurguer = document.querySelector('#menu-burguer');
    let navbarLinks = document.querySelector('#navbar-links');
    let target = e.target;
    if (target == menuBurguer
        || target == menuBurguer.children[0]
        || target == menuBurguer.children[1]
        || target == menuBurguer.children[2]) {
        toggleMenuBurguer();
    } else {
        let clickIsOutside = true;
        if (target == navbarLinks) {
            clickIsOutside = false;
        } else {

            for (let i = 0; i < navbarLinks.children.length; i++) {
                if (target == navbarLinks.children[i]
                    || target == navbarLinks.children[i].children[0]) {
                    clickIsOutside = false;
                }
            }
        }
        if(clickIsOutside){
            navbarLinks.classList.remove('menu-active');
            menuBurguer.classList.remove('menu-active');
        }
    }
});