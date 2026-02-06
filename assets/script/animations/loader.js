
export function loader() {

    let preloader = document.querySelector("preloader");

    setTimeout(function () {
        preloader.classList.remove("preloader");
    }, 1800);
}