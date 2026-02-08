import { iniciarContadores } from "./contagem.js";

export function aboutAnimation() {

    gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }
    });

    tl.from('.title-container.about', {
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: 'expo-out'
    })
        .from('.about-text', {
            opacity: 0,
            x: 60,
            duration: 0.8,
            ease: 'sine.out'
        }, '-= 0.2')
        .fromTo('.stats', {
            autoAlpha: 0,
            x: 60,
            filter: 'blur(5px)'
        },
        {
            x: 0,
            autoAlpha: 1,
            stagger: 0.25,
            duration: 0.6,
            filter: 'blur(0px)',
            ease: 'power2.out',
        })
        .call(iniciarContadores, [], "<")
}