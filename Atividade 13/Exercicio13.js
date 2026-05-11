const img = document.getElementById('janela');
const titulo = document.getElementById('status');

let quebrada = false;

function setEstado(tipo) {
    if (tipo === 'aberta') {
        img.src = './images/janelaaberta.webp';
        titulo.textContent = 'Janela Aberta';
    } else if (tipo === 'fechada') {
        img.src = './images/janelafechada.png';
        titulo.textContent = 'Janela Fechada';
    } else if (tipo === 'quebrada') {
        img.src = './images/janelaquebrada.png';
        titulo.textContent = 'Janela Quebrada';
    }
}

img.addEventListener('mouseover', function() {
    if (!quebrada) {
        setEstado('aberta');
    }
});

img.addEventListener('mouseout', function() {
    if (!quebrada) {
        setEstado('fechada');
    }
});

img.addEventListener('click', function() {
    if (!quebrada) {
        quebrada = true;
        setEstado('quebrada');
    }
});

img.src = './images/janelafechada.png';
titulo.textContent = 'Abra a Janela';
quebrada = false;