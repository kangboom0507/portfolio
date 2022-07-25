$(function(){


    const particle = document.querySelectorAll('.particle');
 gsap.set('.particle', { 
    top:"random(-30,120)%",
    left:"random(-30,120)%",
    filter:"blur(random(-8,10)px",
 })
   
 
 gsap.to('.particle',{
    scrollTrigger:{
        trigger:".particle",
        start:"top bottom",
        end:"top top",
        scrub:5

    },
    y:-100,
 })

 particle.forEach(element =>{
    yVal = element.dataset.y;
    gsap.to(element,{
        scrollTrigger:{
            trigger:element,
            start:"top bottom",
            end:"top top",
            // markers:true,
            scrub:1
    
        },
        y:yVal,
     })
 });
})