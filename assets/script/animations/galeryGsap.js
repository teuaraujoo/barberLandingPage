export function galeryAnimation() {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: '#galery',
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none nmone'
        }
    });

    tl.from('.title-container.galery', {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: 'expo-out'
    })
        .fromTo( '.parent',{
            autoAlpha: 0,
            x: -60
        },
        {
            autoAlpha: 1,
            x: 0,
            stragger: 0.35,
            duration: 0.6,
            ease: 'sine-out'
        },
            '-=0.3');
};