const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductosSchema = new Schema(
  {
    nombre: String, // {type: String, requerid: true}
    precio: Number,
    stock: Number, 
  
  },
  { versionKey: false }
);

const ProductosModel = mongoose.model("productosflow", ProductosSchema);

module.exports = ProductosModel;