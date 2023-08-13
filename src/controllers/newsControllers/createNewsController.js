const { sequelize } = require("../../db");

exports.crearAviso = async (req, res) => {
  const { titulo, contenido } = req.body;
  console.log("Nuevo aviso:", titulo, contenido);

  try {
    const News = sequelize.models.News;

    // Eliminar el aviso existente
    await News.destroy({ truncate: true });

    // Crear el nuevo aviso
    const avisoCreado = await News.create({ titulo, contenido });
    res.json(avisoCreado);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ocurrió un error" });
  }
};
