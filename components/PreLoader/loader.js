import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = () => {
    tl.to('.texts-container', {
        duration: 0,
        opacity: 1,
        ease: 'power3.out'
    }).from('.texts-container span', {
        duration: 1.5,
        ease: 'power3.out',
        delay: 1,
        y: 70,
        skewY: 10,
        stagger: 0.4,
    }).to('.texts-container span', {
        duration: 1,
        ease: 'power3.out',
        y: 70,
        skewY: -20,
        stagger: 0.1,
    }).to('body', {
        duration: 0.01,
        css: {
            overflowY: 'scroll'
        },
        ease: 'power3.out',

    }).from('.sub', {
        duration: 1,
        opacity: 0,
        y: 80,
        ease: 'power3.out',

    }).to('.preloader', {
        duration: 1.5,
        height: '0vh',
        ease: 'power3.out',
        onComplete: mobileLoaderAnim(),
    }, '-=2').to(
        '.preloader', {
        duration: 0,
        css: {
            display: 'none'
        },
    }
    );
}

export const mobileLoaderAnim = () => {
    window.innerWidth < 763 && tl.from(
        '.landing__main2', {
        ease: 'power3.out',
        y: 80,
        delay: 0,
        opacity: 0,
        duration: 1,
    }
    )
}