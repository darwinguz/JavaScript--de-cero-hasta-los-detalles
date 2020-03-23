function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 30;

  this.imprimirPersona = function () {
    return this.nombre + " " + this.apellido + " (" + this.edad + ")";
  };
  console.log("Paso por aqui");
}

var juan = new Persona("Darwin", "Guzman");
console.log(juan);
console.log(juan.nombre);
console.log(juan.imprimirPersona());
