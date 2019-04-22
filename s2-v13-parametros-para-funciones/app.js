function imprimir(fn) {
    fn();
}

var funcionExpl = function () {
    console.log("Funcion Explicita");
};

imprimir(function () {
    console.log("Funcion Anonima");
});
