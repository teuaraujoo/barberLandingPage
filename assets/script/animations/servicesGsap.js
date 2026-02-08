// GSAP pode animar qualquer propriedade css

export function servicesAnimate() {
    gsap.registerPlugin(ScrollTrigger);

    // Delay do refresh para evitar flashes
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 2100);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#services',
            start: 'top 80%', // quando o topo da seção chega a 80% da altura da tela
            end: 'bottom, 10%', // quando o fim da seção chega a 20% da tela
            toggleActions: 'play none none none'
            // scrub: true -> não acontece tudo de uma vez (automático/fluído), ele acompanha o scroll entre start e end e realiza as animações
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
            filter: "blur(5px)"
        },
        {
            x: 0,
            autoAlpha: 1,
            stagger: 0.25, //animações escalonadas ->  em degrau: delay de 0.25s para cada item
            duration: 0.6,
            filter: "blur(0px)",
            clearProps: 'transform',
            ease: 'power2.out'
        },
            '-=0.4')
};

// toggle actions -> Determina como a animação vinculada é controlada nos 4 pontos de alternância distintos: onEnter , onLeave , onEnterBack e onLeaveBack , nessa ordem. O padrão é . Portanto, a animação será reproduzida ao entrar, pausada ao sair, retomada ao entrar novamente e reiniciada (retrocedendo ao início) ao rolar completamente para trás, passando do início