/*
function imprimir(nombre, apellido) {
  // i)
  apellido = apellido || "xxx";
  // ii)
  // if (apellido === undefined) {
  //   apellido = "xxx";
  // }
  console.log(nombre + " " + apellido);
}
imprimir("Darwin");
// imprimir();
*/

/*
function imprimir(persona) {
  console.log(persona.nombre + " " + persona.apellido);
  persona.nombre = "Santiago";
}
var obj = {
  nombre: "Darwin",
  apellido: "Guzmán"
};

imprimir(obj);
console.log(obj);
*/

function imprimir(fn) {
  fn();
}

// function imprimir(fn1, fn2, var1, var2, obj1, obj2) {
//   fn();
// }

var funcionExpl = function () {
  console.log("Función Explicita");
};

imprimir(function () {
  console.log("Función Anónima");
});

imprimir(funcionExpl);
