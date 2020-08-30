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

const body = document.querySelector('body');

const eyes = document.querySelectorAll(".eye");
const eyes_base = document.querySelector("#eyes_base");
const eyes_inside = document.querySelector("#eyes_inside");

const mouth_grp = document.querySelector("#mouth_grp");
const mouth = document.querySelector("#mouth");

const head = document.querySelector("#head");
const head_shape = document.querySelector("#head_shape");

const ears = document.querySelector('#ears');

const inputEmail = document.getElementById('Email');
const inputPassword = document.getElementById('Password');

const LoginButton = document.querySelector('#LoginButton')


// When the document is loaded
if (window.attachEvent) window.attachEvent('load', onLoad);
else window.addEventListener('load', onLoad);


// When the Mouse moves on BODY
if (body.attachEvent) body.attachEvent('mousemove', eyesOnMouse);
else body.addEventListener('mousemove', eyesOnMouse);


// When the user interact with email input
if (inputEmail.attachEvent) inputEmail.attachEvent('focus', eyesOnMail);
else inputEmail.addEventListener('focus', eyesOnMail);

if (inputEmail.attachEvent) inputEmail.attachEvent('input', eyesOnMail);
else inputEmail.addEventListener('input', eyesOnMail);

if (inputEmail.attachEvent) inputEmail.attachEvent('click', eyesOnMail);
else inputEmail.addEventListener('click', eyesOnMail);


// When the user interact with PASSWORD input
if (inputPassword.attachEvent) inputPassword.attachEvent('focus', eyesOnPassword);
else inputPassword.addEventListener('focus', eyesOnPassword);

if (inputPassword.attachEvent) inputPassword.attachEvent('input', eyesOnPassword);
else inputPassword.addEventListener('input', eyesOnPassword);

if (inputPassword.attachEvent) inputPassword.attachEvent('click', eyesOnPassword);
else inputPassword.addEventListener('click', eyesOnPassword);


// When the user interacts whis Login button
if (LoginButton.attachEvent) LoginButton.attachEvent('focus', mouseOverLogin);
else LoginButton.addEventListener('focus', mouseOverLogin)

if (LoginButton.attachEvent) LoginButton.attachEvent('touchstart', mouseOverLogin);
else LoginButton.addEventListener('touchstart', mouseOverLogin)

if (LoginButton.attachEvent) LoginButton.attachEvent('mouseover', mouseOverLogin);
else LoginButton.addEventListener('mouseover', mouseOverLogin);

if (LoginButton.attachEvent) LoginButton.attachEvent('mouseout', mouseOutLogin);
else LoginButton.addEventListener('mouseout', mouseOutLogin)



function onLoad() {
    // Everything has loaded!
    head.classList.add( 'animate__animated' ,'animate__repeat-1', 'animate__bounceInUp', 'animate__delay-1s' );
    hands.classList.add('animate__animated' ,'animate__repeat-1', 'animate__bounceInUp');

}

function eyesOnMouse() {
    console.log('eyesOnMouse');

    let vX = event.clientX;
    let vY = event.clientY;

    let newMinX = -20;
    let newMaxX = 20;

    let oldMinX = 0;
    let oldMaxX = window.innerWidth;

    let newMinY = -10;
    let newMaxY = 20;

    let oldMinY = 0;
    let oldMaxY = window.innerHeight;

    let x = scaleBetween(vX, newMinX, newMaxX, oldMinX, oldMaxX);
    let y = scaleBetween(vY, newMinY, newMaxY, oldMinY, oldMaxY);

    eyes[0].setAttribute("transform", `translate (${x} ${y})`);
    eyes[1].setAttribute("transform", `translate (${x} ${y})`);

    eyes_base.setAttribute("transform", `translate (${x / 2} ${y / 2})`);
    eyes_inside.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

    mouth_grp.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

    head_shape.setAttribute("transform", `translate (${x / 4} ${y / 4})`);

    ears.setAttribute("transform", `translate (${(x / 3) * -1} ${(y / 3) * -1})`);

}

