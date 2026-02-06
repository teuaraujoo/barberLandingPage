export function menuHamburguer() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks  = document.querySelectorAll('.navbar li > a');

    if (!hamburger || !navbar) return;

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(ancora => {
        ancora.addEventListener("click", () => {
            navbar.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}