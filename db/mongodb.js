const mongoose = require("mongoose");
const ProductosModel = require("../models/productos.models");

// Conectar a la base de datos

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0/productosflow", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
// const allProductos = await ProductosModel.find();
// console.log(allProductos);

  } catch (error) {
    console.log("Error al concetar la base de datos");
  }
};

module.exports = connectDb;
