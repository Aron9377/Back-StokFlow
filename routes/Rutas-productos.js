const express = require("express");
const router = express.Router();
const productoscontroller = require("../controllers/productoscontrollers");

// Rutas del GET

router.get("/productos", productoscontroller.obtenerProductos);
router.get("/productos/:id", productoscontroller.obtenerProductosPorId);

//Rutas de Post

router.post("/canchas", productoscontroller.addProductos);

// Rutas de put
router.put("/canchas/:id", productoscontroller.updateProductos);
// router.put("/canchas/reserva/:id", canchasController.reservarCancha);

// Rutas del delete
router.delete("/canchas/:id", productoscontroller.deleteProductos);
// router.delete("/canchas/reserva/:id", canchasController.eliminarReserva);


module.exports = router;