export function contactAnimation() {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            end: 'bottom 10%',
            toggleActions: 'play none none none'
        }
    });

    tl.from('.top-content.contact', {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: 'expo-out'
    })
        .from('.contact-card', {
            x: -60,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3')
            .from('.contact-map', {
                x: 60,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.2')
                .from('.footer', {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'sine-out'
                }, '-=0.2');
}