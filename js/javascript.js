// Initialsiing Glide Carousel
var glide = new Glide('.glide' , {
    dragThreshold: false,
});

//Change Slide color
glide.on(['mount.after', 'run'], () => {
    const currentIndex = glide.index;
    const home = document.querySelector('.home');
    if( currentIndex == 1 ){
        home.style.background = "#409D8D";
    }else{
        home.style.background = "black";
    }
});
glide.mount();

document.querySelector('#get-started-btn').addEventListener('click', e => {
    glide.go(">");
});

//Initialise Anime.JS
var animation =  anime({
    targets: '#get-started-btn',
    translateY: 50,
    loop: true,
    easing: 'spring(1, 80, 10, 0)',
    autoplay : true
});

//Stop/Start Get started button on hover
document.querySelector('#get-started-btn').addEventListener('mouseover', e => {
    animation.pause();
});
document.querySelector('#get-started-btn').addEventListener('mouseout', e => {
    animation.play();
});

//Play Music
var myAudio = document.getElementById("player");
var isPlaying = false;
var elem = document.getElementById("mute");
function togglePlay() {
if(isPlaying){
    myAudio.pause();
    elem.style.display = 'block';
}else{
    myAudio.play();
    elem.style.display = 'none';
}
};
myAudio.onplaying = function() {
isPlaying = true;
elem.style.display = 'none';
};
myAudio.onpause = function() {
isPlaying = false;
elem.style.display = 'block';
};

//Scroll Glide - https://stackoverflow.com/questions/31223341/detecting-scroll-direction
var scrollableElement = document.body; 
scrollableElement.addEventListener('wheel', checkScrollDirection);
function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        console.log('UP');
        glide.go('<')
    } else {
        console.log('Down');
        glide.go('>')
    }
}
function checkScrollDirectionIsUp(event) {
if (event.wheelDelta) {
    return event.wheelDelta > 0;
}
return event.deltaY < 0;
}


//Opening Cycle Popups in About

//Creating small fade-in function for cards
function fadeIn(el, time) {
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

var egg = document.querySelector('#egg');
var larva = document.querySelector('#larva');
var evo = document.querySelector('#evo');
var butterfly = document.querySelector('#butterfly');

var eggCard = document.querySelector('.egg-wrapper');
var larvaCard = document.querySelector('.larva-wrapper');
var pupaCard = document.querySelector('.pupa-wrapper');
var butterflyCard = document.querySelector('.butterfly-wrapper');

egg.addEventListener('click' , e =>{
    fadeIn(eggCard, 500);
    eggCard.style.pointerEvents = "initial"
});
larva.addEventListener('click' , e =>{
    fadeIn(larvaCard, 500);
    larvaCard.style.pointerEvents = "initial"
});
evo.addEventListener('click' , e =>{
    fadeIn(pupaCard, 500);
    pupaCard.style.pointerEvents = "initial"
});
butterfly.addEventListener('click' , e =>{
    fadeIn(butterflyCard, 500);
    butterflyCard.style.pointerEvents = "initial"
});

//Closing Cycle Popups in About
var li = document.querySelectorAll('.close-btn');
li.forEach(function(element, index) {
    element.addEventListener('click' , e =>{
        element.parentNode.style.opacity = 0;
        element.parentNode.style.pointerEvents = "none";
    });
});


//Gallery
(function() {
"use strict";

var carousel = document.getElementsByClassName('carousel')[0],
    slider = carousel.getElementsByClassName('carousel__slider')[0],
    items = carousel.getElementsByClassName('carousel__slider__item'),
    prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
    nextBtn = carousel.getElementsByClassName('carousel__next')[0];

var width, height, totalWidth, margin = 20,
    currIndex = 0,
    interval, intervalTime = 4000;

function init() {
    resize();
    move(Math.floor(2));
    bindEvents();

    // timer();
}

function resize() {
    width = Math.max(window.innerWidth * .25, 275),
    height = window.innerHeight * .5,
    totalWidth = width * items.length;

    slider.style.width = totalWidth + "px";

    for(var i = 0; i < items.length; i++) {
        let item = items[i];
        item.style.width = (width - (margin * 2)) + "px";
        item.style.height = height + "px";
    }
}

function move(index) {

    if(index < 1) index = items.length;
    if(index > items.length) index = 1;
    currIndex = index;

    for(var i = 0; i < items.length; i++) {
        let item = items[i],
            box = item.getElementsByClassName('item__3d-frame')[0];
        if(i == (index - 1)) {
            item.classList.add('carousel__slider__item--active');
            box.style.transform = "perspective(1200px)"; 
        } else {
            item.classList.remove('carousel__slider__item--active');
            box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 20 : -20) + "deg)";
        }
    }

    slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
}

function timer() {
    clearInterval(interval);    
    interval = setInterval(() => {
        move(++currIndex);
    }, intervalTime);    
}

function prev() {
    move(--currIndex);
    timer();
}

function next() {
    move(++currIndex);    
    timer();
}


function bindEvents() {
    window.onresize = resize;
    prevBtn.addEventListener('click', () => { prev(); });
    nextBtn.addEventListener('click', () => { next(); });    
}


init();


var slide = document.querySelectorAll('.carousel__slider__item');
slide.forEach(function(element, index) {
    element.addEventListener('click' , e =>{
        move(index+1);
    });
});

})();

//Swap BG color for 2ns slide
const about =  document.querySelector('.about');


window.addEventListener('scroll', function() {
    if(glide.index() == '2') {
        home.classList.add('about-active');
        console.log('2!!');
    }
});