window.onload = function() {
    let t1=gsap.timeline()
    t1.from(".heroheading", { opacity: 0, y: 10, duration: 0.3 })
    t1.from(".herosubtext", { opacity: 0, y: 10, duration: 0.3 })
    t1.from(".wantit", { opacity: 0, y: 10, duration: 0.3});
  };
gsap.from(".stag",
    {
        opacity:0,
        y:"20px",
        stagger:0.3,
        scrollTrigger:{
            trigger:".howitwork",
            start:"40% center",
            end:"40% center",
            markers:true,
            toggleActions: "play none none reset",
        }
    }
)

const crouselanimation1 = document.querySelector(".carousel-control-next");
 crouselanimation1.addEventListener('click', animate);
const crouselanimation2 = document.querySelector(".carousel-control-prev"); 
crouselanimation2.addEventListener('click', animate);
let t4;
function animate() {
  if (t4) {
    t4.kill(); // Kill the previous timeline if it exists
  }
  
  t4 = gsap.timeline({ immediateRender: true }); // Create a new timeline instance
  
  t4.from("#carouselcontenthead", {
    opacity: 0,
    y: "10px",
    duration: 0.3
  })
  .from("#carouselcontentsub", {
    opacity: 0,
    y: "10px",
    duration: 0.3
  })
  .from(".statsstag", {
    opacity: 0,
    y: "10px",
    stagger: 0.2,
  }, 0);
}
gsap.to(
  ".pricebox",
  {
    opacity: 1,
    y: "10px",
    stagger:0.3,
    scrollTrigger:{
      trigger:".crouselpart",
      start:"100% center",
      end:"100% center",
      markers:true,
    }
  }
)
gsap.to(".navbar",
  {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(8px)",
    webkitBackdropFilter: "blur(8px)",
    scrollTrigger:{
      trigger:".youtubehomepage",
      start:"center center",
      end:"center center",
      markers:true,
      toggleActions: "play none none reset",
    }
  }
)

