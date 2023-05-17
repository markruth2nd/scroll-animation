
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

