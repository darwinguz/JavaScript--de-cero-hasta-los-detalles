function a() {
  console.log("Función a")
}

a();
a.nombre = "María";
// no lo convierte porque es un atributo reservado q devuelve el nombre de la funcion
a.name = "María";
a.direccion = {
  pais: "Costa Rica",
  ciudad: "San Jose",
  edificio: {
    "piso": "8vo",
    "nombre": "Edificio"
  }
};

a.apply = 2;
