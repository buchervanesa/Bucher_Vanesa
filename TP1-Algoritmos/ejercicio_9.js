let notas = [];


for (let i = 0; i < 5; i++) {
    let nota;
    do {
        nota = parseFloat(prompt("Introduce una nota entre 0 y 10:"));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    notas.push(nota);
}

console.log("Notas:", notas);


let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
let promedio = suma / notas.length;

console.log("Promedio:", promedio);


let resultado;
if (promedio < 5) {
    resultado = "Reprobado";
} else if (promedio >= 5 && promedio <= 8) {
    resultado = "Aprobado";
} else if (promedio > 8) {
    resultado = "Sobresaliente";
}

console.log(resultado);
