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

/* DOM */
const body = document.querySelector('body');
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
    head.classList.add('animate__animated', 'animate__repeat-1', 'animate__bounceInUp', 'animate__delay-1s');
    hands.classList.add('animate__animated', 'animate__repeat-1', 'animate__bounceInUp');
    return

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

    let x = mapRange(vX, newMinX, newMaxX, oldMinX, oldMaxX);
    let y = mapRange(vY, newMinY, newMaxY, oldMinY, oldMaxY);

    eyes[0].setAttribute("transform", `translate (${x} ${y})`);
    eyes[1].setAttribute("transform", `translate (${x} ${y})`);

    eyes_base.setAttribute("transform", `translate (${x / 2} ${y / 2})`);
    eyes_inside.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

    mouth_grp.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

    head_shape.setAttribute("transform", `translate (${x / 4} ${y / 4})`);

    ears.setAttribute("transform", `translate (${(x / 3) * -1} ${(y / 3) * -1})`);
    
    return

}

function eyesOnMail() {
    console.log("EyesOnMail");

    head.classList.remove('animate__repeat-1', 'animate__bounceInUp', 'animate__delay-1s');
    head.classList.remove('headOnPassword');



    let inputMailLength = inputEmail.value.length;

    if (window.innerWidth < 768) {

        head.classList.add('headOnMail768');

        let vX = inputMailLength;

        let newMinX = -15;
        let newMaxX = 15;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = mapRange(vX, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = 20;

        if (inputMailLength < 30) { //avoid wrapping by mapRange

            eyes[0].setAttribute("transform", `translate (${x} ${y})`);
            eyes[1].setAttribute("transform", `translate (${x} ${y})`);

            eyes_base.setAttribute("transform", `translate (${x / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${x / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(x / 3) * -1} ${(y / 3) * -1})`);

        } else { //avoid wrapping by mapRange

            eyes[0].setAttribute("transform", `translate (${newMaxX} ${y})`);
            eyes[1].setAttribute("transform", `translate (${newMaxX} ${y})`);

            eyes_base.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${newMaxX / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(newMaxX / 3) * -1} ${(y / 3) * -1})`);
        }


    }

    else { // window.innerWidth > 768

        head.classList.add('headOnMail');

        let vX = inputMailLength;

        let newMinX = 8;
        let newMaxX = 25;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = mapRange(vX, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = -10;

        if (inputMailLength < 30) { //avoid wrapping by mapRange
            eyes[0].setAttribute("transform", `translate (${x} ${y})`);
            eyes[1].setAttribute("transform", `translate (${x} ${y})`);

            eyes_base.setAttribute("transform", `translate (${x / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${x / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(x / 3) * -1} ${(y / 3) * -1})`);

        } else { //avoid wrapping by mapRange

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

    head.classList.remove('headOnMail', 'headOnMail768');
    head.classList.remove('animate__repeat-1', 'animate__bounceInUp', 'animate__delay-1s');

    head.classList.add('headOnPassword');

    let inputPasswordLength = inputPassword.value.length;

    if (window.innerWidth < 768) {

        let v = inputPasswordLength;

        let newMinX = -15;
        let newMaxX = 15;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = mapRange(v, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = 10;

        if (inputPasswordLength < 30) { //avoid wrapping by mapRange

            eyes[0].setAttribute("transform", `translate (${x} ${y})`);
            eyes[1].setAttribute("transform", `translate (${x} ${y})`);

            eyes_base.setAttribute("transform", `translate (${x / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${x / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(x / 3) * -1} ${(y / 3) * -1})`);

        } else { // window.innerWidth > 768

            eyes[0].setAttribute("transform", `translate (${newMaxX} ${y})`);
            eyes[1].setAttribute("transform", `translate (${newMaxX} ${y})`);

            eyes_base.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${newMaxX / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${newMaxX / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(newMaxX / 3) * -1} ${(y / 3) * -1})`);
        }
    }    
    else { // window.innerWidth > 768

        let v = inputPasswordLength;

        let newMinX = 8;
        let newMaxX = 25;

        let oldMinX = 0;
        let oldMaxX = 30;

        let x = mapRange(v, newMinX, newMaxX, oldMinX, oldMaxX);
        let y = -5;

        if (inputPasswordLength < 30) { //avoid wrapping by mapRange
            eyes[0].setAttribute("transform", `translate (${x} ${y})`);
            eyes[1].setAttribute("transform", `translate (${x} ${y})`);

            eyes_base.setAttribute("transform", `translate (${x / 2} ${y / 2})`);
            eyes_inside.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            mouth_grp.setAttribute("transform", `translate (${x / 2} ${y / 2})`);

            head_shape.setAttribute("transform", `translate (${x / 4} ${y / 4})`);

            ears.setAttribute("transform", `translate (${(x / 3) * -1} ${(y / 3) * -1})`);

        } else { //avoid wrapping by mapRange

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

function mouseOverLogin() {
    console.log('mouseOverLogin');

    head.classList.remove('headOnMail');
    head.classList.remove('headOnPassword');

    let inputMailLength = inputEmail.value.length;
    let inputMailContainsAt = inputEmail.value.includes('@');

    let inputPasswordLength = inputPassword.value.length;

    if (inputMailLength <= 5 | inputMailContainsAt === false) {

        head.classList.add('animate__delay-1s');
        head.classList.add('animate__repeat-1');
        head.classList.add('animate__fast');
        head.classList.add('animate__headShake');

        mouth.style = 'transform:translateY(5px); transform:scaleY(-1);';
        nose_line.setAttribute('y2', '246')
        teeth.style.transform = 'translateY(-14px)';

        inputEmail.style.border = 'solid 2px red';
        inputEmail.classList.add('animate__animated');
        inputEmail.classList.add('animate__shakeX');

    } else if (inputPasswordLength < 8) {

        head.classList.add('animate__headShake');

        mouth.style = 'transform:translateY(5px); transform:scaleY(-1);';
        nose_line.setAttribute('y2', '246')
        teeth.style.transform = 'translateY(-14px)';

        inputEmail.style.border = 'solid 2px green';

        inputPassword.style.border = 'solid 2px red';
        inputPassword.classList.remove('animate__headShake');

        inputPassword.classList.add('animate__animated');
        inputPassword.classList.add('animate__shakeX');
    }
    else {
        console.log('Mail OK & PASSWORD OK');

        head.classList.remove('animate__headShake');
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


    head.classList.remove('animate__headShake');
    head.classList.remove('animate__tada');
    
    inputEmail.classList.remove('animate__shakeX');
    inputPassword.classList.remove('animate__headShake');

    mouth.style.transform = 'scaleY(1)';
    nose_line.setAttribute('y2', '265')
    teeth.style.transform = 'translateY(0px)';

    return

}