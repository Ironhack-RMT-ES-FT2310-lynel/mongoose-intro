

// conectar con nuestra BD desde JS
const mongoose = require('mongoose');

const Student = require("./models/student.model.js")

// los archivos de JSON el sistema los exporta automaticamente.
const allStudents = require("./data/students.json")

mongoose.connect('mongodb://127.0.0.1:27017/my-first-database')
.then(() => {
  console.log("conectados correctamente a la DB")

  // cada vez que ejecutemos el codigo, lo que pongamos acá va a ocurrir

  // Create (Crear)
  // return Student.create({
  //   username: "Chalo",
  //   candy: 10,
  //   likesPokemon: true,
  //   pizzaToppings: ["peperoni", "jamon", "piña"]
  // })
  // return Student.insertMany(allStudents)
  
  // Read (Leer)
  //            query de mongo
  //                   |
  // return Student.find( { pizzaToppings: { $in: ["piña"] } } ) // busca todo lo que cumpla la condicion

  // ejemplo de opciones de busqueda
  // return Student.find( { likesPokemon: true } )
  // .select( { username:1, candy: 1 } )
  // .sort( { candy: 1 } )
  // .skip(1)
  // .limit(2)

  // return Student.findOne( { username: "Adrian" } ) // devuelve un OBJ con el documento primer documento encontrado
  // return Student.findById("6543b4ade85461c92405f3b9") // forma optimizada de mongo para buscar documentos

  // Update (Actualizar)
  // return Student.findOneAndUpdate( { username: "Chalo" }, { $pull: {pizzaToppings: "jamon"}, candy: 30 }, {new: true} )
  // dos argumentos
  // 1. la busqueda que hacemos
  // 2. el cambio que queremos hacer
  // POR ALGUNA RAZON EXTRAÑA DE MONGO, los metodos de actualizar, nos devuelven el documento desactualizado. Para cambiar este comportamiento, debemos agregarle un 3r argumento { new: true }

  // Delete (Borrar)
  return Student.findByIdAndDelete("6543b4ade85461c92405f3b7")



})
.then((response) => {
  // console.log("varios estudiantes añadidos a la DB")
  console.log("documento borrado", response)
})
.catch((error) => {
  console.log(error)
})

// ... ???

// operaciones en la BD => CRUD