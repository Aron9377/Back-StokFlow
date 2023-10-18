const express = require("express");
const app = express();
const connectDb = require("./db/mongodb");
// // const productos = require("./productos");
// const comprabacionJwt = require("./middleware/comprobacionjwt");


const PORT = 8081;

const initApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`servidor puesto en marcha en el puerto ${PORT}`);
    });
    await connectDb();
   
  } catch (error) {
    console.log("Error al iniciar la aplicacion")
    
  }
};

initApp();



// crar rutas en express
app.use("/api", require("./routes/Rutas-productos"));
app.use("/api/user", require("./routes/Rutas-usuarios"));
// app.use("/protegida", comprabacionJwt, require("./routes/Rutas-admin"));

