const head = document.querySelector('.head');
const hands = document.querySelector('.hands');

head.style.setProperty('--animate-duration', '1s');
hands.style.setProperty('--animate-duration', '.5s');

document.addEventListener('wheel',()=>{
  console.log('START');
  head.classList.toggle('animate__bounceInUp');
  hands.classList.toggle('animate__bounceInUp');

})

head.addEventListener('animationend', () => {
  console.log('END');
  head.classList.toggle('animate__bounceInUp');
  hands.classList.toggle('animate__bounceInUp');

});




