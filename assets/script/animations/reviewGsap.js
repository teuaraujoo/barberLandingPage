export function reviewAnimation() {
    
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#review',
            top: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        }
    });

    tl.from('.top-content.review', {

        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: 'expo-out'
    })
        .fromTo('.review-cards',{
            autoAlpha: 0,
            y: 60,
            filter: 'blur(5px)'
        },
        {   
            y: 0,
            autoAlpha: 1,
            stagger: 0.35,
            duration: 0.8,
            filter: 'blur(0px)',
            ease: 'power2.out'
        },
    
            '-=0.3');
}