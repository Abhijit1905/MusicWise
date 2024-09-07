const black=document.querySelectorAll(".whitecontent , .reblack");
const font1=document.querySelectorAll(".astro2, .astro3");
let t3=gsap.timeline({scrollTrigger:{
    trigger:".crouselsubheadbig",
 start:"top 20%",
    end:"top 20%",
    scrub:2
}});
t3.to(black,
    {
        backgroundColor:"black",
    }
)
t3.to(font,
    {
        color:"white",
    },
    0
)
t3.to(
    ".navbar",
    {
        backgroundColor: "black",
    },
    0
)
t3.to(font1,
    {
        color:"white",
    },
    0
)
t3.to("#astro2color",
    {
        color:"#00e5a9",
    },
    0
)
t3.to(".ghostbox",
    {
        color:"white",
    },
    0
)
t3.to(
    image,
    {
        filter:"brightness(1)",
    },0
);