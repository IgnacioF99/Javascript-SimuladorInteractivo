function calcularSalud(edad, peso, altura) {
  if (edad < 0 || peso <= 0 || altura <= 0) {
    return "Datos inválidos";
  }

  let imc = peso / (altura * altura);
  let salud;

  if (imc < 18.5) {
    salud = "Bajo peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    salud = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    salud = "Sobrepeso";
  } else {
    salud = "Obesidad";
  }

  return "Edad:" + edad + ", IMC: " + imc.toFixed(2) + ", Salud: " + salud;
}

let edad;
let peso;
let altura;

function obtenerDatos() {
  edad = parseInt(prompt("Ingrese su edad:"));
  peso = parseFloat(prompt("Ingrese su peso en Kg:"));
  altura = parseFloat(prompt("Ingrese su altura en metros:"));
  let resultado = calcularSalud(edad, peso, altura);
  alert(resultado);
  console.log(resultado);
}
obtenerDatos();
