

const tl = gsap.timeline()
tl.fromTo('.about-vacancy', {
    x:-300,
    opacity:0,
}, 
{
    x:0,
    opacity:1,
    duration:1.2,
}).fromTo('.about-name', {
    y:50,
    opacity:0,
},
{
    y:0,
    opacity:1,
    duration:1.2,
},0.8,
).fromTo('.main__btn', {
    y:50,
    opacity:0,
}, {
    y:0,
    opacity:1,
    duration:1.2,
}).fromTo('.navbar-nav li', {
    y:50,
    opacity:0,
    
}, {
    y:0,
    opacity:1,
    duration:1.2,
    stagger:0.2,
},1,)