
export function loader() {

    let preloader = document.querySelector(".preloader");

    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        document.body.style.overflowY = 'visible';
    }, 1480)

    setTimeout(() => {
        preloader.classList.add("loaded");
    }, 1800);
};