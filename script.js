gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






gsap.from(".second-two h2",{
    scrollTrigger:{
        trigger:".second-two h2",
        scroller:"#bg",
        // markers:true,
        start:"top 80%",
        end: "bottom 90%",
        scrub:2,
    },
    opacity:0,
    x:500,
})


gsap.from(".second-two p",{
    scrollTrigger:{
        trigger:".second-two p",
        scroller:"#bg",
        // markers:true,
        start:"top 80%",    
        end: "bottom 80%",
        scrub:2,
    },
    opacity:0,
    x:500,
})

const main_box = document.querySelector('.main-box')
gsap.from(main_box.children ,{
    scrollTrigger:{
        trigger:main_box,
        scroller:"#bg",
        // markers:true,
        start :"top 60%",
        end:"bottom 70%",
        scrub:2
    },
    opacity:0,
    x:0,
    duration:3,
    delay:2,
    stagger:{
        amount:1
    },
})


const main_box2 = document.querySelector('.main-box2')
gsap.from(main_box2.children ,{
    scrollTrigger:{
        trigger:main_box2,
        scroller:"#bg",
        // markers:true,
        start :"top 60%",
        end:"bottom 60%",
        scrub:2
    },
    opacity:0,
    x:0,
    duration:3,
    delay:2,
    stagger:{
        amount:1
    },
})


const cards = document.querySelector('.cards')
gsap.from(cards.children ,{
    scrollTrigger:{
        trigger:cards,
        scroller:"#bg",
        // markers:true,
        start :"top 70%",
        end:"bottom 100%",
    },
    opacity:0,
    duration:1,
    scale:"1.1",
    stagger:{
        amount:1
    },
})


const fifth = document.querySelector('.fifth-cards')
gsap.from(fifth.children ,{
    scrollTrigger:{
        trigger:fifth,
        scroller:"#bg",
        // markers:true,
        start :"top 70%",
        end:"bottom 100%",
    },
    opacity:0,
    duration:1,
    scale:"1.1",
    stagger:{
        amount:1
    },
})



const seventh = document.querySelector('.seventh')
gsap.from(seventh.children ,{
    scrollTrigger:{
        trigger:seventh,
        scroller:"#bg",
        // markers:true,
        start :"top 70%",
        end:"bottom 100%",
    },
    opacity:0,
    duration:2,
    scale:"1.1",
    stagger:{
        amount:1
    },
})

const icons = document.querySelector('.icons')
gsap.from(icons.children ,{
    scrollTrigger:{
        trigger:icons,
        scroller:"#bg",
        // markers:true,
        start :"top 70%",
        end:"bottom 100%",
    },
    opacity:0,
    duration:2,
    scale:"1.1",
    stagger:{
        amount:1
    },
})
