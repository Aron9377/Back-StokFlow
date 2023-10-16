const express = require("express");
const app = express();
// const productos = require("./productos");
const comprabacionJwt = require("./middleware/comprobacionjwt");


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`servidor puesto en marcha en el puerto ${PORT}`);
});

// crar rutas en express
app.use("/api", require("./routes/Rutas-productos"));
app.use("/api/user", require("./routes/Rutas-usuarios"));
app.use("/protegida", comprabacionJwt, require("./routes/Rutas-admin"));

