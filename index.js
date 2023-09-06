function pencode() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
pencode();

var curser = document.querySelector(".curser")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    curser.style.left = dets.x + 10 + "px"
    curser.style.top = dets.y + 10 + "px"
})
var video = document.querySelector("video")
video.addEventListener("mouseenter", function (dets) {
    curser.style.left = dets.x + "px"
    curser.style.top = dets.y + "px"
    curser.style.width = "80px"

})
video.addEventListener("mouseleave", function (dets) {
    curser.style.left = dets.x + "px"
    curser.style.top = dets.y + "px"
    curser.style.width = "20px"

})

var box = document.querySelectorAll(".box")
box.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var img = elem.getAttribute("data-image")
        curser.style.width = "300px"
        curser.style.height = "250px"
        curser.style.borderRadius = "0"
        curser.style.backgroundImage = `url(${img})`
    })
    elem.addEventListener("mouseleave", function () {
        curser.style.width = "20px"
        curser.style.height = "20px"
        curser.style.borderRadius = "50px"
        curser.style.backgroundImage = `none`
    })
})

// va
// var a=document.querySelectorAll(".nav-part2 h4 a")

// a.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         curser.style.scale=3
//         curser.style.border="0.5px solid white"
//         curser.style.backgroundColor="transparent"

//     })
// })
// a.forEach(function(elem){
//     elem.addEventListener("mouseleave",function(){
//         curser.style.scale=1
//         curser.style.border="0px solid white"
//         curser.style.backgroundColor="#EDBFFF"

//     })
// })


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
    duration: 1,
}, "hey")

tl.to(".page1 h2", {
    x: 100,
    duration: 1,
}, "hey")

tl.to(".page1 video", {
    width: "90%",
    duration: 1.
}, "hey")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        // markers: true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "white",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        // markers: true,
        start: "top -400%",
        end: "top -450%",
        scrub: 3
    }
})
tl3.to(".main", {
    backgroundColor: "#0F0D0D"
})