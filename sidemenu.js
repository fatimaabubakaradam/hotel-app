const navMenu = document.getElementById('navMenu');

const openMenu = () => {
    console.log("Hello");
    navMenu.classList.add('open');  
}

const closeMenu = () => {
    console.log("Hi");
    navMenu.classList.remove('open');  
}
