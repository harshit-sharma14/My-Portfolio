import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.08,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed",
});

const vh = (c) => window.innerHeight * (c / 100);

const heroScroller = gsap.timeline({
  ScrollTrigger: {
    trigger: ".hero-header",
    scroller: ".smooth-scroll",
    pin: ".pin-wrapper",
    start: "top top",
    scrub: true,
    end: `${vh(100)}`,
  },
});

heroScroller
  .to(".hero-header .h-1", { scale: 2, y: vh(150), xPercent: -150 }, "heroScroll")
  .to(".hero-header .h-2", { scale: 2, y: vh(150), xPercent: 150 }, "heroScroll")
  .to("#hero-image", { scaleY: 2.5 }, "heroScroll")
  .to("#hero-image .image", { scaleX: 2.5, xPercent: 50 }, "heroScroll");

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();