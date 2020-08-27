let eyes = document.querySelectorAll(".eye");
let eyes_base = document.querySelector("#eyes_base");
let eyes_inside = document.querySelector("#eyes_inside");

let mouth_grp = document.querySelector("#mouth_grp");

let head_shape = document.querySelector("#head_shape");

let ears = document.querySelector('#ears');


document.addEventListener('mousemove', function(e) {

    let vX = e.clientX;
    let vY = e.clientY;

    let newMinX = -20;
    let newMaxX = 20;

    let oldMinX = 0;
    let oldMaxX = window.innerWidth;

    let newMinY = -20;
    let newMaxY = 20;

    let oldMinY = 0;
    let oldMaxY = window.innerHeight;

    let x = scaleBetween(vX, newMinX, newMaxX, oldMinX, oldMaxX).toFixed();
    let y = scaleBetween(vY, newMinY, newMaxY, oldMinY, oldMaxY).toFixed();

    eyes[0].setAttribute("style", `translate: ${x}px ${y}px`);
    eyes[1].setAttribute("style", `translate: ${x}px ${y}px`);

    eyes_base.setAttribute("style", `translate: ${x / 2}px ${y / 2}px`);
    eyes_inside.setAttribute("style", `translate: ${x / 2}px ${y / 2}px`);

    mouth_grp.setAttribute("style", `translate: ${x / 2}px ${y / 2}px`);

    head_shape.setAttribute("style", `translate: ${x / 4}px ${y / 4}px`);

    ears.setAttribute("style", `translate: ${(x / 3) * -1}px ${(y / 3) * -1}px`);

});

let blinkLeft = document.getElementsByClassName("blinkLeft");
let blinkRight = document.getElementsByClassName("blinkRight");

function blinkLeftFunction() {
    blinkLeft.forEach(e => { e.setAttribute("ry", "0") });
    return
}

function blinkRightFunction() {
    blinkRight.forEach(e => { e.setAttribute("ry", "0") });
    return
}

function blink() {
    blinkLeftFunction();
    blinkRightFunction();
    return
}

function scaleBetween(v, newMin, newMax, oldMin, oldMax) {
    /**
     * Returns a scaled number within its source bounds to the desired target bounds.
     * @param {number} v - Unscaled number
     * @param {number} newMin - Minimum (target) bound to scale to
     * @param {number} newMax - Maximum (target) bound to scale to
     * @param {number} oldMin - Minimum (source) bound to scale from
     * @param {number} oldMax - Maximum (source) bound to scale from
     */
    return ((v - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}