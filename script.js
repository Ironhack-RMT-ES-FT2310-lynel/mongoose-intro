

// conectar con nuestra BD desde JS
const mongoose = require('mongoose');

const Student = require("./models/student.model.js")

mongoose.connect('mongodb://127.0.0.1:27017/my-first-database')
.then(() => {
  console.log("conectados correctamente a la DB")

  // cada vez que ejecutemos el codigo, lo que pongamos acá va a ocurrir

  // Create (Crear)
  return Student.create({
    username: "Chalo",
    candy: 10,
    likesPokemon: true,
    pizzaToppings: ["peperoni", "jamon", "piña"]
  })

  // Read (Leer)
  // Update (Actualizar)
  // Delete (Borrar)


})
.then(() => {
  console.log("nuevo estudiante creado")
})
.catch((error) => {
  console.log(error)
})

// ... ???

// operaciones en la BD => CRUD