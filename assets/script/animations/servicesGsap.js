// GSAP pode animar qualquer propriedade css

export function servicesAnimate() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#services',
            start: 'top 80%',
            end: 'bottom, 10%',
            toggleActions: 'play none none none'
        }
    });

    tl.from('#services > .top-content', {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: 'expo.out'
    })
        .fromTo('.services-card', {
            autoAlpha: 0, //opacity : 0 and visible: hidden
            x: -60,
        },
        {
            x: 0,
            autoAlpha: 1,
            stagger: 0.25, //animações escalonadas ->  em degrau: delay de 0.25s para cada item
            duration: 0.8,
            clearProps: 'transform',
            ease: 'power2.out'
        },
            '-=0.4')
};

// toggle actions -> Determina como a animação vinculada é controlada nos 4 pontos de alternância distintos: onEnter , onLeave , onEnterBack e onLeaveBack , nessa ordem. O padrão é . Portanto, a animação será reproduzida ao entrar, pausada ao sair, retomada ao entrar novamente e reiniciada (retrocedendo ao início) ao rolar completamente para trás, passando do início