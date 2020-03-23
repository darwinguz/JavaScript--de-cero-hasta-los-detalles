function identificar(param) {
  console.log(typeof param);
  console.log(param instanceof Persona);
  // if (typeof param === "function") {
  //   param();
  // } else {
  //   console.log(param)
  // }
}

function Persona() {
  this.nombre= "Darwin";
  this.apellido = "Guzman";
  this.edad = 23;
}

// identificar("Hola");

var juan = new Persona();
identificar(juan);
identificar(function () {
  console.log("soy anonima")
});
identificar(2);
