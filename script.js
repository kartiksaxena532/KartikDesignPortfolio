function locoScroll(){gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll()
function cursoreffect(){var page1Content = document.querySelector("#page1-content")
var cursor =  document.querySelector("#cursor")
page1Content.addEventListener("mousemove",function(e)

{
    gsap.to(cursor,{
        x:e.clientX,
        y:e.clientY,
        duration:0.1
    })

})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1,
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0,
    })
})
}

cursoreffect()

function page2Animation(){
gsap.from(".elem h1",{

    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 36%",
        end:"top %",
       
        scrub:2,
    }
})
}
page2Animation()

function swiper() {var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});}

swiper()

function page3Animation(){
var t1=gsap.timeline()

t1.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1,

})

t1.to("#loader h3",{
opacity:0,
x:-10,
duartion:1,
stagger:-0.1,
})

t1.to("#loader",{
  opacity:0,

})


t1.to("#loader",{
  display:"none",
})
t1.from("#page1-content h1 span",{
  y:100,
opacity:0,
stagger:0.1,

})
}
page3Animation()


document.addEventListener("DOMContentLoaded", function() {
  var parcoursBoxes = document.querySelectorAll(".parcours-box");
  for (var i = 0; i < parcoursBoxes.length; i++) {
    parcoursBoxes[i].classList.remove("parcours-active");
  }
  
  document.querySelector(".round1").addEventListener("click", function() {
    document.querySelectorAll(".tl-round").forEach(function(round) {
      round.style.backgroundColor = "rgb(85, 69, 69)";
    });
    document.querySelector(".round1").style.backgroundColor = "white";
    document.querySelector(".parcours-active").classList.remove("parcours-active");
    document.querySelector(".parc1").classList.add("parcours-active");
    document.querySelector(".timeline-indicator").style.width = "0";
  });
  
  document.querySelector(".round2").addEventListener("click", function() {
    document.querySelectorAll(".tl-round").forEach(function(round) {
      round.style.backgroundColor = "rgb(85, 69, 69)";
    });
    document.querySelector(".round1").style.backgroundColor = "white";
    document.querySelector(".round2").style.backgroundColor = "white";
    document.querySelector(".parcours-active").classList.remove("parcours-active");
    document.querySelector(".parc2").classList.add("parcours-active");
    document.querySelector(".timeline-indicator").style.width = "240px";
  });
  
  document.querySelector(".round3").addEventListener("click", function() {
    document.querySelectorAll(".tl-round").forEach(function(round) {
      round.style.backgroundColor = "rgb(85, 69, 69)";
    });
    document.querySelector(".round1").style.backgroundColor = "white";
    document.querySelector(".round2").style.backgroundColor = "white";
    document.querySelector(".round3").style.backgroundColor = "white";
    document.querySelector(".parcours-active").classList.remove("parcours-active");
    document.querySelector(".parc3").classList.add("parcours-active");
    document.querySelector(".timeline-indicator").style.width = "480px";
  });
  
  document.querySelector(".round4").addEventListener("click", function() {
    document.querySelectorAll(".tl-round").forEach(function(round) {
      round.style.backgroundColor = "rgb(85, 69, 69)";
    });
    document.querySelector(".round1").style.backgroundColor = "white";
    document.querySelector(".round2").style.backgroundColor = "white";
    document.querySelector(".round3").style.backgroundColor = "white";
    document.querySelector(".round4").style.backgroundColor = "white";
    document.querySelector(".parcours-active").classList.remove("parcours-active");
    document.querySelector(".parc4").classList.add("parcours-active");
    document.querySelector(".timeline-indicator").style.width = "720px";
  });
});
