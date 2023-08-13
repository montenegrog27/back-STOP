const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index");
// ... otras importaciones ...

const server = express();
// const puerto = process.env.PUERTO || 3001;

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/", routes);

// ... usa otros módulos de rutas ...
module.exports = server;

// app.listen(puerto, () => {
//   console.log(`Servidor escuchando en el puerto ${puerto}`);
// });
