const font = document.querySelectorAll(".pricehead1, .helptext1, .tryout, .guarantee");
const bkg = document.querySelectorAll(".price, .howitwork");
const boxcolor = document.querySelectorAll(".tryout, .pricehelp");
const smallbox = document.querySelectorAll(".smallbox, .smallbox1");
const image = document.querySelectorAll(".navlogoone, .navlogotwo");
const font1 = document.querySelectorAll(".vis , .nonvis");

let applyTimeline = gsap.timeline({ paused: true });
let revertTimeline = gsap.timeline({ paused: true });

applyTimeline
  .to(font, { color: "black", duration: 0.5 }, 0)
  .to(bkg, { backgroundColor: "white", duration: 0.5 }, 0)
  .to(boxcolor, { backgroundColor: "white", border: "solid 1px black", duration: 0.5 }, 0)
  .to(smallbox, { backgroundColor: "white", duration: 0.5 }, 0)
  .to(".strip", { backgroundImage: "linear-gradient(to right, white 50%, transparent 0%)", duration: 0.5 }, 0)
  .to(font1, { color: "black" }, 0)
  .to(image, { filter: "invert(1)" }, 0)
  .to(".navbar", { backgroundColor: "white" }, 0);

revertTimeline
  .to(font, { color: "white", duration: 0.5 }, 0)
  .to(bkg, { backgroundColor: "black", duration: 0.5 }, 0)
  .to(boxcolor, { backgroundColor: "black", border: "solid 1px white", duration: 0.5 }, 0)
  .to(smallbox, { backgroundColor: "black", duration: 0.5 }, 0)
  .to(".strip", { backgroundImage: "linear-gradient(to right, black 50%, transparent 0%)", duration: 0.5 }, 0)
  .to(".howitworkhead", { color: "white", }, 0)
  .to(font1, { color: "white" }, 0)
  .to(image, { filter: "invert(0)" }, 0)
  .to(".navbar", {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(8px)",
    webkitBackdropFilter: "blur(8px)",
  }, 0);

ScrollTrigger.create({
  trigger: ".price",
  start: "30% center",
  end: "75% center",
  onEnter: () => applyTimeline.play(),
  onLeaveBack: () => applyTimeline.reverse(),
  onLeave: () => revertTimeline.play(),
  onEnterBack: () => revertTimeline.reverse(),
  markers: true
});

let iconrain = gsap.timeline({ repeat: -1 });
iconrain.fromTo(".leftone",
  {
    y: " 800%",
    filter: "blur(4px) brightness(111) ",
  },
  {
    y: "-800%",
    filter: "blur(1px) brightness(111) ",
    duration: 3,
    opacity:0,
    repeat:-1
  }
)
iconrain.fromTo(".lefttwo",
  {
    y: "800%",
    filter: "blur(4px) brightness(111) ",
  },
  {
    y: "-800%",
    filter: "blur(1px) brightness(111) ",
    duration: 3,
    opacity:0,
    repeat:-1
  },
  0.750
)

iconrain.fromTo(".leftthree",
  {
    y: "800%",
    filter: "blur(4px) brightness(111)",
  },
  {
    y: "-800%",
    filter: "blur(1px) brightness(111) ",
    duration: 3,
    opacity:0,
    repeat:-1
  },1.5
)

iconrain.fromTo(".leftfour",
  {
    y: "800%",
    filter: "blur(4px) brightness(111)",
  },
  {
    y: "-800%",
    filter: "blur(1px) brightness(111) ",
    duration: 3,
    opacity:0,
    repeat:-1
  },2.250
)
iconrain.fromTo(".rightone",
  {
    y: " 800%",
    filter: "blur(4px) brightness(111) ",
  },
  {
    y: "-800%",
    filter: "blur(1px) brightness(111) ",
    duration: 3,
    opacity:0,
    repeat:-1
  },0
)
iconrain.fromTo(".righttwo",
  {
    y: "800%",
    filter: "blur(4px) brightness(111) ",
  },
  {
    y: "-800%",
    filter: "blur(1px) brightness(111) ",
    duration: 3,
    opacity:0,
    repeat:-1
  },
  0.750
)

iconrain.fromTo(".rightthree",
  {
    y: "800%",
    filter: "blur(4px) brightness(111)",
  },
  {
    y: "-800%",
    filter: "blur(1px) brightness(111) ",
    duration: 3,
    opacity:0,
    repeat:-1
  },1.5
)

iconrain.fromTo(".rightfour",
  {
    y: "800%",
    filter: "blur(4px) brightness(111)",
  },
  {
    y: "-800%",
    filter: "blur(1px) brightness(111) ",
    duration: 3,
    opacity:0,
    repeat:-1
  },2.250
)

