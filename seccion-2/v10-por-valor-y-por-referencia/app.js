//por valor
console.log('POR VALOR');
var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);

//por referencia
console.log('POR REFERENCIA');
var c = {
    nombre: "Joselyn"
};

var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Maria";

console.log("c: ", c);
console.log("d: ", d);
