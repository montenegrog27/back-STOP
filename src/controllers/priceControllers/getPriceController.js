const { sequelize } = require("../../db"); // Ajusta la ruta según tu estructura

exports.getPrecios = async (req, res) => {
  try {
    const Precio = sequelize.models.Precio; // Accede al modelo Precio a través de sequelize.models
    const precios = await Precio.findAll();
    res.json(precios);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
