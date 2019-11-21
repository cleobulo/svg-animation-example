/**
 * Animations with gsap
 */

function onMouseMove(event) {
    if (event.clientX > 790) {
        gsap.to("#left-full-eye",
            { rotation: 0, x: 5, y: 0, duration: 1 });
        gsap.to("#right-full-eye",
            { rotation: 0, x: 5, y: 0, duration: 1 });
    }
    if (event.clientX < 490) {
        gsap.to("#left-full-eye",
            { rotation: 0, x: -5, y: 0, duration: 1 });
        gsap.to("#right-full-eye",
            { rotation: 0, x: -5, y: 0, duration: 1 });
    }
    if (event.clientX >= 480 && event.clientX <= 650 && event.clientY < 200) {
        gsap.to("#left-full-eye",
            { rotation: 0, x: 0, y: -5, duration: 1 });
        gsap.to("#right-full-eye",
            { rotation: 0, x: 0, y: -5, duration: 1 });
    }
    if (event.clientX >= 480 && event.clientX <= 650 && event.clientY > 200) {
        gsap.to("#left-full-eye",
            { rotation: 0, x: 0, y: 5, duration: 1 });
        gsap.to("#right-full-eye",
            { rotation: 0, x: 0, y: 5, duration: 1 });
    }
}