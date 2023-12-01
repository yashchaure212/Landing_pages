var tl = gsap.timeline();

tl 
    .from(".circle-2",{
        opacity: 0,
        y: 30,
        duration: 2 
    })
    

gsap.from(".circle-3",{
    opacity:0,
    y: -30,
    duration: 2
})
gsap.from(".circle",{
    opacity:0,
    y: -30,
    x: 120,
    duration: 2
})
gsap.from(".img-mid",{
    y: -2000,
    rotate : 180,
    duration: 2
})
gsap.from(".end-cont h3 ",{
    opacity: 0,
    y: 500,
    duration: 2
})
gsap.from(".end-cont h4 ",{
    opacity: 0,
    y: 500,
    duration: 2
})
gsap.from(".mid-cont h1 ",{
    opacity: 0,
    y: -50,
    duration: 1
})
gsap.from(".nav h4 ",{
    opacity: 0,
    y: 30,
    duration: 1
})