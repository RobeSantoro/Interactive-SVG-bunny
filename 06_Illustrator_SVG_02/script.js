let eyes = document.querySelectorAll(".eye");

let EyePosL = document.createAttribute('transform');
EyePosL.value = "translate(0,0)";

let EyePosR = document.createAttribute('transform');
EyePosR.value = "translate(0,0)";

eyes[0].setAttributeNode(EyePosL);
eyes[1].setAttributeNode(EyePosR);

