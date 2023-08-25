// routes/routeSale.js
const express = require("express");
const router = express.Router();
const getSaleController = require("../controllers/saleControllers/getSaleController");
const createSaleController = require("../controllers/saleControllers/createSaleController");
const updateSaleController = require("../controllers/saleControllers/updateSaleController");
const deleteSaleController = require("../controllers/saleControllers/deleteSaleController");
const getPriceController = require("../controllers/priceControllers/getPriceController");
const setPriceController = require("../controllers/priceControllers/setPriceController");
const deletePriceController = require("../controllers/priceControllers/deletePriceController");
const getNewsController = require("../controllers/newsControllers/getNewsController");
const createNewsController = require("../controllers/newsControllers/createNewsController");
const deleteNewsControllers = require("../controllers/newsControllers/deleteNewsControllers");

//     AVISOS
// Obtener todos los avisos
router.get("/avisos", getNewsController.getAvisos);

// Crear aviso
router.post("/avisos", createNewsController.crearAviso);

// Eliminar aviso por su ID
router.delete("/avisos/:id", deleteNewsControllers.eliminarAviso);

//        PRECIOS
router.delete("/precios/:producto", deletePriceController.eliminarPrecio); //ELIMINA PRECIO
router.get("/precios", getPriceController.getPrecios); //TRAE LOS PRECIOS
router.post("/actualizar-precios", setPriceController.actualizarPrecios); //ACTUALIZA LOS PRECIOS

//      OFERTAS
router.get("/ofertas", getSaleController.getOfertas);
router.path("/ofertas/:id", updateSaleController.modificarOferta);
router.post("/ofertas", createSaleController.crearOfertas);
router.delete("/ofertas/:id", deleteSaleController.eliminarOferta);

module.exports = router;
