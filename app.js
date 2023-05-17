
/* Below I am going to create an object which will take in multiple values such as the amount of curve my animation will take to give some motion to my animation. The values will be set in an array where I set the points I want to animate the plane in the Y & X values.*/
const flightPath = {
    curviness: 1.25,
    /* This will ensure the plane autorotates with each flightpath I create in the values section */
    autoRotate: true,
    values: [
        /* each { section } will be the chosen flightpath of the plane.png which will later be controlled by the users mouse scroll */
        {x: 100, y: -20},
        {x: 300, y: 10},
        {x: 500, y: 100},
        {x: 750, y: -100},
        {x: 350, y: -50},
        {x: 600, y: 100},
        {x: 800, y: 0},
        {x: window.innerWidth, y: -350} /* This last section I am using window.innerWidth to allow the plane to fly off the window */
    ]
}

/* The below will be my time line */
const tween = new TimelineLite();

/* Here is where I will start to add the animation to my timeline where I will add parameters such as the object I want to animate(.flying-plane), the duration of the animation(1) and then the properties I want to animate{ using the bezier plugin I added to my html earlier} */
tween.add(
    TweenLite.to('.flying-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
)

/* Below I will define the control */
const controller = new ScrollMagic.Controller();

/* Below is where I will create the scene for the user and add the trigger, duration element in the {object}*/
const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 1000,
    triggerHook: 0 /* This will alow me to control the trigger position depending where the user is on the page or scroll */
})

.setTween(tween) /* Here I add the tween timeline so that the user scroll will now control the fling-plane */

/* To help visualise whats going on we can add indicators */
.addIndicators()
.addTo(controller);

