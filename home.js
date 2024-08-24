window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 5) {
        if (!header.classList.contains('black-bg')) {
            console.log('Adding black-bg class');
        }
        header.classList.add('black-bg');
    } else {
        if (header.classList.contains('black-bg')) {
            console.log('Removing black-bg class');
        }
        header.classList.remove('black-bg');
    }
});


// script.js for thee dots
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const moreNav = document.querySelector('.more-nav');
    
    menuToggle.addEventListener('click', function() {
        moreNav.classList.toggle('show');
    });

    });

    function hideSideBar() {
        const sideBar = document.querySlector('.sidebar');
        sideBar.style.display = 'none';
    }
    

