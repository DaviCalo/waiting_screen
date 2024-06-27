window.onload = () => {
    const nolog = document.getElementById('nlog-load-match');
    const log = document.getElementById('log-load-match');
    const host = document.getElementById('host-load-match');
    const play = document.getElementById('play-match');
    const how = document.getElementById('div-how-load-match');

    const hidden = 'play';

    switch (hidden) {
        case 'nolog':
            nolog.classList.remove('hidden');
            log.setAttribute('class', 'hidden');
            host.setAttribute('class', 'hidden');
            break;
        case 'log':
            nolog.setAttribute('class', 'hidden');
            log.classList.remove('hidden');
            host.setAttribute('class', 'hidden');
            break;
        case 'host':
            nolog.setAttribute('class', 'hidden');
            log.setAttribute('class', 'hidden');
            host.classList.remove('hidden');
            break;
        default:
            nolog.setAttribute('class', 'hidden');
            log.setAttribute('class', 'hidden');
            host.setAttribute('class', 'hidden');
            how.setAttribute('class', 'hidden');
    }
}


// speaker button
const speaker = document.getElementById('speaker-button');

speaker.addEventListener('click', () => {
    const speaker = document.getElementById('on-speaker-button');
    const speakerMute = document.getElementById('not-speaker-button');
    
    speakerMute.getAttribute('class') === 'hidden' ? speakerMute.setAttribute('class', '') : speakerMute.setAttribute('class', 'hidden');
    speaker.getAttribute('class') === 'hidden' ? speaker.setAttribute('class', '') : speaker.setAttribute('class', 'hidden');
});


// speaker.classList.toggle('hidden');




// Atavar imagem
const divedit = document.getElementById('div-avatar-input-nolog-set-user');

divedit.addEventListener('click', () => {
    document.getElementById('avatar-input-nolog-set-user').click();
});

document.getElementById('avatar-input-nolog-set-user').addEventListener('change', (event) => {
    const arquivoSelecionado = event.target.files[0];
    const minhaImagem = document.getElementById('image-nlog-set-user');
    minhaImagem.setAttribute('src', arquivoSelecionado ? URL.createObjectURL(arquivoSelecionado) : "./src/Captura de tela 2024-06-03 122433.png");
  });