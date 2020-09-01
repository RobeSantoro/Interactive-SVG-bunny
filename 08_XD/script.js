function mapRange(v, newMin, newMax, oldMin, oldMax) {
    /**
     * Returns a scaled number within its source bounds to the desired target bounds.
     * @param {number} v - Unscaled number
     * @param {number} newMin - Minimum (target) bound to scale to
     * @param {number} newMax - Maximum (target) bound to scale to
     * @param {number} oldMin - Minimum (source) bound to scale from
     * @param {number} oldMax - Maximum (source) bound to scale from
     */
    let result = ((v - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
    return result.toFixed(2);
}

function faceFollowMouse(x, y) {

    eyes[0].setAttribute("style", `transform: translate(${x}px , ${y}px)`);
    eyes[1].setAttribute("style", `transform: translate(${x}px , ${y}px)`);

    eyes_base.setAttribute("style", `transform: translate(${x / 2}px , ${y / 2}px)`);
    eyes_inside.setAttribute("style", `transform: translate(${x / 2}px , ${y / 2}px)`);

    mouth_grp.setAttribute("style", `transform: translate(${x / 2}px , ${y / 2}px)`);

    head_shape.setAttribute("style", `transform: translate(${x / 4}px , ${y / 4}px)`);

    ears.setAttribute("style", `transform: translate(${(x / 3) * -1}px , ${(y / 3) * -1}px)`);
}

/* DOM */
const body = document.querySelector('body');
const inputEmail = document.getElementById('Email');
const inputPassword = document.getElementById('Password');
const LoginButton = document.querySelector('#LoginButton')

/* SVG */
const head = document.querySelector("#head");
const head_shape = document.querySelector("#head_shape");

const eyes = document.querySelectorAll(".eye");
const eyes_base = document.querySelector("#eyes_base");
const eyes_inside = document.querySelector("#eyes_inside");

const mouth_grp = document.querySelector("#mouth_grp");
const mouth = document.querySelector("#mouth");
const nose_line = document.querySelector("#nose_line");
const teeth = document.querySelector("#teeth");

const ears = document.querySelector('#ears');


// When the document is loaded
if (window.attachEvent) window.attachEvent('load', onLoad);
else window.addEventListener('load', onLoad);

// When the Mouse moves on BODY
if (body.attachEvent) body.attachEvent('mousemove', eyesOnMouse);
else body.addEventListener('mousemove', eyesOnMouse);

if (body.attachEvent) body.attachEvent('touchmove', eyesOnMouse);
else body.addEventListener('touchmove', eyesOnMouse);


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


// When the user enters whis Login button
if (LoginButton.attachEvent) LoginButton.attachEvent('focus', mouseOverLogin);
else LoginButton.addEventListener('focus', mouseOverLogin)

if (LoginButton.attachEvent) LoginButton.attachEvent('mouseover', mouseOverLogin);
else LoginButton.addEventListener('mouseover', mouseOverLogin);

if (LoginButton.attachEvent) LoginButton.attachEvent('touchstart', mouseOverLogin);
else LoginButton.addEventListener('touchstart', mouseOverLogin)

// When the user leaves whis Login button

if (LoginButton.attachEvent) LoginButton.attachEvent('mouseout', mouseOutLogin);
else LoginButton.addEventListener('mouseout', mouseOutLogin)

if (LoginButton.attachEvent) LoginButton.attachEvent('touchend', mouseOutLogin);
else LoginButton.addEventListener('touchend', mouseOutLogin)



function onLoad() {
    // Everything has loaded!
    head.classList.add('animate__animated', 'animate__repeat-1', 'animate__bounceInUp', 'animate__delay-1s');
    hands.classList.add('animate__animated', 'animate__repeat-1', 'animate__backInUp');
    return
}

function eyesOnMouse() {
    //console.log('eyesOnMouse');
    head.classList.remove('headOnMail', 'headOnMail-md', 'headStart');

    setTimeout(() => {
        head.classList.remove('animate__repeat-1', 'animate__bounceInUp', 'animate__delay-1s', 'animate__fast');
    }, 2000);
    
    let vX = event.clientX;
    let vY = event.clientY;

    let newMinX = -20;
    let newMaxX = 20;

    let newMinY = -10;
    let newMaxY = 20;

    let oldMinX = 0;
    let oldMaxX = window.innerWidth;

    let oldMinY = 0;
    let oldMaxY = window.innerHeight;

    let x = mapRange(vX, newMinX, newMaxX, oldMinX, oldMaxX);
    let y = mapRange(vY, newMinY, newMaxY, oldMinY, oldMaxY);

    return faceFollowMouse(x, y);
}

function eyesOnMail() {
    console.log("EyesOnMail");

    head.classList.remove('animate__repeat-1', 'animate__bounceInUp', 'animate__delay-1s', 'animate__shakeX');
    head.classList.remove('headStart', 'headOnPassword');

    let inputMailLength = inputEmail.value.length;

    if (window.innerWidth < 768) {

        head.classList.add('headOnMail');

        let vX = inputMailLength;

        let newMinX = -15;
        let newMaxX = 15;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = mapRange(vX, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = 20;

        if (inputMailLength < 30) { //avoid wrapping by mapRange

            faceFollowMouse(x, y);

        } else { //avoid wrapping by mapRange

            faceFollowMouse(newMaxX, y);
        }
        return
    }
    else { // window.innerWidth > 768

        head.classList.add('headOnMail-md');

        let vX = inputMailLength;

        let newMinX = 8;
        let newMaxX = 25;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = mapRange(vX, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = -10;

        if (inputMailLength < 30) { //avoid wrapping by mapRange

            faceFollowMouse(x, y);

        } else { //avoid wrapping by mapRange

            faceFollowMouse(newMaxX, y);
        }

        return
    }
}

function eyesOnPassword() {
    console.log("eyesOnPassword");

    head.classList.remove('headOnMail-md', 'headOnMail');
    head.classList.remove('animate__repeat-1', 'animate__bounceInUp', 'animate__delay-1s', 'animate__shakeX');

    head.classList.add('headOnPassword');

    eyes[0].setAttribute("style", `transform: translate(0px , 0px)`);
    eyes[1].setAttribute("style", `transform: translate(0px , 0px)`);

    let inputPasswordLength = inputPassword.value.length;

    /* Mobile First */
    if (window.innerWidth < 768) {

        let v = inputPasswordLength;

        let newMinX = -15;
        let newMaxX = 15;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = mapRange(v, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = 0;

        if (inputPasswordLength < 30) { //avoid wrapping by mapRange

            faceFollowMouse(x, y);

        } else { // window.innerWidth > 768

            faceFollowMouse(newMaxX, y);
        }
    }
    else { // window.innerWidth > 768 = :md

        let v = inputPasswordLength;

        let newMinX = 8;
        let newMaxX = 25;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = mapRange(v, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = -10;

        if (inputPasswordLength < 30) { //avoid wrapping by mapRange

            faceFollowMouse(x, y);

        } else { //avoid wrapping by mapRange

            faceFollowMouse(newMaxX, y);
        }

    }

    return
}

function mouseOverLogin() {
    console.log('mouseOverLogin');

    let inputMailLength = inputEmail.value.length;
    let inputMailContainsAt = inputEmail.value.includes('@');
    let inputPasswordLength = inputPassword.value.length;

    // mail validation
    if (inputMailLength <= 5 | inputMailContainsAt === false) {

        head.classList.add('animate__animated', 'animate__shakeX', 'animate__fast');

        mouth.style = 'transform:translateY(5px); transform:scaleY(-1);';
        nose_line.setAttribute('y2', '246')
        teeth.style.transform = 'translateY(-14px)';

        inputEmail.style.border = 'solid 2px red';

        inputEmail.classList.add('animate__animated', 'animate__headShake', 'animate__delay-1s');

    }
    // password validation 
    else if (inputPasswordLength < 8) {

        head.classList.add('animate__animated', 'animate__shakeX', 'animate__fast');

        mouth.style = 'transform:translateY(5px); transform:scaleY(-1);';
        nose_line.setAttribute('y2', '246')
        teeth.style.transform = 'translateY(-14px)';

        inputEmail.style.border = 'solid 2px green';

        inputPassword.style.border = 'solid 2px red';
        inputPassword.classList.remove('animate__headShake');

        inputPassword.classList.add('animate__animated', 'animate__headShake', 'animate__delay-1s');
    }
    else {
        console.log('Mail OK & PASSWORD OK');

        head.classList.remove('animate__shakeX');
        head.classList.add('animate__tada');
        hands.classList.add('animate__tada');

        inputEmail.style.border = 'none';
        inputEmail.classList.remove('animate__animated');
        inputEmail.classList.remove('animate__headShake');

        inputPassword.style.border = 'solid 2px green';

        mouth.style.transform = 'scaleY(1)';
        nose_line.setAttribute('y2', '265')
        teeth.style.transform = 'translateY(0px)';

    }

    return

}

function mouseOutLogin() {
    console.log('mouseOutLogin');

    head.classList.remove('animate__shakeX');
    head.classList.remove('animate__tada');

    inputEmail.classList.remove('animate__headShake');
    inputPassword.classList.remove('animate__headShake');

    mouth.style.transform = 'scaleY(1)';
    nose_line.setAttribute('y2', '265')
    teeth.style.transform = 'translateY(0px)';

    return

}