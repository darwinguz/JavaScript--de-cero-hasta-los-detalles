var persona = {
  nombre: "Darwin",
  apellido: "Guzman",
  imprimirNombre: function () {
    console.log(this.nombre + " " + this.apellido);
  },
  direccion: {
    pais: "Ecuador",
    obtenerPais: function () {
      console.log("La direccion es en " + this.pais);
      var self = this;
      var nuevaDireccion = function () {
        console.log(this);
        //imprime pais undefined por que el objeto this equivale a window en este contexto
        console.log("La direccion en nueva direccion es (THIS) " + this.pais);
        console.log("La direccion en nueva direccion es (SELF) " + self.pais);
      };
      nuevaDireccion();
    }
  }
};

persona.nombre = "Andres";
persona.imprimirNombre();
persona.direccion.obtenerPais();
