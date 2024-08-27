function encriptar(texto) {
    const sustituciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.split('').map(caracter => sustituciones[caracter] || caracter).join('');
}

function desencriptar(texto) {
    const sustituciones = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let textoDesencriptado = texto;
    for (let clave in sustituciones) {
        textoDesencriptado = textoDesencriptado.split(clave).join(sustituciones[clave]);
    }
    return textoDesencriptado;
}

function procesarTexto(accion) {
    const textoEntrada = document.getElementById('textoEntrada').value;
    if (!esEntradaValida(textoEntrada)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    let resultado = '';

    if (accion === 'encriptar') {
        resultado = encriptar(textoEntrada);
        ocultarImagen(); // Llama a la función para ocultar la imagen
    } else if (accion === 'desencriptar') {
        resultado = desencriptar(textoEntrada);
    }

    document.getElementById('textoSalida').value = resultado;
}

function copiarAlPortapapeles() {
    const textoSalida = document.getElementById('textoSalida').value;
    if (textoSalida) {
        navigator.clipboard.writeText(textoSalida).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(error => {
            console.error('Error al copiar el texto: ', error);
        });
    } else {
        alert('No hay texto para copiar');
    }
}

function esEntradaValida(texto) {
    // Regex para letras minúsculas (a-z) sin caracteres especiales ni acentos
    const regex = /^[a-z]+$/;
    return regex.test(texto);
}

function validarEntrada() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    if (!esEntradaValida(textoEntrada)) {
        document.getElementById('textoEntrada').style.borderColor = 'red';
    } else {
        document.getElementById('textoEntrada').style.borderColor = '#ddd';
    }
}

function ocultarImagen() {
    const imagen = document.querySelector('.muneco');
    if (imagen) {
        imagen.style.display = 'none'; // Oculta la imagen
    }
}
