const openMenu = document.querySelector('.humberger')
const menu = document.querySelector('.menu-drop')
const closeButton = document.createElement("img");
const logo = document.querySelector('.logo-img')
 
openMenu.addEventListener('click', () => {
    if (menu.classList.contains("close")) {
        menu.classList.remove("close");
        menu.classList.add("open");
        openMenu.setAttribute("src", "images/close.png");
        logo.setAttribute("src", "images/LogoMenu.png");
        document.getElementById('mainBox').style.backgroundColor = "#F9F0EF";


    }
    else {
        menu.classList.remove("open");
        menu.classList.add("close");
        openMenu.setAttribute("src", "images/humberger.png");
        logo.setAttribute("src", "images/Logo.png");
        document.getElementById('mainBox').style.backgroundColor  = "#E3B2AE";


    }

})