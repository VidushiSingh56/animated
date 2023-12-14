const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoconAnimation() {
    var videocon = document.querySelector("#videocontain")
    var playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })

    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 50
        })
    })
}
videoconAnimation()

//loading animation
function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 140,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2
    })
    gsap.from("#page1 #videocontain", {

        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
    })
}

loadingAnimation()