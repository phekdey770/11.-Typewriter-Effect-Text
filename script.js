const typeWriter = document.getElementById('typewriter-text');
const text = 'Define two animations, typing to animate.';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
