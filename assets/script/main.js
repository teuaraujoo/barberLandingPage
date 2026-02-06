import { loader } from './animations/loader.js';
import { homeAnimate } from './animations/homeAnimate.js';
import { servicesAnimate } from './animations/servicesGsap.js';
import { menuHamburguer } from './animations/menu.js';


document.addEventListener('DOMContentLoaded', () => {
    
    loader();
    homeAnimate();
    servicesAnimate();
    menuHamburguer();
});
