var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San José",
        edificio: {
            nombre: "Edificio principal",
            telefono: "2 555 444"
        }
    }
};
//notacion de punto
console.log('NOTACION DE PUNTO');
persona.direccion.zipcode = 11101;

var edificio = persona.direccion.edificio;
edificio.nopiso = "8vo Piso";

console.log(persona);

//notacion de corchetes
console.log('NOTACION DE CORCHETES');
var campo = "edad";
var campo2 = "edad2";
console.log(persona["nombre"]);
console.log(persona["direccion"]);
console.log(persona["direccion"]["pais"]);
console.log(persona[campo]);

//si no existe la propiedad en las dos notaciones saldra undefined:
console.log('AMBAS NOTACIONES SI NO EXISTE PROPIEDAD');
console.log(persona[campo2]);
console.log(persona.edad2);

