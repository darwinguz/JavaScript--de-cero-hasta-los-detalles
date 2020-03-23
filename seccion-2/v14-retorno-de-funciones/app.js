function obtenerAleatorio() {
  return Math.random();
}

console.log(obtenerAleatorio() + 10);

function obtenerNombre() {
  return "Juan";
}

var nombre = obtenerNombre();
console.log(nombre + " " + "Guzmán");

function esMayor05() {
  return obtenerAleatorio() > 0.5;
}

if (esMayor05()) {
  console.log("Es mayor a 0.5")
} else {
  console.log("Es menor a 0.5")
}

function crearPersona(nombre, apellido) {
  return {
    nombre,
    apellido
  }
}

var persona = crearPersona("Darwin", "Guzman");
console.log(persona.nombre);

function crearFuncion() {
  return function (nombre) {
    console.log("Me creó " + nombre);
    return function () {
      console.log("Segunda funcion");
    }
  }
}

var nuevaFuncion = crearFuncion();
nuevaFuncion("Joss")();
