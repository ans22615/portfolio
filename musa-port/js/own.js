let btn = document.querySelector('#click');
let nav = document.querySelector('.nav-bar');

let social = document.querySelector('.nav-bar .social');
let link = document.querySelector('.nav-bar .link');


btn.addEventListener('click', function() {
        nav.style.width = '100%'
        nav.style.height = '100vh'
        nav.style.transition = '.5s'
        social.style.display = 'block'
        link.style.display = 'block'
})

// cursor animation

let cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e)=>{
        
         let x = e.clientX 
         let y = e.clientY 
         
         cursor.style.left = x + 'px'
         cursor.style.top = y + 'px'
})

// scroll animations using gsap

gsap.registerPlugin(ScrollTrigger);
// recent section

gsap.to('.recent .first', {
        scrollTrigger:{
                trigger: '.recent .first',
                toggleActions: 'restart'
        },
        duration:.8,
        x:40,
})

gsap.to('.recent .seconde', {
        scrollTrigger:{
                trigger: '.recent .seconde',
                toggleActions: 'restart'
        },
        duration:.8,
        x:-40,
        
})

// app

gsap.to('.app .first', {
        scrollTrigger:{
                trigger: '.app .first',
                toggleActions: 'restart'
        },
        duration:.8,
        x:40,
})

gsap.to('.app .seconde', {
        scrollTrigger:{
                trigger: '.app .seconde',
                toggleActions: 'restart'
        },
        duration:.8,
        x:-40,
})

// web

gsap.to('.web .first', {
        scrollTrigger:{
                trigger: '.web .first',
                toggleActions: 'restart'
        },
        duration:.8,
        x:40,
})

gsap.to('.web .seconde', {
        scrollTrigger:{
                trigger: '.web .seconde',
                toggleActions: 'restart'
        },
        duration:.8,
        x:-40,
})

// branding

gsap.to('.branding .first', {
        scrollTrigger:{
                trigger: '.branding .first',
                toggleActions: 'restart'
        },
        duration:.8,
        x:40,
})

gsap.to('.branding .seconde', {
        scrollTrigger:{
                trigger: '.branding .seconde',
                toggleActions: 'restart'
        },
        duration:.8,
        x:-40,
})

// UX

gsap.to('.UX .first', {
        scrollTrigger:{
                trigger: '.UX .first',
                toggleActions: 'restart'
        },
        duration:.8,
        x:40,
})

gsap.to('.UX .seconde', {
        scrollTrigger:{
                trigger: '.UX .seconde',
                toggleActions: 'restart'
        },
        duration:.8,
        x:-40,
})

// UI

gsap.to('.UI .first', {
        scrollTrigger:{
                trigger: '.UI .first',
                toggleActions: 'restart'
        },
        duration:.8,
        x:40,
})

gsap.to('.UI .seconde', {
        scrollTrigger:{
                trigger: '.UI .seconde',
                toggleActions: 'restart'
        },
        duration:.8,
        x:-40,
})

