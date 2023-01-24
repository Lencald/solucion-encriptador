textoInicial.focus();

function SoloLetras(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    teclado_especial = false;

    for (var i in especiales) {

        if (key == especiales[i]) {
            teclado_especial = true;
            break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }


}

function encriptar() {
    var fraseInicial = document.getElementById("textoInicial").value.toLowerCase();
    textoInicial.focus();
    if (textoInicial.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese o Pegue el texto a Encriptar'
        })
    }
    var fraseFinal = fraseInicial.replace(/e/img, "enter");
    var fraseFinal = fraseFinal.replace(/o/img, "ober");
    var fraseFinal = fraseFinal.replace(/i/img, "imes");
    var fraseFinal = fraseFinal.replace(/a/img, "ai");
    var fraseFinal = fraseFinal.replace(/u/img, "ufat");
    document.getElementById("textoFinal").innerHTML = fraseFinal;

}

function desencriptar() {
    var fraseInicial = document.getElementById("textoInicial").value;
    textoInicial.focus();
    if (textoInicial.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese o Pegue el texto a Desencriptar'
        })
    }
    var fraseFinal = fraseInicial.replace(/enter/img, "e");
    var fraseFinal = fraseFinal.replace(/ober/img, "o");
    var fraseFinal = fraseFinal.replace(/imes/img, "i");
    var fraseFinal = fraseFinal.replace(/ai/img, "a");
    var fraseFinal = fraseFinal.replace(/ufat/img, "u");
    document.getElementById("textoFinal").innerHTML = fraseFinal;
}

function copiar() {
    textoInicial.focus();
    if (textoFinal.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No existe un Texto para Encriptar o Desencriptar'
        })
    }
    else {
        var contenido = document.getElementById("textoFinal");
        contenido.select();
        document.execCommand('copy');
        textoInicial.focus();
        Swal.fire(
            'Exito',
            'Copiado Correctamente',
            'success'
        )
        document.getElementById("textoInicial").value = "";
    }

}