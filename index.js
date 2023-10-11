const express = require("express");
const app = express();
const productos = require("./productos");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`servidor puesto en marcha en el puerto ${PORT}`);
});

// crar rutas en express

app.get("/", (req, res) => {
    res.send("desde express");
  });

app.get("/productos", (req, res) => {
  res.send(JSON.stringify(productos));
});
