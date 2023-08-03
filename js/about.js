

const tl = gsap.timeline()
tl.fromTo('.about-vacancy', {
    x:-300,
    opacity:0,
}, 
{
    x:0,
    opacity:1,
    duration:1.2,
})