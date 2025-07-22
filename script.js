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
  edad = obtenerEdad();
  peso = obtenerPeso();
  altura = obtenerAltura();
  let resultado = calcularSalud(edad, peso, altura);
  alert(resultado);
  console.log(resultado);
}

function obtenerEdad() {
  // edad = parseInt(prompt("Ingrese su edad:"));
  // if (isNaN(edad) || edad < 0 || edad > 120) {
  //   alert("Edad inválida. Por favor, ingrese un número válido.");
  //   obtenerEdad();
  // } else {
  //   return edad;
  // }
  do {
    edad = parseInt(prompt("Ingrese su edad:"));
    if (isNaN(edad) || edad < 0 || edad > 120) {
      alert("Edad inválida. Por favor, ingrese un número válido.");
    }
  } while (isNaN(edad) || edad < 0 || edad > 120);
  return edad;
}

function obtenerPeso() {
  // peso = parseFloat(prompt("Ingrese su peso en Kg:"));
  // if (isNaN(peso) || peso <= 0) {
  //   alert("Peso inválido. Por favor, ingrese un número válido.");
  //   obtenerPeso();
  // } else {
  //   return peso;
  // }
  do {
    peso = parseFloat(prompt("Ingrese su peso en Kg:"));
    if (isNaN(peso) || peso <= 0) {
      alert("Peso inválido. Por favor, ingrese un número válido.");
    }
  } while (isNaN(peso) || peso <= 0);
  return peso;
}

function obtenerAltura() {
  // altura = parseFloat(prompt("Ingrese su altura en metros:"));
  // if (isNaN(altura) || altura <= 0 || altura > 3) {
  //   alert("Altura inválida. Por favor, ingrese un número válido.");
  //   obtenerAltura();
  // } else {
  //   return altura;
  // }
  do {
    altura = parseFloat(prompt("Ingrese su altura en metros:"));
    if (isNaN(altura) || altura <= 0 || altura > 3) {
      alert("Altura inválida. Por favor, ingrese un número válido.");
    }
  } while (isNaN(altura) || altura <= 0 || altura > 3);
  return altura;
}

obtenerDatos();
