function tocaSom(idElementAudio) {
    const elemento = document.querySelector(idElementAudio);

    if (elemento === null) {
        console.log('O elemento não foi encontrado');
    }
// not equal
// and
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('O elemento não foi encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrument = tecla.classList[1];

    tecla.onclick = function () {
        tocaSom(`#som_${instrument}`);
    }
// or
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');

        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

console.log(textTest);
const textTest = console.log('isso e um texto test');

