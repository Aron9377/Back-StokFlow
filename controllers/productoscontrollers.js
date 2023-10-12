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
    const producto = new ProductosModel(req.body);
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
    const producto = await ProductosModel.findById(id);
    if (producto) {
      producto.numero = req.body.numero;
      producto.capacidad = req.body.capacidad;
      producto.precio = req.body.precio;
      producto.img = req.body.img;
      const productoActualizada = await producto.save();
      res.status(200).json("Producto actualizado");
      res.status(productoActualizada);
    } else {
      res.status(400).json("Producto no encontrado ");
    }
  } catch (error) {
    res.status(404).json("cancha no encontrada");
  }
};

// Borrar un producto

const deleteProductos = async (req, res) => {
  try {
    const id = req.params.id;
    const cancha = await ProductosModel.findById(id);
    if (cancha) {
      await ProductosModel.deleteOne({ _id: id });
      res.status(200).json("Producto eliminado");
    } else {
      res.status(404).json("Producto no encontrado");
    }
  } catch (error) {
    res.status(400).json("Producto no eliminado");
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductosPorId,
  addProductos,
  updateProductos,
  deleteProductos,
};
