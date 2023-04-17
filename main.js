function playSong (idElementAudio) {
   document.querySelector(idElementAudio).play(); 
}
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let counter = 0; counter < listaDeTeclas.length; counter++) {

    const tecla = listaDeTeclas[counter];
    const instrumento = tecla.classList[1];

    tecla.onclick = function () {
        playSong (`#som_${instrumento}`)
    };
    
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}