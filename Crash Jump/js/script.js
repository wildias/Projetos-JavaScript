const crash = document.querySelector('.crash');
const nitro = document.querySelector('.nitro');

const jump = () => {
    crash.classList.add('jump');

    setTimeout(() => {

        crash.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const nitroPosition = nitro.offsetLeft; 
    const crashPosition = +window.getComputedStyle(crash).bottom.replace
    ('px', '');

    if (nitroPosition <= 85 && nitroPosition > 0 && crashPosition < 50) {

        nitro.style.animation = 'none';
        nitro.style.left = '${nitroPosition}px';

        crash.style.animation = 'none';
        crash.style.left = '${crashPosition}px';

        crash.src = './imagens/anjo.png';
        crash.style.width = '150px';
        crash.style.marginleft = '-200px';

        clearInterval(loop);

    }

},10);

document.addEventListener('keydown', jump);