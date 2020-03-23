function Persona() {
  this.nombre = "Darwin";
  this.apellido = "Guzman";
  this.edad = 30;
}

Persona.prototype.imprimirInfo = function () {
  console.log(this.nombre + " " + this.apellido + " (" + this.edad + ")")
};

var darwin = new Persona();
darwin.imprimirInfo();
console.log(darwin);
console.log(darwin.pais);

var a = "Texto";

var b = 5;
Number.prototype.esPositivo = function () {
  if (this > 0) {
    return true;
  } else {
    return false;
  }
};
