import { loader } from './animations/loader.js';
import { homeAnimate } from './animations/homeAnimate.js';
import { servicesAnimate } from './animations/servicesGsap.js';
import { menuHamburguer } from './animations/menu.js';
import { aboutAnimation } from './animations/aboutGsap.js';
import { galeryAnimation } from './animations/galeryGsap.js';
import { reviewAnimation } from './animations/reviewGsap.js';
import { contactAnimation } from './animations/contactGsap.js';

document.addEventListener('DOMContentLoaded', () => {

    loader();
    menuHamburguer();
    homeAnimate();
    servicesAnimate();
    aboutAnimation();
    galeryAnimation();
    reviewAnimation();
    contactAnimation();
});