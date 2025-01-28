const texts = ['Android App Developer     ', 'Flutter Developer     ', 'Web Developer     '];
let index = 0;

function typewriterEffect() {
    const animatedText = document.getElementById('animated-text');
    
    animatedText.style.animation = 'none';
    animatedText.textContent = texts[index];
    animatedText.style.animation = 'typing 3s steps(30, end), blink 0.5s step-end infinite';

    setTimeout(() => {
        animatedText.style.animation = 'erasing 2s steps(30, end), blink 0.5s step-end infinite';

        setTimeout(() => {
            index = (index + 1) % texts.length;
            typewriterEffect();
        }, 2800);
    }, 3000);
}

typewriterEffect();
