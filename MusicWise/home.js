
gsap.to(
    ".nonvisible",
    {
        ease:"none",
        duration:0.5,
        opacity:1,
        rotateX:"0deg",
        scrollTrigger:{
            trigger:".navbar",
            
            start:"500% center",
            scrub:true,
        }
    }
)
gsap.to(
    ".pricebox",
    {
  y: '-20px',
  opacity:1,
  stagger:0.2,
  scrollTrigger:
  {
     trigger:".pricehead",
     
     start:"top center",
     
     end:"bottom 30%",
     toggleActions: "play none none reset",
  }
    } 
)
gsap.to(
    ".megabox",
    {
        opacity:1,
        stagger:0.2,
        scrollTrigger:
        { 
            trigger:".crouselsubheadbig",
            
            start:"top 20%",
            end:"top 20%",
            toggleActions: "play none none reset",
        }
    }
)