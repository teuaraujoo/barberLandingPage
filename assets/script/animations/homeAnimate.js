export function homeAnimate() {

    const h1 = document.querySelector('.home-content h1');
    const navbar = document.querySelector('header');
    const p = document.querySelector('.home-content p');
    const buttons =  document.querySelector('.home-buttons')

    setTimeout(() => {
        anime({
            targets: h1,
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1500,
        });
        anime({
            targets: navbar,
            opacity: [0, 1],
            translateY: ['-1.6em', 0],
            duration: 1500 
        })
        anime({
            targets: p,
            opacity: [0, 1],
            translateX: ['-1.6em', 0],
            duration: 1200
        })
        anime({
            targets: buttons,
            opacity: [0, 1],
            translateX: ['-1.6em', 0],
            duration: 1200
        })
    }, 1330 /* 1530 */)
}
