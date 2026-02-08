import { loader } from './animations/loader.js';
import { homeAnimate } from './animations/homeAnimate.js';
import { servicesAnimate } from './animations/servicesGsap.js';
import { menuHamburguer } from './animations/menu.js';
import { aboutAnimation } from './animations/aboutGsap.js';
// import { iniciarContadores } from './animations/contagem.js';

document.addEventListener('DOMContentLoaded', () => {

    loader();
    menuHamburguer();
    homeAnimate();
    servicesAnimate();
    aboutAnimation();
    // setTimeout(() => { 
    //     iniciarContadores();
    // }, 2000)
});