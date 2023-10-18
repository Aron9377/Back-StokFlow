const express = require("express");
const router = express.Router();
const canchasController = require("../controllers/canchacontrollers");

// Rutas del GET

router.get("/productos", canchasController.obtenerProductos);
router.get("/productos/:id", canchasController.obtenerProductosPorId);

//Rutas de Post

router.post("/canchas", canchasController.addProductos);

// Rutas de put
router.put("/canchas/:id", canchasController.updateProductos);
// router.put("/canchas/reserva/:id", canchasController.reservarCancha);

// Rutas del delete
router.delete("/canchas/:id", canchasController.deleteProductos);
// router.delete("/canchas/reserva/:id", canchasController.eliminarReserva);


module.exports = router;