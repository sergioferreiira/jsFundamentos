function playSong (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const keysList = document.querySelectorAll('.tecla');

let counter = 0;

while (counter < keysList.length) {

    const keyBoard = keysList[counter];
    const audio = keyBoard.classList[1];

    keyBoard.onclick = function () {
        playSong (`#som_${audio}`)
    };

    counter = counter + 1;
}