
/* Below I am going to create an object which will take in multiple values such as the amount of curve my animation will take to give some motion to my animation. The values will be set in an array where I set the points I want to animate the plane in the Y & X values.*/
const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20}
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