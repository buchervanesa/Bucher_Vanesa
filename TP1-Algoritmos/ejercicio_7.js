var valores = [true, false, 2, "hola", "mundo", 3, "char"];


var textos = valores.filter(element => typeof element === 'string');

var textoMayor = textos.reduce((acc, current) => acc.length >= current.length ? acc : current);
console.log("El texto con más letras es: " + textoMayor);


var textosOrdenados = textos.sort((a, b) => a.length - b.length);
console.log("Textos ordenados por cantidad de letras: ", textosOrdenados);

var numeros = valores.filter(element => typeof element === 'number');
if (numeros.length === 2) {
    var num1 = numeros[0];
    var num2 = numeros[1];

    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;

    console.log("Suma: " + suma);
    console.log("Resta: " + resta);
    console.log("Multiplicación: " + multiplicacion);
    console.log("División: " + division);
} else {
    console.log("No hay dos elementos numéricos.");
}

