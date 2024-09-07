const white = document.querySelectorAll(".whitecontent, .pricingarea");
const image = document.querySelectorAll(".navlogoone, .navlogotwo");
const font = document.querySelectorAll(".vis , .nonvis");

let t1 = gsap.timeline({
    scrollTrigger:
    {
        trigger: ".whitecontent",
        start: "15% center",
        end: "20% center",
        
        scrub: 2
    }
});
t1.to(
    white,
    {
        backgroundColor: "white",
    }
)
t1.from(
    ".bigwhitehead",
    {
        y: "15px",
        ease: "none",
    },
    0
)
t1.to(".astro",
    {
        color: "black",
    },
    0
)
t1.to(
    ".underline",
    {
        textDecorationColor: "black",
    },
    0
)
t1.to(
    font,
    {
        color: "black",
    },
    0
)
t1.to(
    ".navbar",
    {
        backgroundColor: "white",
    },
    0
)
t1.to(
    image,
    {
        filter:"brightness(0) invert(0.2)",
    },0
);
