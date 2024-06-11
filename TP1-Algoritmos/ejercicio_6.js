
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


var mes = prompt("Introduce el número del mes (por ejemplo, 1 para Enero)").trim();
var numeroMes = parseInt(mes);


if (!isNaN(numeroMes) && numeroMes >= 1 && numeroMes <= 12) {

  var resultado = meses[numeroMes - 1];
  document.write(`El mes número ${numeroMes} es ${resultado}.`);
} else {
  document.write("El número del mes introducido no es válido.");
}


