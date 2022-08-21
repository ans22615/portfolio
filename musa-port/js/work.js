var navLink = gsap.utils.toArray(".nav-link"),
    imgWrap = document.querySelector('.img-wrapper'),
    imgItem = document.querySelector('.img-placeholder img');


function moveImg(e){
    var mouseX = e.clientX,
        mouseY = e.clientY
    tl = gsap.timeline();
    tl.to(imgWrap, {
        duration:.6,
        x: mouseX,
        y: mouseY,
        ease: 'back.out'
    })
}

function linkHover(e){
    if (e.type === "mouseenter"){
        var imgSrc = e.target.dataset.src;
        var tl = gsap.timeline();

        tl.set(imgItem, {
            attr: {src : imgSrc}
        }).to(imgWrap, {
            autoAlpha:1,
            scale:1
        });
    } else if (e.type === "mouseleave"){
        var tl = gsap.timeline();
        tl.to(imgWrap, {
            autoAlpha:0,
            scale:0.3
        })
    }
}

function initAnimation(){
    navLink.forEach(link => {
        link.addEventListener('mouseenter', linkHover);
        link.addEventListener('mouseleave', linkHover);
        link.addEventListener('mousemove', moveImg);
    })
}

function init(){
    initAnimation();
}

window.addEventListener("load", function(){
    init();
})