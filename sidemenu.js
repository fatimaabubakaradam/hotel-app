// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.getElementById('menuToggle');
//     const closeMenu = document.getElementById('myCloseMenu');
//     const navMenu = document.getElementById('navMenu');

//     console.log(menuToggle, closeMenu, navMenu);

//     if (menuToggle && navMenu && closeMenu) {
        
//         menuToggle.addEventListener('click', () => {
//             console.log('Menu opened'); 
//             navMenu.classList.add('active'); 
//         });
//     }

    
//         closeMenu.addEventListener('click', () => {
//             console.log('Menu closed'); 
//             navMenu.classList.remove('active');
//         });

  
// });


    // const menuToggle = document.getElementById('menuToggle');
    // // const closeMenu = document.getElementById('myCloseMenu');

    // menuToggle.addEventListener('click', () => {
    //     console.log('Menu opened'); 
    // });



    // console.log(closeMenu)
    // closeMenu.addEventListener('click', () => {
    //     console.log('Menu closed'); 
    //     navMenu.classList.add('remove');
    // });
    // const myCloseMenu = document.getElementById('menuClose')
    const closeMenu = () => {
        console.log('Hi')
        navMenu.classList.remove('active'); 
    };


    const navMenu = document.getElementById('navMenu');
    const openMenu = () => {
        console.log("Hello")
        navMenu.classList.add('active'); 
    }

