
    gsap.to(
        ".crouselpic",
        {
            x: "-80%",
            duration: 150,
            scrollTrigger: {
                trigger: ".whitecontent",
                start: "15% center",
                end: "20% center",
                
            }
        }
    )
    gsap.from(
        ".rightheading",
        {
            opacity:0,
            y:'20px',
            duration:1,
            ease:"none",
            scrollTrigger:{
                trigger:".crouselpic",
                
                start:"70% center",
                end:"70% center",
                toggleActions: "play none none reverse",
            }
        }
    )
    gsap.from(".brandoutro",
        {
            opacity:0,
            stagger:0.2,
            y:"10px",
            scrollTrigger:
            {
                trigger:".outroheadingbox",
                
                start:"-20% center",
                end:"-20% center",
                toggleActions: "play none none reverse",
            }
        }
    )
    gsap.to(".arrowthin",
        {
            y:"10px",
            duration:3,
            repeat:-1,
            yoyo:true
        }
    )
    gsap.to(".circle",
        {
            y:"5px",
            duration:1.5,
            repeat:-1,
            yoyo:true
        }
    )
    gsap.to(".trianglefill",
        {
            y:"10px",
            rotateZ:"-2deg",
            duration:2,
            repeat:-1,
            yoyo:true
        }
    )
    gsap.to(".triangle",
        {
            y:"-10px",
            duration:2,
            repeat:-1,
            yoyo:true ,
        }
    )
    