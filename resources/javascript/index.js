const mainParagraph = document.getElementById('main-paragraph');
const eyesEreaR = document.getElementById('eyes-area-r');
const eyesEreaL = document.getElementById('eyes-area-l');
const eyeCercleR = document.getElementById('eye-cercle-r')
const eyeCercleL = document.getElementById('eye-cercle-l')
const mouth = document.getElementById('mouth');
const thoughtArea = document.getElementById('thought-bubble')
// start events and functions
const changeColor = () => {
  eyesEreaR.style.backgroundColor = 'red';
  eyesEreaL.style.backgroundColor = 'red';
  eyeCercleR.style.top = '5%';
  eyeCercleR.style.backgroundColor = '5%';
  eyeCercleL.style.top = '5%';
  mouth.style.borderColor = 'beige beige transparent';

}
mainParagraph.addEventListener('mouseover', changeColor);

const returnColor = () => {
  eyesEreaR.style.backgroundColor = '';
  eyesEreaL.style.backgroundColor = '';
  eyeCercleR.style.top = '';
  eyeCercleR.style.backgroundColor = '';
  eyeCercleL.style.top = '';
  mouth.style.borderColor = ''

}
mainParagraph.addEventListener('mouseout', returnColor);

// mouth interactions
const thoughtRandomText = [];
mouth.onmouseover = function() {
  thoughtArea.style.visibility = 'visible';
}
mouth.onmouseout = function() {
  thoughtArea.style.visibility = 'hidden';
}
