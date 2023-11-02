const mongoose = require('mongoose');

// crear el esquema (las caracteristicas que tendrá cada documento)
const studentSchema = new mongoose.Schema({
  username: {
    // determinar multiples validaciones de esta propiedad
    type: String,
    required: true, // esta propiedad es obligatoria
    unique: true // el username no se puede repetir
  },
  candy: {
    type: Number,
    required: true,
    default: 1 // en caso que no demos un valor, el sistema automaticamente coloca este valor
  },
  likesPokemon: Boolean,
  pizzaToppings: [ {
    type: String,
    enum: ["peperoni", "tomate", "piña", "jamon", "anchoas"] // enum es, los unicos posibles valores que puede haber en esta propiedad
  } ]
})

// ! cada vez que nosotros modificamos el schema de una colleccion, debemos borrar y empezar de nuevo la coleccion.

// crear el modelo => la manito que nos permitirá acceder a la DB para buscar data o hacer cambios. Se escriben en PascalCasing
const Student = mongoose.model("Student", studentSchema)
//                                  |
//                    el nombre del nodelo con el conocé internamente


module.exports = Student