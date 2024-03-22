document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.containerHeader nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            links.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.style.color = 'lightgray';
                }
            });
        });

        link.addEventListener('mouseleave', function() {
            links.forEach(otherLink => {
                otherLink.style.color = 'black';
            });
        });
    });
});