function eyesOnMail() {
    console.log("EyesOnMail");

    let inputMailLength = inputEmail.value.length;

    if (window.innerWidth < 768) {

        let vX = inputMailLength;

        let newMinX = -15;
        let newMaxX = 15;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = scaleBetween(vX, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = 20;

        if (inputMailLength < 30) {
            eyes[0].setAttribute("transform", `translate (${x} ${y})`);
            eyes[1].setAttribute("transform", `translate (${x} ${y})`);

            eyes_base.setAttribute("transform", `translate (${x / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${x / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(x / 3) * -1} ${(y / 3) * -1})`);

        } else {

            eyes[0].setAttribute("transform", `translate (${newMaxX} ${y})`);
            eyes[1].setAttribute("transform", `translate (${newMaxX} ${y})`);

            eyes_base.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${newMaxX / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(newMaxX / 3) * -1} ${(y / 3) * -1})`);
        }


    }

    else {

        let vX = inputMailLength;

        let newMinX = 8;
        let newMaxX = 25;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = scaleBetween(vX, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = -10;

        if (inputMailLength < 30) {
            eyes[0].setAttribute("transform", `translate (${x} ${y})`);
            eyes[1].setAttribute("transform", `translate (${x} ${y})`);

            eyes_base.setAttribute("transform", `translate (${x / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${x / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(x / 3) * -1} ${(y / 3) * -1})`);
            
        } else {
            
            eyes[0].setAttribute("transform", `translate (${newMaxX} ${y})`);
            eyes[1].setAttribute("transform", `translate (${newMaxX} ${y})`);

            eyes_base.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${newMaxX / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(newMaxX / 3) * -1} ${(y / 3) * -1})`);
        }


    }

    return
}

function eyesOnPassword() {
    console.log("eyesOnPassword");

}

function mouseOverLogin() {
    console.log('mouseOverLogin');


    head.classList.remove('animate__bounceInUp');
    head.classList.remove('animate__repeat-1');
    head.classList.remove('animate__delay-2s');


    let inputMailLength = inputEmail.value.length;
    let inputMailContainsAt = inputEmail.value.includes('@');

    let inputPasswordLength = inputPassword.value.length;

    if (inputMailLength <= 5 | inputMailContainsAt === false) {

        head.classList.add('animate__delay-1s');
        head.classList.add('animate__repeat-1');
        head.classList.add('animate__fast');
        head.classList.add('animate__shakeX');

        mouth.style.transform = 'scaleY(-1)';

        inputEmail.style.border = 'solid 2px red';
        inputEmail.classList.add('animate__animated');
        inputEmail.classList.add('animate__headShake');
        
    } else if (inputPasswordLength < 8) {

        head.classList.add('animate__delay-1s');
        head.classList.add('animate__repeat-1');
        head.classList.add('animate__fast');
        head.classList.add('animate__shakeX');

        eyes[0].classList.add('animate__animated');
        eyes[1].classList.add('animate__headShake', 'animate__delay-1s');

        mouth.style.transform = 'scaleY(-1)';

        inputPassword.style.border = 'solid 2px red';
        inputPassword.classList.add('animate__animated');
        inputPassword.classList.add('animate__headShake');
    }
    else {
        console.log('Mail OK & PASSWORD OK');
        
        head.classList.remove('animate__shakeX');
        head.classList.add('animate__tada');
        hands.classList.add('animate__tada');
        
        inputEmail.style.border = 'none';
        inputEmail.classList.remove('animate__animated');
        inputEmail.classList.remove('animate__headShake');
        
        mouth.style.transform = 'scaleY(1)';
    }

}

function mouseOutLogin() {
    console.log('mouseOutLogin');


    head.classList.remove('animate__shakeX');
    head.classList.remove('animate__tada');
    hands.classList.remove('animate__tada');

    inputEmail.classList.remove('animate__headShake');
    inputPassword.classList.remove('animate__headShake');


    mouth.style.transform = 'scaleY(1)';


}