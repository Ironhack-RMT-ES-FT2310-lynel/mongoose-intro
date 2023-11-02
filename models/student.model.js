const mongoose = require('mongoose');

// crear el esquema (las caracteristicas que tendrá cada documento)
const studentSchema = new mongoose.Schema({
  username: String,
  candy: Number,
  likesPokemon: Boolean,
  pizzaToppings: [ String ]
})

// crear el modelo => la manito que nos permitirá acceder a la DB para buscar data o hacer cambios. Se escriben en PascalCasing
const Student = mongoose.model("Student", studentSchema)
//                                  |
//                    el nombre del nodelo con el conocé internamente


module.exports = Student