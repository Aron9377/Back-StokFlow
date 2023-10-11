const ProductosModel = require("../models/productos.models");
const Productos = require("../models/productos.models");

// Obtener productos

const obtenerProductos = async (req, res) => {
  try {
    const producto = await Productos.find();
    res.json(producto);
  } catch (error) {
    res.status(400).json("Productos no encontrados");
  }
};

const obtenerProductosPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await ProductosModel.findById(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  } catch (error) {
    res.status(400).json("Producto no encontrado");
    res.status(500).json("Error en el servidor");
  }
};

// creacion de un producto

const addProductos = async (req, res) => {
  try {
    const producto = new CanchaModel(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json("Producto no creado");
  }
};

// Actualizar un producto

const updateProductos = async (req, res) => {
  try {
    const id = req.params.id;
    const cancha = await CanchaModel.findById(id);
    if (cancha) {
      cancha.numero = req.body.numero;
      cancha.capacidad = req.body.capacidad;
      cancha.precio = req.body.precio;
      cancha.img = req.body.img;
      const canchaActualizada = await cancha.save();
      res.status(200).json("Cancha actualizada");
      res.status(canchaActualizada);
    } else {
      res.status(400).json("Cancha no encontrada ");
    }
  } catch (error) {
    res.status(404).json("cancha no encontrada");
  }
};

// Borrar un producto

const deleteProductos = async (req, res) => {
  try {
    const id = req.params.id;
    const cancha = await CanchaModel.findById(id);
    if (cancha) {
      await CanchaModel.deleteOne({ _id: id });
      res.status(200).json("Cancha eliminada");
    } else {
      res.status(404).json("Cancha no encontrada");
    }
  } catch (error) {
    res.status(400).json("Cancha no eliminada");
  }
};

module.exports = {
    obtenerCanchas,
    obtenerCanchasPorId,
    addCancha,
    updateCancha,
    deleteCancha
}