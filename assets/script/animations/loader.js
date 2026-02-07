
export function loader() {

    let preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("loaded");
    }, 1800);
};