function buscarPrimeraVocal(texto) {
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            console.log(`La primera vocal es "${texto[i]}" y está en la posición Nº${i + 1}`);
            return;
        }
    }
    console.log("No se encontraron vocales en el texto.");
}


var textoUsuario = prompt("Introduce un texto:");
buscarPrimeraVocal(textoUsuario);
