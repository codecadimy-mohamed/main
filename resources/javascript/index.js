const mainParagraph = document.getElementById('main-paragraph');
const eyesEreaR = document.getElementById('eyes-area-r');
const eyesEreaL = document.getElementById('eyes-area-l');
const eyeCercleR = document.getElementById('eye-cercle-r');
const eyeCercleL = document.getElementById('eye-cercle-l');
const face = document.getElementById('about-me-face');
const mouth = document.getElementById('mouth')

// start events and functions
const changeColor = () => {
  eyesEreaR.style.backgroundColor = 'lightgreen';
  eyesEreaL.style.backgroundColor = 'lightblue';
  eyeCercleR.style.top = '5%';
  eyeCercleR.style.backgroundColor = '5%';
  eyeCercleL.style.top = '5%';
  mouth.style.borderRadius = '20px';

}
mainParagraph.addEventListener('mouseover', changeColor);

const returnColor = () => {
  eyesEreaR.style.backgroundColor = '';
  eyesEreaL.style.backgroundColor = '';
  eyeCercleR.style.top = '';
  eyeCercleR.style.backgroundColor = '';
  eyeCercleL.style.top = '';
  mouth.style.borderRadius = ''

}
mainParagraph.addEventListener('mouseout', returnColor);

// mouth interactions
const thoughtArea = document.getElementById('thought-bubble')
const greetings = {
  english: ["Hello", "Hi", "Hey", "What's up","مرحبا", "أهلا","Hola", "Buenas", "Que tal","Bonjour", "Salut", "Coucou"]
};

face.onmouseover = function () {
  thoughtArea.style.visibility = 'visible';
  const gitGreet = greetings.english[Math.floor(Math.random() * greetings.english.length)];
  const thoughtText = document.getElementById('face-greeting')
  thoughtText.innerHTML = gitGreet;
  mouth.style.borderRadius = '20px';
}
face.onmouseout = function () {
  thoughtArea.style.visibility = 'hidden';
  mouth.style.borderRadius = '';
}
