document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.containerHeader nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);
    });
});

function handleMouseEnter() {
    const links = document.querySelectorAll('.containerHeader nav ul li a');
    const currentLink = this;

    links.forEach(otherLink => {
        if (otherLink !== currentLink) {
            otherLink.style.color = 'lightgray';
        }
    });
}

function handleMouseLeave() {
    const links = document.querySelectorAll('.containerHeader nav ul li a');

    links.forEach(otherLink => {
        otherLink.style.color = 'black';
    });
}

function toggleDropdown(detailsId, iconId) {
    const dropdownContent = document.getElementById(detailsId);
    const icon = document.getElementById(iconId);
    
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        icon.innerHTML = '+'; 
    } else {
        dropdownContent.style.display = "block";
        icon.innerHTML = '-'; 
    }
}

function showBuyLink() {
    buyLink.style.display = "block";
}
function hideBuyLink() {
    buyLink.style.display = "none";
}
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        showBuyLink();
    } else {
        hideBuyLink();
    }
    lastScrollTop = scrollTop;
});
