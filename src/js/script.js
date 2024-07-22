let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let backBoston = document.getElementById("maior-campeao");
let btnPause = document.getElementById('btn-pause');
let btnPlay = document.getElementById('btn-play');

backBoston.style.backgroundColor = '#1d7446';

// Mostra o menu ao clicar no botao
btnMenu.addEventListener('click', function() {
    menu.classList.add('abrir-menu');
});

// Fecha o menu ao clicar no botao
menu.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});

// Fecha o menu ao clicar fora
overlay.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});

// Botao de pause
btnPause.addEventListener('click', function() {
    let audio = document.getElementById("audio");
    audio.pause();
    btnPause.style.display = "none";
    btnPlay.style.display = "block";
});
// Botao de play
btnPlay.addEventListener('click', function() {
    let audio = document.getElementById("audio");
    audio.play();
    btnPlay.style.display = "none";
    btnPause.style.display = "block";
});

// Pausar e retorna a música ao sair do navegador
document.addEventListener('visibilitychange', function() {
    // Verificar se pagina esta oculta
    if (document.hidden) {
        // pausa a musica
        audio.pause(); 

        // Troca os botoes
        btnPause.style.display = "none"; 
        btnPlay.style.display = "block";
    }
    
    // // Verificar se pagina esta oculta
    // else if (! document.hidden ) {
    //     // Retorna a musica
    //     audio.play();

    //     // Troca os botoes
    //     btnPlay.style.display = "none";
    //     btnPause.style.display = "block";
    // }
});
