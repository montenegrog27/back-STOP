const { sequelize } = require("../../db"); // Ajusta la ruta según tu estructura

exports.getAvisos = async (req, res) => {
  try {
    const News = sequelize.models.News; // Accede al modelo News a través de sequelize.models
    const avisos = await News.findAll();
    res.json(avisos);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
